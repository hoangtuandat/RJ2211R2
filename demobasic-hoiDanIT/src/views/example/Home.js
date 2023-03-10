import React from 'react'
import {connect} from 'react-redux'
import ListUser from '../Users/ListUser'

class Home extends React.Component {

  handleDeleteUser = (user) => {
    console.log(">>> check user delete", user)
    this.props.deleteUserRedux(user);
  }

  handleAddUser = () => {
    this.props.AddUserRedux()
  }

  render() {
    console.log('>>>check props redux:', this.props.dataRedux)
    const listUsers = this.props.dataRedux;
    return (
      <>
      <div>Home</div>
      <div>
        {listUsers && listUsers.length > 0 && 
        listUsers.map((item, index) => {
          return(
            <div key={item.id}>
              {item.id} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>X</span>
            </div>
          )
        })
        }
      </div>
      <div>
        <button onClick={() => this.handleAddUser()}>Add New</button>
      </div>
      </>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete}),
    AddUserRedux: () => dispatch({ type: 'ADD_USER'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
