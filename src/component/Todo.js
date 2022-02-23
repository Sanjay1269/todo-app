import React from 'react'

const Todo = ({ text, Todos, setTodos, todo }) => {
    const deleteHandeler = () => {
        setTodos(Todos.filter(el => el.id !== todo.id))
    };
    const completeHandeler = () => {
        setTodos(
            Todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item, completed: !item.completed,
                    };
                }
                return item;

            })
        )
    }
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandeler} className='complete-btn' ><i className='fas fa-check'></i></button>
            <button onClick={deleteHandeler} className='trash-btn'><i className='fas fa-trash'></i></button>
        </div>
    )
}

export default Todo
