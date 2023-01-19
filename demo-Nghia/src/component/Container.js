import React, { Component } from "react";
import ProductList from "./productList";
import NewProduct from "./NewProduct";
import "../css/style.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      productList: [
        {
          id: 1,
          name: "Iphone",
          price: 20000000,
          unit: "chiếc",
        },
        {
          id: 2,
          name: "Samsung",
          price: 15000000,
          unit: "chiếc",
        },
        {
          id: 3,
          name: "Saomie",
          price: 10000000,
          unit: "chiếc",
        },
      ],
    };
  }

  deleteProduct = (id) => {
    let arr = [...this.state.productList];
    let index = arr.findIndex(function (i) {
      return i.id === id;
    });
    arr.splice(index, 1);
    this.setState({
      productList: arr,
    });
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
