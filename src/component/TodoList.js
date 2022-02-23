import React from 'react'
import Todo from './Todo'

const TodoList = ({Todos, setTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {Todos.map((todo) => (
                    <Todo 
                    Todos={Todos}
                    setTodos={setTodos}
                    key={todo.id} 
                    text={todo.text}
                    todo={todo}
                    />
                ))}
            </ul>
        </div>
        
    )
}

export default TodoList
