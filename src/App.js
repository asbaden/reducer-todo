import React, { useState, useReducer } from "react";
import "./App.css";
import { initialState, reducer, todoReducer } from "./reducers/todoReducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {

  return (
    <div className="App">
      <h1>WHAT NEEDS TO GET DONE</h1>
      <TodoForm />
      
    </div>
  );
}

export default App;
