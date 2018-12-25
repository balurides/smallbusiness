
import React from 'react';

const LeftArrow = (props) => {
    return(
        <div className="backArrow arrow" onClick={props.goToPrevSlide}>
        </div>
    );
}

export default LeftArrow;
