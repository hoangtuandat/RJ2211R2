import React from "react";
import "../css/style.css";

class ProductList extends React.Component {
  state = {
    id: "",
    name: "",
    price: "",
    unit: "",
  };

  HandleOnchange = () => {
    this.setState({
      
    })
  }

  HandleOnclick = () => {
    
    
  }
  render() {
    return (
      <div>
        <div className="col-md-4">
          <table>
            <tr>
              <th>
                <h4>Thông tin sản phẩm:</h4>
              </th>
              <th></th>
            </tr>
            <tr>
              <td>Tên sản phẩm:</td>
              <td>
                <input
                  type="text"
                  value={this.props.productInfo.name}
                  placeholder="Nhập tên sản phẩm..."
                />
              </td>
            </tr>

            <tr>
              <td>Đơn vị tính:</td>
              <td>
                <select name="unit" value={this.props.productInfo.unit}>
                  <option value="cai">Cái</option>
                  <option value="chiếc">Chiếc</option>
                  <option value="đôi">Đôi</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Giá sản phẩm:</td>
              <td>
                <input
                  type="text"
                  value={this.props.productInfo.price}
                  placeholder="Nhập giá sản phẩm"
                  onChange={(event) => this.HandleOnchange(event)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  onChange={this.HandleOnclick()}
                >
                  Add
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
