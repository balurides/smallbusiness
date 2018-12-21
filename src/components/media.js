import React, { Component  } from 'react';
import  Slider from './carousels/slider';


export default class Media extends Component {
    
    render() {
        return(
            <div>
            <span className= "media_page_title"> Media page </span>
                <br />
                <br/>
                {/* <div>
                    <ul>
                        <li  list-style-type="none"> 
                            <span className="image-title"> Image title </span>      
                            <img id = "media_image" src="./src/images/Media_backGround.jpg" />
                        </li>
                    </ul>
                </div> */}
                <br />
                <br />
                <span> carousels </span>
                <Slider />
            </div>
        );
    }
}