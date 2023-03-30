import { useState } from 'react';
import './css/style.css'

const AddTodo = ({setTodos}) => {
    const [task,setTask] = useState({
        text: '',
    })

    const handleNewTask = (event) => {
        setTask({ text: event.target.value });
      };
      
      const handleSubmit = (event) => {
        event.preventDefault();
        if (task.text === '') {
          return;
        }
        setTodos(todos => [...todos, { task: task.text, isCompleted: false }]);
        setTask({ text: '' });
        console.log(task);
      };
      


    return (
        <div className='AddContainer'>
            <form onSubmit={handleSubmit} className='AddInput'>
                <input
                    value={task.text}
                    placeholder="タスクの追加"
                    onChange={handleNewTask}
                    />
            </form>
        </div>
    );
};

export default AddTodo;