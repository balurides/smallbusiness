import React, { Component } from 'react';
import HeaderMenu from './headermenu';


export default class App extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <div className="header-title">Small business apps</div>
          <HeaderMenu />
          
        </header>
      </div>
    );
  }
}
