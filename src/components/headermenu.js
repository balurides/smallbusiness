import React, { Component } from 'react';

export default class HeaderMenu extends Component {
  render() {
    return (
      <div id="top-navigation-menu">
        <nav className="category-menu" aria-label="main">
          <ul className="primary-nav">
            <li >
              <a href="#" className=""> Home </a>
            </li>
            <li >Media</li>
            <li >Activities</li>
            <li >Locations</li>
            <li >Contact us</li>
          </ul>
        </nav>
      </div>
    );
  }
}
