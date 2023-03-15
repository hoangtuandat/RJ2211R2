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

import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';

import Avatar from '@mui/material/Avatar';

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
      { field: "picture", headerName: "Ảnh", width: 150,
      renderCell: (params) => (
        <div>
          <Avatar alt="Remy Sharp" src={params.value} />
        </div>
      ),
    },
      { field: "firstName", headerName: "Tên", width: 150 },
      { field: "lastName", headerName: "Họ", width: 150 },
      { field: "country", headerName: "Quốc gia", width: 150 },
      { field: "phone", headerName: "Điện thoại", width: 150 },
      { field: "dob", headerName: "Ngày sinh", width: 150 },
      
    ];

    this.state = {
      columns: columns,
      students: [],
      selectedClass: props.selectedClass,
      openConfirmation: false,
      editStudent: null,
      totalStudents: 0,
      maxID: 1,
      openSnackBar: false,
      snackBarInfo: "",
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
      let currentId = state.maxID;
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
        openSnackBar: true,
        snackBarInfo: "Đã thêm sinh viên thành công!",
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
    const editStudent = this.state.students.find(
      (students) => students.id === id
    )
    // console.log("deletetRow", id, editStudent);
    if(editStudent) {
      this.setState({ openConfirmation: true, editStudent: id });
    }
    
  };

  handleCloseConfirmation = (yes) => {
    // console.log("handleCloseConfirmation", yes);
    this.setState({ openConfirmation: false });
    if (yes) {
      let dialogStudent = this.state.students;
      dialogStudent = dialogStudent.filter(
        (data) => data.id !== this.state.editStudent
      );
      const totalStudents = this.state.totalStudents - 1;
      // console.log('dialog',this.state.editStudent)
      this.setState({ students: dialogStudent, totalStudents: totalStudents });
      this.props.handleTotalStudents(totalStudents);
      this.setState({ openSnackBar: true, snackBarInfo: "Xoá thành công!" });
    }
  };

  handleSnackBarClose = () => {
    this.setState({ openSnackBar: false });
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


          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={this.state.openSnackBar}
            onClose={this.handleSnackBarClose}
            message={this.state.snackBarInfo}
            key={{ vertical: "bottom", horizontal: "left" }}
          >
            <Alert onClose={this.handleSnackBarClose} severity="info" sx={{ width: '100%' }}>{this.state.snackBarInfo}
  </Alert>
          </Snackbar>
          
      </div>
    );
  }
}

export default MyClass;
