import React, { Component } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import "./App.css";
import Header from "./Header";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          name: "Make cool todo app",
          checked: false,
        },
        {
          name: "Create Github repo",
          checked: false,
        },
        {
          name: "Git push master",
          checked: false,
        },
      ],
    };
  }

  addToDo = (itemName) => {
    const newToDo = [...this.state.todos, { name: itemName, checked: false }];
    this.setState({
      todos: newToDo,
    });
  };
  deleteToDo = (item) => {
    const newToDo = this.state.todos.filter((itm) => item !== itm);
    this.setState({
      todos: newToDo,
    });
  };

  completeTodo = (item) => {
    const newTodos = this.state.todos.map((itm) => {
      if (itm === item) {
        itm.checked = !itm.checked;
      }
      return itm;
    });
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <Header />
          <div className="todo-list">
            <ToDoForm addToDo={this.addToDo} />
            <ToDoList
              items={this.state.todos}
              completeTodo={this.completeTodo}
              deleteToDo={this.deleteToDo}
            />
          </div>
        </div>
      </>
    );
  }
}
