import React, { Component  } from 'react';
import HeaderMenu from './headermenu';
import Footer from './footer';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <span className="header-title">Morning person lifestyle</span>
        </header>
        <div id="top-navigation-menu">
          <nav className="category-menu" aria-label="main"> 
            <Header />
            <hr className="headerline" />
          </nav>
        </div>
        <HeaderMenu />
        <Footer/>
       
      </div>
    );
  }
}
