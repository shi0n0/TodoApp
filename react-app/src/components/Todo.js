import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import './css/style.css'

const Todo = () => {

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

    return(
        <div className='container'>
            <TodoList todos={todos} setTodos={setTodos}/>
            <AddTodo setTodos={setTodos} />
        </div>
    );
};

export default Todo;