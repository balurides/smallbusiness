import React, { Component  } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
      return (
        <ul className="primary-nav">
          <li >
            <Link to="/"> Home </Link>
          </li>
          <li >
            <Link to="/media"> Media </Link>
          </li>
          <li >
            <Link to="/contactus"> Contact Us </Link>
          </li>
        </ul>
      )}}

  