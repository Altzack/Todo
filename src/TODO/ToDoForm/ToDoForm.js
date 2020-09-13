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
        <input
          placeholder="add item..."
          className="itemInput"
          name="itemToAdd"
          required
        ></input>
        <button type="submit" className="formButton">
          Add
        </button>
      </form>
    );
  }
}
