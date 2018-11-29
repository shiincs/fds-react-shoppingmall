import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';

class ProductDetailView extends Component {
  static defaultProps = {
    id: null,
    title: '',
    mainImgUrl: '',
    detailImgUrls: [],
    price: 0,
  };

  render() {
    const { id, title, mainImgUrl, detailImgUrls, price } = this.props;

    return (
      <div>
        <div>{id}</div>
        <div>{title}</div>
        <div>{price}</div>
        <img src={mainImgUrl} alt={title} />
        {detailImgUrls.map(url => (
          <img key={url} src={url} alt={title} />
        ))}
      </div>
    );
  }
}

export default withLoading(ProductDetailView);
