import React from "react";
import axios from "axios";
import "./style.scss";

class ListUser extends React.Component {
  state = {
    listUsers: [],
  };

  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    console.log(">>>Check res:", res)
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">List user API</div>
        <div className="list-user-content">
            {listUsers.map((item, index) => {
                    return(
                        <div className="Child" key={item.id}>
                            {index + 1} - {item.first_name} - {item.last_name}
                        </div>
                    )
                })
            }
        </div>
      </div>
    );
  }
}

export default ListUser;
