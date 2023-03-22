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
    const [task,setTask] = useState('')

    const handleNewTask = (event) => {
        setTask(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (task === '')
        return
        setTodos(todos => [...todos,{ task, isCompleated: false}])
        setTask('')
    }

    const handleRemoveTask = (index) => {
        const NewTodos = [...todos]
        NewTodos.splice(index,1)
        setTodos(NewTodos)
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Todo List</h1>
            タスクの追加 : <input
                            value={task}
                            placeholder="新しいタスク"
                            onChange={handleNewTask}
                            />
            <button type="submit">追加</button>
            <ul>
                { todos.map((todo,index) => (
                    <li key={ index }>{ todo.task } <button onClick={ () => handleRemoveTask(index) }>削除</button></li>
                ))}
            </ul>
        </form>
    );
}

export default TodoList;