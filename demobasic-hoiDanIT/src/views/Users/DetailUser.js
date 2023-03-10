import React from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if(this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }
  render() {
    let {user} = this.state;
    let isObjEmpty = Object.keys(user).length === 0;
    console.log(">>> check props:", this.props)
    return (
        <>
        <div>DetailUser with id: {this.props.match.params.id}</div>
        {isObjEmpty === false && 
        <>
            <div> User's name: {user.first_name}</div>
        <div> User's email: {user.email}</div>
        
        </>
        
        }
        
        </>
      
    )
  }
}
export default  withRouter(DetailUser);