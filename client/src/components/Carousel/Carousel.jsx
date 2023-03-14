import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


import './Carousel.css';

const CarouselComponent = () => {
  return (
    <>
        <Carousel>
            <Carousel.Item interval={2000} className='img-container'>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dmz6gyyoo/image/upload/v1678802845/i3vkiwxk98xtkeruvb8g.jpg"
                    alt="First slide"
                />

                {/* <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item interval={2000} className='img-container'>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dmz6gyyoo/image/upload/v1678802887/uxdmdqzhwp66wlmvud8j.jpg"
                    alt="Second slide"
                />
                {/* <Carousel.Caption>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item interval={2000} className='img-container'>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dmz6gyyoo/image/upload/v1678802955/pqwegn7inj7gnypxgbfv.jpg"
                    alt="Third slide"
                />
                {/* <Carousel.Caption>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>   
    </>
  )
}

export default CarouselComponent;