import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
// import TodoApp from './component/TodoApp';
import TodoList from './component/TodoList';
import Form from './component/Form';


function App() {
const [inputText, setInputText] = useState("")
const [Todos, setTodos] = useState([])

  return (
    <div className="App">
      {/* <TodoApp/> */}
      <header>
        <h1>My Todo List </h1>
      </header>
      <Form setInputText={setInputText} Todos={Todos} setTodos={setTodos} inputText={inputText}/>
      <TodoList Todos={Todos} setTodos={setTodos} />
    </div>
    

  );
}

export default App;
