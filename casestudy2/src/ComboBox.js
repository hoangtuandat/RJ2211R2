import  React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

class ComboBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ year: 2020, name: 'Lớp 12 A1' },
				{ year: 2021, name: 'Lớp 11 A8' },
			],
			selectedClass: '',
		};
	}

	handleChange = (event, value) => {
		// console.log('ComboClasses chọn lớp: ', value);
		this.setState({ selectedClass: value?.name });
		this.props.handleChange(value?.name);
	};

	render() {
		return (
			<div style={{ minWidth: 200 }}>
				<Autocomplete
					id='combo-box-lop'
					size='small'
					options={this.state.data}
					getOptionLabel={(option) => option.name}
					onChange={this.handleChange}
					style={{
						background: 'white',
					}}
					renderInput={(params) => (
						<TextField
							{...params}
							label=''
							variant='outlined'
							placeholder='Chọn lớp'
						/>
					)}
				/>
			</div>
		);
	}
}

export default ComboBox;
