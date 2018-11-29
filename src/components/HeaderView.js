import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class HeaderView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutSuccess: false,
    };
  }

  render() {
    const { username, logout } = this.props;
    const { logoutSuccess } = this.state;
    if (logoutSuccess) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Link to="/">쇼핑몰</Link>
        {username ? (
          <>
            <div>{username}</div>
            <button
              onClick={() => {
                logout();
                this.setState({ logoutSuccess: true });
              }}
            >
              로그아웃
            </button>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    );
  }
}
