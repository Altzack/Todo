import React, { Component } from "react";

export default class ToDoForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(e.target.itemToAdd.value);
    const form = document.getElementById("itemForm");
    form.reset();
  };
  render() {
    return (
      <form id="itemForm" onSubmit={this.handleSubmit}>
        <label className="formLabel" htmlFor="itemToAdd">
          Add item:
        </label>
        <input
          placeholder="Walk the dog..."
          className="itemInput"
          name="itemToAdd"
          aria-required="true"
          aria-label="Enter new todo"
          required
        ></input>
        <button type="submit" className="formButton">
          Add
        </button>
      </form>
    );
  }
}
