import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



// Cards Slide
import imgCover1 from '../assets/img/Image-cover1.jpg'
import imgCover2 from '../assets/img/Image-cover2.jpg'
import imgCover3 from '../assets/img/Image-cover3.jpg'
import imgCover4 from '../assets/img/Image-cover4.jpg'


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={imgCover1}
            alt="First slide"
            />

        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={imgCover2}
            alt="Second slide"
            />

        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={imgCover3}
            alt="Third slide"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src={imgCover4}
            alt="Four slide"
            />
        </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel