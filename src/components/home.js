import React, { Component } from 'react';
import { HOME_DATA } from './../data/homedata';

export default class Home extends Component {

    renderHomeData() {
        const homeDatalist = HOME_DATA.map((data,index) => {
            return(
                <li  key={index}>
                    <h2 > {data.title}</h2>
                    <div > {data.description} </div>
                </li>
            )
        });
        return(
            <ul>
                {homeDatalist}
            </ul>
        )
    }
    render() {
    return(
        <div>

        <h1 className="test"> Morning person </h1>
        <span> a person who likes the early part of the day : a person who has the most energy in the morning </span>
        <div>
            {this.renderHomeData()}
        </div>
        </div>
    )}
}