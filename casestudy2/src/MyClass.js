import React, { Component } from "react";
import { DataGrid } from "@mui/x-data-grid";
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);

    const columns = [
      { field: "firstName", headerName: "Tên", width: 150 },
      { field: "lastName", headerName: "Họ", width: 150 },
      { field: "country", headerName: "CQuốc gia", width: 150 },
      { field: "phone", headerName: "Điện thoại", width: 150 },
      { field: "date", headerName: "Ngày sinh", width: 150 },
      { field: "thumbnail", headerName: "Ảnh", width: 150 },
  ];

    this.state = {
      columns: columns,
      students: [],
      selectedClass: props.selectedClass,
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then(
        (data) => {
          console.log("Indata", data.results);
          let id = 1;
          const dataWithId = data.results.map((record) => {
            return {
              id: id++,
              firstName: record.name.first,
              lastName: record.name.last,
              country: record.location.country,
              phone: record.phone,
              date: moment(record.dob.date).format('DD/MM/YYYY'),
              thumbnail: record.picture.thumbnail,
            };
          });
          console.log("dataWithId", dataWithId);
          this.setState({ students: dataWithId });
        },
        (error) => {
          console.log("error", error);
        }
      );
  };
  render() {
    const displayStudent = [...this.state.students];
    return (
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid rows={displayStudent} columns={this.state.columns} />
      </div>
    );
  }
}

export default App;
