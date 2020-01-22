import React, { useReducer, useState } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";
import TodoList from "./TodoList";

export default function TodoForm() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("this is state in form", state);
  const [newTodo, setNewTodo] = useState();

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
        <form>
            <input type="text" name="task" value={newTodo} onChange={handleChanges} />
            <button onClick ={() => dispatch({ type: "ADD_TODO", payload: newTodo})}>Add Todo</button>
            <button onClick ={() => dispatch({ type: "COMPLETE_TODO", payload: newTodo})}>Clear Completed</button>
        </form>
        <TodoList state ={state}/>
    </div>
  );
}
