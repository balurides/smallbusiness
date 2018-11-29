import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Header from './header';
import Home from './home';


const Media = () => {
  return(
    <h1> Media page </h1>
  )
}
const ContactUs = () => {
  return(
    <h1> Contact Us page </h1>
  )
}
export default class HeaderMenu extends Component {


  render() {
    return (
      <Router>
      <div id="top-navigation-menu">
        <nav className="category-menu" aria-label="main">
          <Header /> 
          <hr className="headerline" />
          <Route path= "/" exact component =  {Home} />
          <Route path= "/media" exact component =  {Media} />
          <Route path= "/contactus" exact component =  {ContactUs} />
        </nav>
      </div>
    </Router>
    );
  }
}
