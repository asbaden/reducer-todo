import React, { useState, useReducer } from "react";
import Todo from "./Todo";
import { initialState, todoReducer } from "../reducers/todoReducer";

const TodoList = props => {
    console.log("This is props in todolist", props)
    return (
    <div>
      {props.state.map(item => (
        <Todo key={item.id} item={item} dispatch={props.dispatch} />
      ))}

    </div>
  );
}

export default TodoList;