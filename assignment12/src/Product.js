import React, {Component} from 'react';
import Filter from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm.js';

let PRODUCTS = {
    '1': {id: 1, category: 'Home', price: '$1000', name: 'Bed'},
    '2': {id: 2, category: 'Kitchen', price: '$2,500', name: 'Refrigerator'},
    '3': {id: 3, category: 'GardenTools', price: '$200', name: 'Chisel'},
    '4': {id: 4, category: 'HomeFurniture', price: '$3009', name: 'Sofa'},
    '5': {id: 5, category: 'Outdoor', price: '$1,500', name: 'Chairs'},
    '6': {id: 6, category: 'Kitchen', price: '$8000', name: 'KitchenSet'}
 };
 

class Product extends Component{
  constructor(props){
        super(props)
        this.state = {
        filterText : '' ,
            products : PRODUCTS
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)
    }
   
    /* state = {
    // filterText : '' ,
     products : PRODUCTS
   } */

   handleFilter(filterInput) {
    this.setState(filterInput)
}

   handleSave(product) {
    if (!product.id) {
         product.id = new Date().getTime()
    }
    // adding new product to the list
    this.setState((prevState) => {
         let products = prevState.products
         products[product.id] = product
         return { products }
    });
}

handleDestroy(productId) {
    this.setState((prevState) => {
         let products = prevState.products
         delete products[productId]
         return { products }
    })
}


    render(){
        return(
            <div className = "container">
                <h1>My Inventory</h1>
                <Filter onFilter={this.handleFilter}  />
                <ProductTable  filterText={this.state.filterText} products={this.state.products} onDestroy={this.handleDestroy} />
                <ProductForm onSave={this.handleSave}  />
            </div>
        );
    }
}

export default Product;