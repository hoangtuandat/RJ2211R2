import React, { Component } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

class MyClass extends Component {
  constructor(props) {
    super(props);

    const columns = [
      {
        field: "actions",
        headerName: "Actions",
        width: 150,
        renderCell: (params) => (
          <div>
            <Button onClick={() => this.editRow(params.value)}>
              <EditIcon />
            </Button>
            <Button onClick={() => this.deletetRow(params.value)}>
              <DeleteForeverIcon />
            </Button>
          </div>
        ),
      },
      { field: "id", headerName: "ID", width: 150 },
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
      openConfirmation: false,
      editID: null,
      totalStudents: 0,
      maxID: 1,
    };
  }

  static getDerivedStateFromProps(props, state) {
    // console.log(
    // 	'MyClass getDerivedStateFromProps',
    // 	props.className,
    // 	props.newStudent
    // );

    let totalStudents = 0;
    if (!props.className || props.className === "") {
      totalStudents = state.students.length;
    } else {
      let displayStudents = [...state.students];
      displayStudents = displayStudents.filter(
        (data) => data.className === props.className
      );
      totalStudents = displayStudents.length;
    }

    // return{}
    if (props.className && props.newStudent) {
      const students = [...state.students];
      const newStudent = props.newStudent;
      let currentId = state.maxID
      newStudent.id = currentId;
      newStudent.className = props.className;
      newStudent.actions = newStudent.id;
      // console.log('MyClass newStudent', newStudent);

      students.push(newStudent);
      ++totalStudents;
      props.handleTotalStudents(totalStudents);
      return {
        selectedClass: props.className,
        students: students,
        totalStudents: totalStudents,
        maxID: ++currentId,
      };
    } else {
      if (props.className !== state.selectedClass) {
        props.handleTotalStudents(totalStudents);
      }
      return { selectedClass: props.className, totalStudents: totalStudents };
    }
  }

  editRow = (id) => {
    // console.log("editRow", id);
  };
  deletetRow = (id) => {
    // console.log("deletetRow", id);
    this.setState({ openConfirmation: true, editID: id });
  };

  handleCloseConfirmation = (yes) => {
    // console.log("handleCloseConfirmation", yes);
    this.setState({ openConfirmation: false });
    if (yes) {
      let dialogStudent = this.state.students;
      dialogStudent = dialogStudent.filter(
        (data) => data.id !== this.state.editID
      );
      const totalStudents = this.state.totalStudents - 1;
      // console.log('dialog',this.state.editID)
      this.setState({ students: dialogStudent, totalStudents: totalStudents });
      this.props.handleTotalStudents(totalStudents);
    }
  };

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
        <Dialog
          open={this.state.openConfirmation}
          onClose={() => this.state.handleCloseConfirmation(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Bạn có chắc muốn xoá không?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleCloseConfirmation(false)}>
              Huỷ
            </Button>
            <Button
              onClick={() => this.handleCloseConfirmation(true)}
              autoFocus
            >
              Đồng ý
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default MyClass;
