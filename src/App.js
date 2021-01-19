import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from "./components/TodoList";

function App() {
  //states
  const [ inputText, setInputText ] = useState(""); 
  const [ todos, setTodos ] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);
  
  //useEffect
  useEffect(() => {
    filterHandler();
  },[todos, status]);

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setfilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setfilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Hadiqa's Todo List</h1>
      </header>
      <Form
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos}  
        setInputText = {setInputText} 
        setStatus = {setStatus}
      />
      <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos = {filteredTodos} 
      />
    </div>
  );
}

export default App;
