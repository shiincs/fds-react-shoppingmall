import React, { Component } from 'react';
import ProductDetail from '../containers/ProductDetail';

export default class ProductPage extends Component {
  render() {
    const { match } = this.props;
    const productId = match.params.productId;

    return <ProductDetail productId={productId} />;
  }
}
