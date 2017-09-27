import React, {Component} from 'react';
import {connect} from 'react-redux'

import Product from "../components/Product";

class ProductList extends Component {

    render() {
        const productList = this.props;
        let productArray = productList.products.map((product, index) => {
          return (
            <Product key={index} product={product}/>
          );
        })
        // Create a dynamically populated list of `<Product />` components
        // Each `<Product />` component should have a single object from the `products` state property (array)
        // applied to the component as a `product` property
        return (
            <ul className="ProductList">
              {productArray}
            </ul>
        );
    }
}

// Using the `mapStateToProps` function, filter the array stored in the
// state `products` property based on 3 criterea:
// - `underTwenty`
// - `overTwenty`
// - `all` or the default
const mapStateToProps = function(state) {
    let products;
    // complete the `if else` statement including conditions and `products` value
    if (state.filter === 'underTwenty') {
      products = state.products.filter(product => Number(product.price) <= 20)
      console.log("underTwenty: ", products);
    } else if (state.filter === 'overTwenty') {
      products = state.products.filter(product => Number(product.price) >= 20)
      console.log("overTwenty: ", products);
    } else {
      products = state.products
      console.log("products: ", products);
    }

    return {products: products}
}

export default connect(mapStateToProps)(ProductList);
