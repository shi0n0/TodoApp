import React from "react";
import './css/style.css'

const TodoList = ({todos,setTodos}) => {
    const handleTaskCompleated = (index) => {
        const newTodos = [...todos]
        newTodos[index].isCompleted = !newTodos[index].isCompleated
        setTodos(newTodos)
    };

    const handleRemoveTask = (index) => {
        const NewTodos = [...todos]
        NewTodos.splice(index,1)
        setTodos(NewTodos)
    };

    return(
        <ul className="TodoItem">
            { todos.map((todo,index) => (
                <div className="TodoItemChild">
                    <li key={ index }      
                    style={{
                        color: todo.isCompleted ? 'green' : 'initial',
                    }}>

                        <h2>{ todo.task } </h2>
                        <label>
                            <button
                                type="button"
                                onClick={ () => handleTaskCompleated(index) }>
                                完了
                            </button>
                        </label>

                        <button onClick={ () => handleRemoveTask(index) }>削除</button>
                    </li>
                </div>
            ))}
        </ul>
    );
};

export default TodoList;