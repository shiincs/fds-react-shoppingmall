import React, { Component } from 'react';

export default class LoginFormView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleFieldChange = (e, name) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  render() {
    const { username, password } = this.state;
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
        <button onClick={() => onLogin(username, password)}>로그인</button>
      </div>
    );
  }
}
