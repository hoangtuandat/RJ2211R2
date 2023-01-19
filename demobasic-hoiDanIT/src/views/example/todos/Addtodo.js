import React, { Component } from "react";

export default class Addtodo extends Component {
  state = {
    firstName: "",
    lastName: ""
  }
  handleOnchangeFirstName = (event) => {
    this.setState({
      firstName : event.target.value
    })
  }
  handleOnchangeLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }
  handleOnclickAdd = () => {
    let todo = {
      id: Math.floor(Math.random()*10000),
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    this.props.addNewTodo(todo);
  }

  render() {
    let {firstName} = this.state;
    let {lastName} = this.state;
    return (
      <div>
        <form >
          <label >First name:</label>
          <br />
          <input type="text"  value={firstName}
            onChange = {(event) => this.handleOnchangeFirstName(event)}
          />
          <br />
          <label >Last name:</label>
          <br />
          <input type="text"  value={lastName}
          onChange = {(event) => this.handleOnchangeLastName(event)}/>
          <br />
          <button type="button" className="button" 
          onClick={() => this.handleOnclickAdd()}
          >Add</button>
        </form>
      </div>
    );
  }
}
