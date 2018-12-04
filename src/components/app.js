import React, { Component } from 'react';
import HeaderMenu from './headermenu';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <div className="header-title">Morning person lifestyle</div>
          <HeaderMenu />
          <Footer/>
        </header>
      </div>
    );
  }
}
