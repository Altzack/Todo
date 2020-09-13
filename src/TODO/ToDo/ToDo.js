import React from "react";
import Timer from "../Timer/Timer";
import "../App.css";
export default function ToDo(props) {
  return (
    <div
      className="todo"
      style={{ textDecoration: props.item.checked ? "line-through" : "" }}
    >
      <div className="todoName">
        <div className="todoTitle">{props.item.name}</div>
        <button
          className="todoButton delete"
          onClick={() => props.deleteToDo(props.item)}
        >
          Delete
        </button>
        <button
          className="todoButton complete"
          onClick={() => props.completeTodo(props.item)}
        >
          Complete
        </button>
      </div>

      <Timer />
    </div>
  );
}
