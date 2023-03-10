import React from 'react'
import NewProduct from './NewProduct';
import ProductList from './ProductList';
import 'bootstrap/dist/css/bootstrap.min.css'

 class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList : [
        {
        id: 1,
        name: "Iphone",
        price: 2000,
        unit: "cái"
      },
      {
        id: 2,
        name: "Samsung",
        price: 1500,
        unit: "cái"
      },
      {
        id: 3,
        name: "Oppo",
        price: 1000,
        unit: "cái"
      },
      ]
    }
  }

  myFunction = (massage) => {
    alert(massage)
  }
 
  render() {
    
    return (
      <>
      <div className='row'>
        <div className='col-md-8'>
            <ProductList  productList ={this.state.productList}/>
        </div>
        <div className='col-md-4'>
            <NewProduct  saveProduct={this.myFunction}/>
        </div>
      </div>
        
      </>
    )
  }
}


export default Content;