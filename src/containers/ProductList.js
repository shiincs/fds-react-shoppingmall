import React, { Component } from 'react';
import ProductListView from '../components/ProductListView';
import api from '../api';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: [],
    };
  }

  // props가 바뀌어도 componentDidMount()는 다시 호출되지 않는다.
  // key를 바꿔서 componentDidMount()를 다시 호출해줘야 한다.
  async componentDidMount() {
    const { category } = this.props;
    console.log(category);
    const { data: products } = await api.get('/products', {
      params: {
        category,
      },
    });
    const res = await api.get('/products', {
      params: {
        category,
      },
    });
    console.log(res);
    this.setState({
      products,
      loading: false,
    });
  }

  render() {
    const { products, loading } = this.state;
    const productsList = products.map(p => ({
      id: p.id,
      title: p.title,
      imgURL: p.mainImgUrl,
    }));
    return <ProductListView products={productsList} loading={loading} />;
  }
}
