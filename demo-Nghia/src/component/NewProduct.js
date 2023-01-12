import React from 'react'

class NewProduct extends React.Component {
  deleteProduct = (id) => {
    this.props.deleteProduct(id);
  }
  editProduct = (id) => {
    this.props.editProduct(id);
  }
  render() {
    return (
      <div class="col-md-8">
        <fieldset className="border p-2">
            <legend className="scheduler-border">Danh sách sản phẩm</legend>
           
            <table className="table table-sm table-striped table-bordered table-hover">
                <thead className="thead-dark">
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
                        this.props.productList.map(product => {
                          return(
                            <tr>
                              <td>{product.id}</td>
                              <td>{product.name}</td>
                              <td>{product.price}</td>
                              <td>{product.unit}</td>
                              <td><button type="button" class="btn btn-primary" onClick={() => this.editProduct(product.id)}>Sửa</button></td>
                              <td><button type="button" class="btn btn-danger" onClick={() => this.deleteProduct(product.id)}>Xoá</button></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                
            </table>
        </fieldset>
      </div>
    )
  }
}

export default NewProduct