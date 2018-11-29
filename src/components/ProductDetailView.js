import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';

class ProductDetailView extends Component {
  static defaultProps = {
    id: null,
    title: '',
    mainImgUrl: '',
    detailImgUrls: [],
    price: 0,
    options: [
      // {
      //   "id": 1,
      //   "productId": 1,
      //   "title": 95
      //   },
    ],
    quantity: 1,
    // 장바구니 항목 추가 시 호출되는 함수
    // optionId와 quantity를 넘겨야 함
    onCreateCartItem: () => {},
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
        <div>상품ID: {id}</div>
        <div>상품명: {title}</div>
        <div>가격: {totalPrice}</div>
        <div>
          <button
            onClick={() => {
              selectedOptionId === ''
                ? alert('옵션을 선택하세요')
                : quantity < 1
                ? alert('1 이상의 수량을 입력하세요')
                : this.props.onCreateCartItem(selectedOptionId, quantity);
            }}
          >
            장바구니
          </button>
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
