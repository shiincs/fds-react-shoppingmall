import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../containers/Header';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <div>Copyright to ShinChangseon</div>
      </div>
    );
  }
}
