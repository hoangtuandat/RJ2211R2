

import React, { Component } from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'Country', headerName: 'Country', width: 150 },
  { field: 'NewConfirmed', headerName: 'NewConfirmed', width: 150 },
  { field: 'TotalConfirmed', headerName: 'TotalConfirmed', width: 250 },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: columns,
      rows: []
    };
  }
componentDidMount() {
    this.getData();
}

getData = () => {
    fetch('https://api.covid19api.com/summary')
    .then((res) => res.json())
    .then(
        (data) => {
            console.log('Indata', data.Countries);
            let id = 1;
            const dataWithId = data.Countries.map((x) =>
            Object.assign({}, x, {id: id++})
            );
            console.log('dataWithId', dataWithId);
            this.setState({rows: dataWithId})
        },
        (error) => {
            console.log('error', error)
        }
    )
}
  render() {
    return (
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={this.state.rows} columns={this.state.columns} />
      </div>
    );
  }
}

export default App;
