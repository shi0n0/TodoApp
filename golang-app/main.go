package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"

    "github.com/graphql-go/graphql"
    _ "github.com/go-sql-driver/mysql"
)

// UserTypeの定義
var UserType = graphql.NewObject(graphql.ObjectConfig{
    Name: "User",
    Fields: graphql.Fields{
        "id": &graphql.Field{
            Type: graphql.Int,
        },
        "text": &graphql.Field{
            Type: graphql.String,
        },
    },
})

// Querytypeの定義
var Querytype = graphql.NewObject(graphql.ObjectConfig{
    Name: "Query",
    Fields: graphql.Fields{
        "hello": &graphql.Field{
            Type: graphql.String,
            Resolve: func(p graphql.ResolveParams) (interface{}, error) {
                return "Hello, world!", nil
            },
        },
    },
})

// mutationTypeの定義
var mutationType = graphql.NewObject(graphql.ObjectConfig{
    Name: "Mutation",
    Fields: graphql.Fields{
        "Todo": &graphql.Field{
            Type: UserType,
            Args: graphql.FieldConfigArgument{
                "text": &graphql.ArgumentConfig{
                    Type: graphql.NewNonNull(graphql.String),
                },
            },
            Resolve: func(p graphql.ResolveParams) (interface{}, error) {
                text, _ := p.Args["text"].(string)

                // データベースに保存
                todo, err := CreateTodoWithDB(text)
                if err != nil {
                    return nil, err
                }

                return todo, nil
            },
        },
    },
})



type Todo struct {
	Id   int64 `json:"id"`
	Text string `json:"text"`
}

func CreateTodoWithDB(text string) (*Todo, error) {
	db, err := sql.Open("mysql", "root:root@tcp(localhost:3306)/mysql_container")
	if err != nil {
		return nil, err
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		return nil, err
	}

	result, err := db.Exec("INSERT INTO todos(text) VALUES(?)", text)
	if err != nil {
		return nil, err
	}

	id, _ := result.LastInsertId()

	todo := Todo{
		Id: id,
		Text: text,
	}

	return &todo, nil
}


func main() {

	http.HandleFunc("/graphql", func(w http.ResponseWriter, r *http.Request) {
		schema, _ := graphql.NewSchema(graphql.SchemaConfig{
			Query:    Querytype,
			Mutation: mutationType,
		})		

		result := graphql.Do(graphql.Params{
			Schema: schema,
			RequestString: r.URL.Query().Get("query"),
		})

		json.NewEncoder(w).Encode(result)
	})
	
	fmt.Println("Server started at http://localhost:8000/graphql")
	if err := http.ListenAndServe(":8000" , nil); err != nil{
        fmt.Printf("Server failed: %s\n", err)
	}
}

