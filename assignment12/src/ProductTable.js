import React, { Component } from 'react';
import ProductRow from './ProductRow.js';

class ProductTable extends Component{
    constructor(props) {
        super(props)
        this.handleDestroy = this.handleDestroy.bind(this)
   }
   
    handleDestroy(id) {
        this.props.onDestroy(id)
   }
   
    render(){
        const {filterText} = this.props;
        const {products} = this.props;
        return(
            <div>
                <table className ="table table-striped table-responsive">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                        
                    </thead>
                    <tbody>
                    {
                           
                            Object.keys(products)
                            //filter the products
                           .filter(
                                key => products[key].name.indexOf(filterText) !== -1
                           )
                            .map(key =>{
                                return(
                                    <ProductRow 
                                    key = {products[key].id} 
                                    product = {products[key]} 
                                    onDestroy={this.handleDestroy}
                                >
                                </ProductRow>
                                   
                                )
                            }
                            )
                    }
                        
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default ProductTable;