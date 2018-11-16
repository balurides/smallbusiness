import React, { Component } from 'react';

export default class HeaderMenu extends Component {
  render() {
    return (
      <div className="top-navigation-menu">
        <ul>
          <li className="header-menu"> Home </li>
          <li className="header-menu">Media</li>
          <li className="header-menu">Activities</li>
          <li className="header-menu">Locations</li>
          <li className="header-menu">Contact us</li>
        </ul>
      </div>
    );
  }
}
