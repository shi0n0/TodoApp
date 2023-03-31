import React from "react";
import './css/style.css'
import TextForm from './TextForm';

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

    const handleTaskAdded = (task) => {
        setTodos([...todos, { task, isCompleted: false }]); // taskをTodolistのstateに追加する
    }

    return(
    <div>
                <ul className="TodoItem">
                    { todos.map((todo,index) => (
                        <div className="TodoItemChild" key={index}>
                            <li   //一意にしないと警告月出るので回避 
                            style={{
                                color: todo.isCompleted ? 'green' : 'initial',
                            }}>

                            <h2> { todo.task } </h2>
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
            <TextForm onTaskAdded={handleTaskAdded} />
        </div>
    );
};

export default TodoList;