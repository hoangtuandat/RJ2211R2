import React, { Component } from "react";

export default class MyComponent extends Component {
  state = {
    firstName: "",
    lastName: ""
  };
  handleChangeFristName = (event) => {
    this.setState ({
      firstName : event.target.value
    })
  }
  handleChangeLastName = (event) => {
    this.setState({
      lastName : event.target.value
    })
  }
  handleClick = () => {
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`)
  }
  render() {
    return (
      <>
      <form>
        <label>First name</label> <br/>
        <input placeholder="Nhập tên" value={this.state.firstName} onChange={(event)=> this.handleChangeFristName(event)}></input><br/>
        <label>Last name</label><br/>
        <input placeholder="Nhập họ" value={this.state.lastName} onChange={(event)=> this.handleChangeLastName(event)}></input><br/><br/>
        <input type="submit" value="Submit" onClick={() => this.handleClick()}></input>
      </form>
      
      </>
    );
  }
}
