import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class NewProduct extends React.Component {
  constructor(props) {
    super(props)
  }
  
  saveProduct = () => {
    this.props.saveProduct("xin chào")
  }
  render() {
    return (
      <>
        <form className="border m-2">
          <div className="m-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="m-3">
            <label for="exampleInputPassword1" class="form-label">
              Price
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          
          <button type="button"  class="btn btn-primary m-3" onClick={this.saveProduct}>
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default NewProduct;
