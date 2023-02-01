import React from "react";
import Addtodo from "./Addtodo";
import "./todo.scss";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "1", firstName: "tuấn", lastName: "Đạt" },
      { id: "2", firstName: "hỏi", lastName: "Dân IT" },
      { id: "3", firstName: "văn", lastName: "Nam" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
  };

  handleOnclickDelete = (todo) => {
    let currentArr = this.state.listTodos;
    currentArr = currentArr.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentArr,
    });
  };

  handleEdit = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isObjEmpty = Object.keys(editTodo).length === 0;

    // save
    if (isObjEmpty === false && editTodo.id === todo.id) {

      let ListTodosCopy = [...listTodos];

      let objIndex = ListTodosCopy.findIndex((item) => item.id === todo.id);

      ListTodosCopy[objIndex].firstName = editTodo.firstName;

      this.setState({
        ListTodos : ListTodosCopy,
        editTodo : {}
      })

      return;
    }
    // edit
    this.setState({
      editTodo: todo,
    });
  };

  handleOnchangeEdit = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.firstName = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isObjEmpty = Object.keys(editTodo).length === 0;
    return (
      <>
      <p>
         Simple todo app with React.js
        </p>
      <div>
        <Addtodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isObjEmpty === true ? (
                    <span>
                      {item.id} - {item.firstName} - {item.lastName}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {item.id} -
                          <input
                            value={editTodo.firstName}
                            onChange={(event) => this.handleOnchangeEdit(event)}
                          />
                          - {item.lastName}
                        </span>
                      ) : (
                        <span>
                          {item.id} - {item.firstName} - {item.lastName}
                        </span>
                      )}
                    </>
                  )}
                  <button
                    className="button"
                    onClick={() => this.handleEdit(item)}
                  >
                    {isObjEmpty === false && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button
                    className="button"
                    onClick={() => this.handleOnclickDelete(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
      </>
    );
  }
}

export default ListTodo;
