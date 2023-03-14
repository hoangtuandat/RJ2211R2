import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Badge from "@mui/material/Badge";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import ComboBox from "./ComboBox";

export default function AppbarMui({
  classes,
  handleSelectClassChange,
  handleAddStudent,
  totalStudents
}) {
  const [selectedClass, handleClassChange] = React.useState("");

  const handleChange = (selectedClass) => {
    console.log("MyAppBar", selectedClass);
    handleClassChange(selectedClass);
    handleSelectClassChange(selectedClass);
  };

  const addStudent = () => {
    console.log('MyAppBar addStudent');
    handleAddStudent();
  };



  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            ReactJS
          </Typography>

          <ComboBox handleChange={handleChange} />

          <IconButton
            aria-label="show 18 new notifications"
            color="inherit"
            onClick={addStudent}
          >
            <Badge badgeContent={0} color="error">
              <PersonAddIcon />
            </Badge>
          </IconButton>

          <IconButton aria-label="show 18 new notifications" color="inherit">
            <Badge badgeContent={0} color="error">
              <PermIdentityIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
