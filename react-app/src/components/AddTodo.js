import { useState } from 'react';
import './css/style.css'
const AddTodo = ({ setTodos}) => {
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
    };

    return (
        <div className='AddContainer'>
            <form onSubmit={handleSubmit} className='AddInput'>
                <input
                    value={task}
                    placeholder="タスクの追加"
                    onChange={handleNewTask}
                    />
            </form>
        </div>
    );
};

export default AddTodo;