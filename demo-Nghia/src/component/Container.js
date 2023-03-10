import React from "react";
import ProductList from "./productList";
import NewProduct from "./NewProduct";
import "../css/style.css";
import productAPI from "../API/ProductAPI";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      productList: [],
    };
  }

  fetchProduct = async () => {
    const response = await productAPI.getAll();
    this.setState({
      productList : [...response.data]
    })
  }

  componentDidMount() {
    this.fetchProduct();
  }

  componentDidUpdate() {

  }

  deleteProduct = async (id) => {
    await productAPI.delete(id).then(
      async () => this.fetchProduct()
    )
  };

  editProduct = (id) => {
    let index = this.state.productList.findIndex(function (i) {
      return i.id === id;
    });
    const item = this.state.productList[index];
    this.setState({
      product : {
        id: item.id,
        name: item.name,
        price: item.price,
        unit: item.unit,
      }
    })

    let {product, productList} = this.state;
    let isObjEmpty = Object.keys(product).length === 0;

    // save

    
  };
  
  addProduct = (todo) => {
    this.setState ({
      productList : [...this.state.productList, todo]
    })
  }
  render() {
    return (
      <>
        <div className="container">
          <NewProduct
            productList={this.state.productList}
            deleteProduct={this.deleteProduct}
            editProduct={this.editProduct}
          />
          <ProductList
            productInfo={this.state.product}
            saveProduct={this.myFunction}
            addProduct={this.addProduct}
          />
        </div>
      </>
    );
  }
}
export default Container;
