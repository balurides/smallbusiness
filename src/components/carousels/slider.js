import React, { Component  } from 'react';
import Slide from './slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images : [
                "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781", 
                "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
                "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
                "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
                "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
            ],
            currentIndex:0,
            translateValue:0
        }
    }

   
    goToNextSlide = () =>{

    if (this.state.currentIndex === this.state.imgUrls.length-1){
                return this.setState({
                currentIndex:0,
                translateValue:0
            });
            
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex+1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }
    slideWidth = () => {
        console.log('width :',+ document.querySelector('.slide').clientWidth); 
        return document.querySelector('.slide').clientWidth
    }

    render(){
        return(
            <div  className="slider">
                <LeftArrow goToPrevSlide={this.goToPrevSlide}  />
                <div className="slider-wrapper"
                style={{
                    transform: `translateX(${this.state.translateValue}px)`,
                    transition: 'transform ease-out 0.45s'
                }}>
                {
                    this.state.images.map((image,i) => {
                        return(
                        <Slide image={image} key={i} />
                        )
                    })
                }
                </div>
                
                <RightArrow goToNextSlide = {this.goToNextSlide} />
            </div>
        );
    }
}

export default Slider;