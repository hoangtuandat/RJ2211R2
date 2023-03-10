import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Phòng ban" />}
    />
  );
}


const top100Films = [
  { label: 'The Shawshank ', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  
];
