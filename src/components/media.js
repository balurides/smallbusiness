import React, { Component  } from 'react';
import  MediaCarousels from '../components/carousels/carousels';

export default class Media extends Component {
    
    render() {
        return(
            <div className="media-page">
                <span className= "media-page-title"> Media page </span>
                {/* <div>
                    <ul>
                        <li  list-style-type="none"> 
                            <span className="image-title"> Image title </span>      
                            <img id = "media_image" src="./src/images/Media_backGround.jpg" />
                        </li>
                    </ul>
                </div> */}
                <br />
                <span> carousels </span>
                <MediaCarousels />
            </div>
            
        );
    }
}