import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class LoginFormView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      success: false,
    };
  }

  handleFieldChange = (e, name) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  render() {
    const { username, password, success } = this.state;
    // 로그인이 성공했다면 루트 페이지로 리다이렉트 시킨다.
    if (success) {
      return <Redirect to="/" />;
    }
    const { onLogin } = this.props;
    return (
      <div>
        <input
          value={this.state.username}
          type="text"
          onChange={e => this.handleFieldChange(e, 'username')}
        />
        <input
          value={this.state.password}
          type="password"
          onChange={e => this.handleFieldChange(e, 'password')}
        />
        <button
          onClick={async () => {
            await onLogin(username, password);
            // 로그인이 성공적으로 끝났을 때(success 상태를 true로 변환)
            this.setState({
              success: true,
            });
            // Redirect 컴포넌트를 렌더링 -> 주소 표시줄의 상태가 바뀜
          }}
        >
          로그인
        </button>
      </div>
    );
  }
}
