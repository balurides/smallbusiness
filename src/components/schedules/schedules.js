import React, {Component} from "react";
import { connect } from "react-redux";
import * as actionCreators from './../../actions/actions';
import '../../../style/schedules.css';
import SeasonDisplay from './seasonDisplay';

class Schedules extends Component {
    state = {lat : null, errorMessage : ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            Position => this.setState ({
                lat:Position.coords.latitude}),
            err => this.setState({
                errorMessage:err.message})
        );
    }
    componentWillUnmount() {
        console.log('unmount');
    }
    
    callback = () => {
        console.log('call back function', + this.props.name);
    }

    seasonRender =() => {
        if(this.state.errorMessage && !this.state.lat) {
        return <div> Error : {this.state.errorMessage} </div> ;
        }
        if(!this.state.errorMessage && this.state.lat) {
           return <SeasonDisplay lat={this.state.lat}/>
        } 
        else {
            return(
                <div className="ui segment">
                    <p></p>
                    <div className="ui active dimmer">
                        <div className="ui loader"></div>
                    </div>
                </div>
            );
        }
    }
    
   
    render() {
      return (
            <div>
                <div className="row schuedlesContainer">
                    <br />
                    <h1 className="col s4 m4 l3">
                        schedules
                    </h1>
                    {/* <button className="col s4 m4 l3" styles="position:relative" onClick={this.callback}> addtocart  </button> */}
                    <div className="Age-label">
                        your age: <span>{this.props.age}</span>
                    </div>
                    <button onClick={this.props.onAgeUp}>Age UP</button>
                    <button onClick={this.props.onAgeDown}>Age Down</button>
                </div>
                <br />
                <br />
                <div className="row season">
                    <this.seasonRender/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      age: state.age,
      loading: state.loading
    };
  };

const mapDispachToProps = dispatch => {
    return{
        onAgeUp: () => dispatch(actionCreators.ageUp(1)),
        onAgeDown: () => dispatch(actionCreators.ageDown(1))
    }
};

export default connect(
    mapStateToProps,
    mapDispachToProps
  )(Schedules);