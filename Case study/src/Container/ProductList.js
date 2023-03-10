import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <>
        <fieldset className="border p-2 m-2">
          <legend className="scheduler-border">Danh sách sản phẩm</legend>
          <table className="table table-sm table-striped table-bordered table-hover ">
            <thead className="table table-sm table-striped table-bordered table-hover bg-info text-dark">
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">Đơn vị tính</th>
                <th scope="col">
                  <div className="text-center">#</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.productList.map((product) => {
                  return <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.unit}</td>
                    <td>
                    <button type="button" className="btn btn-danger m-2">Edit</button>
                    <button type="button" className="btn btn-danger m-2">Delete</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </fieldset>
      </>
    );
  }
}

export default ProductList;
