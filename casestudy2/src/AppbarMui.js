import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import BagdeMui from './BadgeMui'

import ComboBox from './ComboBox';



export default function SearchAppBar() {

  const handleChange = (country) => {
    console.log('MyAppBar', country)
  }
  const totalCountries = (totalCountries) => {
    console.log('MyAppBar totalCountries', totalCountries)
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
          
            <ComboBox handleChange={handleChange} totalCountries={totalCountries}/>
            <BagdeMui />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

