import React from 'react';
import NewProduct from './NewProduct';
import ProductList from './ProductList';
import 'bootstrap/dist/css/bootstrap.min.css'

function ContentHook() {
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

export default  ContentHook;