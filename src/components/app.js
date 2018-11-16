import React, { Component } from 'react';
import HeaderMenu from './headermenu';


export default class App extends Component {
  render() {
    return (
      <div>
      <div className="header">Small business apps</div>
      <HeaderMenu />
      </div>
    );
  }
}
