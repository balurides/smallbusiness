import React, {Component} from "react";
import './../../../style/contactus.css';
import './../../../style/materialize.css';


class Callus extends Component {
    render() {
        return(
            <div className="popup" >
                <div className="popup_inner" role="dialog" tabIndex="-1">
                    <h3 className="row col s6"> Call us </h3>
                    <label className="row col s12 push-s6"> {this.props.text} </label>
                    <button onClick={this.props.closeContactUs} className="row col s3 push-s9"> Close </button>
                </div>
            </div>
        );
    }
}
export default class CallUs extends Component {
    constructor() {
        super();
        this.state = {
            showCallus:false
        };
    }
    toggleCallus() {
        this.setState ({
            showCallus:! this.state.showCallus
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleCallus.bind(this)}> Call us </button>
                {this.state.showCallus ?
                    <Callus 
                        text ="678-761-6702"
                        closeContactUs = {this.toggleCallus.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
}