import { useState } from "react";

const TodoList = () => {

    const initialState = [
        {
            task: "Reactを学ぶ",
            isCompleated: false
        },

        {
            task: "Golangを学ぶ",
            isCompleated: false
        },

        {
            task: "GraphQLを学ぶ",
            isCompleated: false
        },
    ]

    const [todos,setTodos] = useState(initialState);
    
    return(
        <div>
            <h1>Todo List</h1>
            <ul>
                { todos.map((todo,index) => (
                    <li key={ index }>{ todo.task }</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;