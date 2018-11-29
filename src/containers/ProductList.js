import React, { Component } from 'react';
import ProductListView from '../components/ProductListView';

export default class ProductList extends Component {
  render() {
    const products = [
      {
        id: 1,
        title: '자켓',
        imgURL: '',
      },
    ];
    return <ProductListView products={products} />;
  }
}
