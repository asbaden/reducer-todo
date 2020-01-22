import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";


const Todo = props => {
    
  return (
    <div
      className={props.item.completed ? "completed" : "not-completed"}
      onClick={() => props.dispatch({ type: "COMPLETE_TODO", payload: props.item })}
    >
        
      <p>{props.item.todo}</p>
    </div>
  );
};

export default Todo;
