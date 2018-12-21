import React, { Component  } from 'react';
import HeaderMenu from './headermenu';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <span className="header-title">Morning person lifestyle</span>
        </header>
          <HeaderMenu />
          <Footer/>
       
      </div>
    );
  }
}
