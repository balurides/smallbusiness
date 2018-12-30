import React, { Component  } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './header';
import Home from './home';
import Media from './media';
import Contactus from './contactus';


export default class HeaderMenu extends Component {


  render() {
    return (
      <Router>
        <div>
          <div id="top-navigation-menu">
            <nav className="category-menu" aria-label="main"> 
              <Header />
            </nav>
          </div>
            <div className="page-container">
              <hr className="headerline" />
              <Route path= "/" exact component =  {Home} />
              <Route path= "/media" exact component =  {Media} />
              <Route path= "/contactus" exact component =  {Contactus} />
            </div>
          </div>
    </Router>
    );
  }
}
