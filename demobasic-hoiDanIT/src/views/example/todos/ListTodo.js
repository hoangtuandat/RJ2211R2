import React from 'react'
import Addtodo from './Addtodo';

class ListTodo extends React.Component {
  state = {
    listTodos : [
      {id: "todo1", title:"Doing homework"},
      {id: "todo2", title:"Learning english "},
      {id: "todo3", title:"Coding"}
    ]
  }

  addtodo = (todo) => {
    this.setState({
      listTodos : [...this.state.listTodos, todo]
    })
  }

  render() {
    let listTodos = this.state.listTodos;
    return (
      <div className='list-todo-container'>
        <Addtodo 
        addtodo = {this.addtodo}
        />
        <div className='list-child'>
          {
            listTodos.map((item, index) => {
              return(
                <div key={item.id}>
                <span>{item.id} - {item.title}</span>
                <button>Edit</button>
                <button>Delete</button>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default ListTodo;