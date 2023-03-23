import { useState } from "react";
const TodoList = () => {

    const initialState = [
        {
            task: "Reactを学ぶ",
            isCompleted: false
        },

        {
            task: "Golangを学ぶ",
            isCompleted: false
        },

        {
            task: "GraphQLを学ぶ",
            isCompleted: false
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
        setTodos(todos => [...todos,{ task, isCompleted: false}])
        setTask('')
    }

    const handleTaskCompleated = (index) => {
        const newTodos = [...todos]
        newTodos[index].isCompleted = !newTodos[index].isCompleated
        setTodos(newTodos)
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
            <button type="submit" hidden>追加</button>
            <ul>
                { todos.map((todo,index) => (
                    <li key={ index }      
                    style={{
                        textDecoration: todo.isCompleted ? 'line-through' : 'none',
                    }}>
                        <label>
                            <input
                                type={"checkbox"}
                                checked={todo.isCompleted}
                                onChange={ () => handleTaskCompleated(index) }
                            />
                        </label>
                        { todo.task } 
                        <button onClick={ () => handleRemoveTask(index) }>削除</button>
                    <button></button>
                    </li>
                ))}
            </ul>
        </form>
    );
}

export default TodoList;