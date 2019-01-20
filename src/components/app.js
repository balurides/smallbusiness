import React, { Component  } from 'react';
import HeaderMenu from './headermenu';
import Footer from './footer';
import Header from './header';
import './../../style/materialize.css';

export default class App extends Component {
  render() {
    return (
      <div className="header-box">
          <div className="header-title">
              <header>
                <span >Morning person lifestyle</span>
              </header>
          </div>
          <div id="top-navigation-menu" className="row">
            <div className="col s12 m8 l8">
              <nav className="category-menu" aria-label="main"> 
                <Header />
              </nav>
            </div>  
            <div className="col s6 push-s4 m4 push-m1 l4 push-l2">
              <nav className="account-menu" aria-label="main"> 
                <ul>
                  <li>
                <a> Account </a>
                  </li>
                </ul>
              </nav>
            </div> 
            {/* <hr id="headerline" /> */}
            <div className="divider" id="headerline" ></div>
          </div>
          <HeaderMenu />

          {/* <Footer/> */}
       
      </div>
    );
  }
}
