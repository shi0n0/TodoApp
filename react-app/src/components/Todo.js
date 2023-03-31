import { useState } from 'react';
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

    return (
          <div className='container'>
            <TodoList todos={todos} setTodos={setTodos} />
          </div>
      );
    
};

export default Todo;