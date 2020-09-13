import React from "react";
import Todo from "./ToDo";
import ErrorBoundary from "./ErrorBoundary";
export default function ToDoList(props) {
  return (
    <div className="listItems">
      <ul>
        {props.items.map((todo, index) => (
          <ErrorBoundary key={index}>
            <Todo
              key={index}
              deleteToDo={props.deleteToDo}
              index={index}
              item={todo}
              completeTodo={props.completeTodo}
            />
          </ErrorBoundary>
        ))}
      </ul>
    </div>
  );
}
