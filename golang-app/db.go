package database

import(
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	db, err := sql.Open("mysql" , "root:root@tcp(localhost:3306)/TodoApp")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	CreateTable := `
        CREATE TABLE IF NOT EXISTS todos (
            id INT AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            PRIMARY KEY (id)
        );
    `

	_, err = db.Exec(CreateTable)
	if err != nil {
		panic(err.Error())
	}

	fmt.Println("Table created successfully!")
}