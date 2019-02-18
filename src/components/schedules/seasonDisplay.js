import React, {Component} from "react";

const seasonConfig = {
    summer: {
        text: "Wow, lets hit lakes",
        iconName:"sun"
    },
    winter: {
        text:"Awesome, lets do bowling",
        iconName:"snowflake"
    }
}
const getSeason = (lat,CurrentMonth)=> {
    if(CurrentMonth > 3 && CurrentMonth < 8 ) {
        return lat > 30 ? 'summer' : 'winter' ;
    } else {
        return lat > 30 ? 'winter' : 'summer';
    }
}
const SeasonDisplay = props => {
    const lat = props.lat;
    const season = getSeason(lat,new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    
    return(
        <div className={`season-display ${season}`}>
            <i className ={`icon-left massive ${iconName} icon`} />
            <h4> {text} </h4>
            <i className ={`icon-right massive ${iconName} icon`} />
        </div>
    );
}
export default SeasonDisplay;