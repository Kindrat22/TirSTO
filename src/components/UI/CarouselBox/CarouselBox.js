import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import First_png from "./first.png"
import Second_png from "./secondPhoto.jpg"
import Sird_png from "./sird.png"

function CarouselBox() {
    return (
        <Carousel style={{marginTop: 61}}>
            <Carousel.Item interval={3500}>
                <img
                    className="d-block w-100"
                    src={First_png}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3></h3>
                    <p>

                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={Second_png}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3></h3>
                    <p>

                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={Sird_png}
                    alt=""
                />
                <Carousel.Caption>
                    <h3></h3>
                    <p>

                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselBox;