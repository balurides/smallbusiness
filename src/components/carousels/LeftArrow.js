
import React from 'react';

const LeftArrow = (props) => {
    return(
        <div className="backArrow" onClick={props.goToPrevSlide}>
            <i className="arrow"> </i>
        </div>
    );
}

export default LeftArrow;
