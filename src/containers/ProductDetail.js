import React, { Component } from 'react';
import ProductDetailView from '../components/ProductDetailView';
import api from '../api';

export default class ProductDetail extends Component {
  static defaultProps = {
    // 표시해주어야 하는 상품의 id
    productId: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: '',
      mainImgUrl: '',
      detailImgUrls: [],
      price: 0,
      loading: true,
      options: [],
    };
  }

  async componentDidMount() {
    const { productId } = this.props;
    const { data: product } = await api.get(`/products/${productId}`, {
      params: {
        _embed: 'options',
      },
    });
    this.setState({
      ...product,
      loading: false,
    });
  }

  // 서버측 장바구니에 항목을 추가하는 함수
  handleCreateCartItem = async (optionId, quantity) => {
    alert(`장바구니 테스트, ${optionId}, ${quantity}`);
  };

  render() {
    return (
      <ProductDetailView
        onCreateCartItem={this.handleCreateCartItem}
        {...this.state}
      />
    );
  }
}
