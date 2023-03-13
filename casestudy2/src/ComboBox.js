import React, { Component } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

class App extends Component {
  constructor(props) {
    super(props);
    const columns = [
      { field: "Country", headerName: "Country", width: 150 },
      { field: "Slug", headerName: "Slug", width: 150 },
      { field: "ISO2", headerName: "ISO2", width: 150 },
    ];
    this.state = {columns: columns, rows: [], selectedCountry:''};
  }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch("https://api.covid19api.com/countries")
      .then((res) => res.json())
      .then(
        (data) => {
          // console.log("result", data);
          let id = 1;
          const dataWithId = data.map((x) =>
            Object.assign({}, x, { id: id++ })
          );
          // console.log("dataWithId", dataWithId);
          this.setState({ rows: dataWithId });
          this.props.totalCountries(dataWithId.length)
        },
        (error) => {
          console.log("error", error);
        }
      );
  };

  handleChange = (event) => {
    console.log("chọn", event.target.value);
    this.setState({ selectedCountry: event.target.value });
    this.props.handleChange(event.target.value);
  };
  render() {
    return (
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-select-small" style={{color:'white'}}>Countries</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={this.state.selectedCountry}
            onChange={this.handleChange}
          >
            {
              this.state.rows.map((value, index) => {
                return (
                  <MenuItem key={index} value={value.Country}>{value.Country}</MenuItem>
                )
              })
            }
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default App;
