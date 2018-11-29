import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import UserProvider from './contexts/UserContext';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <>
            <Route exact path="/" component={HomePage} />
            <Route path="/product/:productId" component={ProductPage} />
            <Route path="/login" component={LoginPage} />
          </>
        </UserProvider>
      </BrowserRouter>
    );
  }
}
