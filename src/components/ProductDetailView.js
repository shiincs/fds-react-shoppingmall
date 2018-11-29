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
    quantity: 1,
  };

  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      selectedOptionId: '',
    };
  }

  handleOptionChange(e) {
    const option = e.target.value;
    this.setState({
      selectedOptionId: parseInt(option),
      quantity: 1,
    });
  }

  handleQuantityChange(e) {
    const quantity = e.target.value;
    this.setState({
      quantity: parseInt(quantity),
    });
  }

  handleBucket() {
    const { selectedOptionId } = this.state;
    selectedOptionId == null && alert('옵션을 선택해주세요.');
  }

  render() {
    const { id, title, mainImgUrl, detailImgUrls, price, options } = this.props;
    const { quantity, selectedOptionId } = this.state;
    const totalPrice = price * quantity;
    return (
      <div>
        <select
          required
          onChange={e => this.handleOptionChange(e)}
          value={selectedOptionId}
        >
          <option disabled value="">
            옵션
          </option>
          {options.map(o => (
            <option key={o.id} value={o.id}>
              {o.title}
            </option>
          ))}
        </select>
        <input
          type="number"
          min="1"
          max="30"
          value={this.state.quantity}
          onChange={e => this.handleQuantityChange(e)}
        />
        <div>{id}</div>
        <div>{title}</div>
        <div>{totalPrice}</div>
        <div>
          <button onClick={() => this.handleBucket()}>장바구니</button>
        </div>
        <img src={mainImgUrl} alt={title} />
        {detailImgUrls.map(url => (
          <img key={url} src={url} alt={title} />
        ))}
      </div>
    );
  }
}

export default withLoading(ProductDetailView);
