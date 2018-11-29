import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';

class ProductDetailView extends Component {
  static defaultProps = {
    id: null,
    title: '',
    mainImgUrl: '',
    detailImgUrls: [],
    price: 0,
    options: [],
  };

  render() {
    const { id, title, mainImgUrl, detailImgUrls, price, options } = this.props;

    return (
      <div>
        <select>
          {options.map(o => (
            <option value={o.id}>{o.title}</option>
          ))}
        </select>
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
