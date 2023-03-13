import * as React  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import BagdeMui from './BadgeMui'

import ComboBox from './ComboBox';



export default function SearchAppBar(
  HandleSelectClassChange,
	handleAddStudent,
	totalStudents,
) {
  const [selectedClass, selectClassChange] = React.useState('');

  const handleChange = (seclectedClass) => {
    console.log('MyAppBar', seclectedClass);
    selectClassChange(selectedClass);
		HandleSelectClassChange(selectedClass);
  }
  
  
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
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ReactJS
          </Typography>
          
            <ComboBox handleChange={handleChange}/>
            <BagdeMui />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

