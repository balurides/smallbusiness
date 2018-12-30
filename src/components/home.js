import React, { Component  } from 'react';
import { HOME_DATA } from '../data/homedata';

export default class Home extends Component {

    renderHomeData() {
        const homeDatalist = HOME_DATA.map((data,index) => {
            return(
                <li  key={index}>
                    <h5 className="data-title"> {data.title}:-</h5>
                    <p > {data.description} </p>
                </li>
            )
        });
        return(
            <ol >
                {homeDatalist}
            </ol>
        )
    }
    render() {
    return(
        <div className="home-page">
            <h1 className="home-page-title"> Morning person </h1>
            <span > a person who likes the early part of the day : a person who has the most energy in the morning </span>
            <div>
                {this.renderHomeData()}
            </div>
        </div>
    )}
}