import React, { Component } from 'react';
import ProductDetailView from '../components/ProductDetailView';

export default class ProductDetail extends Component {
  render() {
    const product = {
      id: 1,
      title: '영웅의검',
      description: '응원봉',
      mainImgUrl: '',
      detailImgUrls: [''],
    };
    return <ProductDetailView {...product} />;
  }
}
