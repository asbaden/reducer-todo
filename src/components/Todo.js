import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";


const Todo = props => {
    
  
  
    return (
    <div
      className={props.item.completed ? "completed" : "not-completed"}
    //   onClick={() => dispatch({ type: "ADD_TODO", payload: newTodo})}
    >
        
      <p>{props.item.todo}</p>
    </div>
  );
};

export default Todo;
