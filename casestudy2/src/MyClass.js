import React, { Component } from "react";
import { DataGrid } from "@mui/x-data-grid";


class MyClass extends Component {
  constructor(props) {
    super(props);

    const columns = [
      { field: "firstName", headerName: "Tên", width: 150 },
      { field: "lastName", headerName: "Họ", width: 150 },
      { field: "country", headerName: "CQuốc gia", width: 150 },
      { field: "phone", headerName: "Điện thoại", width: 150 },
      { field: "dob", headerName: "Ngày sinh", width: 150 },
      { field: "picture", headerName: "Ảnh", width: 150 },
  ];

    this.state = {
      columns: columns,
      students: [],
      selectedClass: props.selectedClass,
    };
  }

  static getDerivedStateFromProps(props, state) {
		console.log(
			'MyClass getDerivedStateFromProps',
			props.className,
			props.newStudent
		);
    // return{}
		if (props.className && props.newStudent) {
			const students = [...state.students];
			const newStudent = props.newStudent;
			newStudent.id = students.length + 1;
			newStudent.className = props.className;
			// console.log('MyClass newStudent', newStudent);

			students.push(newStudent);
			return { selectedClass: props.className, students: students };
		} else {
			return {selectedClass: props.className,} ;
		}
	}
  
  render() {
    // console.log('MyClass render', this.state.selectedClass);
    // const displayStudents = [...this.state.students]
    let displayStudents = [...this.state.students];
		displayStudents = displayStudents.filter(
			(data) => data.className === this.state.selectedClass
		);
    return (
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid rows={displayStudents} columns={this.state.columns} />
      </div>
    );
  }
}

export default MyClass;
