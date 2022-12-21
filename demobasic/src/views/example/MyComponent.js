import React from "react";

class MyComponent extends React.Component {
  // JSX => return về một khối code
  // state là một object

  // state = {
  //     name: 'Dat',
  //     channel: 'hoi dan it'
  // }

  // handleOnchangeName = (event) => {
  //     this.setState({
  //         name: event.target.value
  //     })
  // }

  // handleClickButton = () => {
  //     console.log('click me')
  //     alert('Click me')
  // }

  // render() {
  //     return (
  //         <>
  //         <div className ="first">
  //             <input value={this.state.name} type="text"
  //                 onChange={(event) => this.handleOnchangeName(event)}
  //             />
  //             My name is {this.state['name']}
  //             </div>
  //         <div className="second">
  //             My youtube channel : {this.state.channel}
  //         </div>
  //         <div className = "third">
  //             <button onClick={() => this.handleClickButton()}>Click me</button>
  //         </div>
  //         </>

  //     )
  // }

  state = {
    firstName: "",
    lastName: "",
  };

  handleOnchangeFirstName = (event) => {
    this.setState({
        firstName: event.target.value
    })
  }

  handleOnchangeLastName = (event) => {
    this.setState({
        lastName: event.target.value
    })
  }

  handleONclick = (event) => {
    event.preventDefault()
    console.log('>>> check data input: ', this.state)
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input 
                type="text" 
                value={this.state.firstName} 
                onChange = {(event) => {this.handleOnchangeFirstName(event)}}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input type="text" value={this.state.lastName} 
                onChange={(event) => {this.handleOnchangeLastName(event)}}
          />
          <br />
          <br />
          <input type="submit" 
                onClick={(event) => {this.handleONclick(event)}}
          />
        </form>
      </>
    );
  }
}

export default MyComponent;
