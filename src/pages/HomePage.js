import React, { Component } from 'react';
import ProductList from '../containers/ProductList';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    const { location } = this.props;
    console.log(location.search);
    const p = new URLSearchParams(location.search);
    const category = p.get('category');
    console.log(category);
    return (
      <Layout>
        <h1>Home</h1>
        {/* 모양과 책임이 같은 페이지는 같은 경로를 같도록 라우팅한다. */}
        {/* 쿼리스트링으로 페이지에 입력할 데이터를 표시해준다. */}
        {/* 경로는 계층구조라서 경로로 데이터를 표현하면 문제가 생긴다 */}
        {/* 데이터는 쿼리스트링으로 표현해주는 것이 좋다. */}
        {/* 데이터를 표현할 때 계층 구조일 경우 경로로, 아니면 쿼리스트링으로 */}
        <Link to="/">ALL</Link>
        <Link to="/?category=uniform">UNIFORM</Link>
        <Link to="/?category=cap">CAP</Link>
        <ProductList key={category} category={category} />
      </Layout>
    );
  }
}
