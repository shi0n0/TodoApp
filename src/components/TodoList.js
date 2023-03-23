import React from "react";
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
        <ul>
            { todos.map((todo,index) => (
                <li key={ index }      
                style={{
                    color: todo.isCompleted ? 'green' : 'initial',
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
                </li>
            ))}
        </ul>
    );
};

export default TodoList;