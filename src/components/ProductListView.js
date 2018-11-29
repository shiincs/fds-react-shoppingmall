import React, { Component } from 'react';

export default class ProductListView extends Component {
  static defaultProps = {
    // 서버로부터 받아온 상품 목록 데이터
    products: [
      // {
      //   id: 1,
      //   title: '자켓',
      //   imgURL: '...'
      // }
    ],
  };

  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(product => (
          <div key={product.id}>
            <div>{product.id}</div>
            <div>{product.title}</div>
            <img src={product.imgURL} alt={product.title} />
          </div>
        ))}
      </div>
    );
  }
}
