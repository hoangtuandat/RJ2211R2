import React from 'react'

class Addtodo extends React.Component {
  state = {
    title: ""
  }
  handleOnchange = (event) => {
    this.setState ({
      title: event.target.value
    })
  }

  handleAddTodo = () => {
    let todo = {
      id: Math.floor(Math.random()*1000),
      title: this.state.title
    }
    this.props.addtodo(todo);
  }

  render() {
    let title = this.state.title;
    return (
      <div>
        <input type="text" value={title}
        onChange={(event) => this.handleOnchange(event)}
        />
        <button
        onClick={() => this.handleAddTodo()}
        >Add</button>
      </div>
    )
  }
}
export default Addtodo;