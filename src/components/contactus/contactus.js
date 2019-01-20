import React, {Component} from "react";
import './../../../style/contactus.css';
import './../../../style/materialize.css';

export default class Contactus extends Component {
    render() {
        return (
            <div className="contactus-container">
                <div className="row">
                    <h1 className="col s4 m4 l3">
                        Contact us :
                    </h1>
                    <hr className="col s8 m8 l9" styles="padding: 1rem;"/>
                </div>
                <div className="row">
                    <img className="contactus-img"/>
                </div>
                <div className="row">
                    <hr className="col s12 m12 l12" styles="padding: 1rem;"/>
                </div>

                <div className="row" id="form-container">
                    <br />
                    <h5 className="col s8"> We’re excited to talk to you! Fill out the form below and we’ll be in touch. </h5>
                    <br />
                    <br />
                    <form className="col s12 xl5">
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    placeholder="First Name"
                                    id="first_name"
                                    type="text"
                                    className="validate"/>
                                <label for="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate"/>
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate"/>
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                issue description:
                                <div className="input-field inline">
                                    <input id="email_inline" type="email" className="validate"/>
                                    <label for="email_inline">Email</label>
                                    <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
/*
            <div>
                <div className="row contactus-container">
                    <h1 > Contactus : </h1>
                    <img className="contactus-img" />
                 </div>
                    <hr id="headerline" styles="width:100%" />
                    <div className="clearfix" >
                        <p> Tell us about your issue so we can help you more quickly </p>
                    </div>
                </div>
            <div className="row" id="form-container">
                <form className="col s12 xl5">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                            <label for="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate"/>
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="email" type="email" className="validate"/>
                        <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            issue description:
                            <div className="input-field inline">
                                <input id="email_inline" type="email" className="validate"/>
                                <label for="email_inline">Email</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        );
    }
} */