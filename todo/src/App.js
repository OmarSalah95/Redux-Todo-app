import React, { Component } from 'react';

import './App.css';
import TodoForm from "./Components/TodoForm"
import TodoList from "./Components/TodoList"



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <div className="app-wrapper">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
