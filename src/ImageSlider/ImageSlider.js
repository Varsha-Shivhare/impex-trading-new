import React from 'react';
import { Carousel } from 'react-bootstrap';
import home from './Images/home.png';
import motor from './Images/motors.jpg';
import pump from './Images/pumps.jpg';
import solar from './Images/solar.jpg';

function ImageSlider() {

    return (
        <div>
            <div>
                
            </div>
            <Carousel interval={2000} >
                <Carousel.Item>
                    <img src={home} height="500px" width="100%" alt="home"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={solar} height="500px" width="100%" alt="solar"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={motor} height="500px" width="100%" alt="pumps"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={pump} height="500px" width="100%" alt="motors"/>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default ImageSlider;
