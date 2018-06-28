import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "./E-waste 1 .jpg";
import image2 from "./singapore-google-map.png";
export default class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item className="carousel-image">
          <img className="carousel-image"  alt="900x500" src={image1} />
          <Carousel.Caption>
            <h3 className="carousel-caption">What Can you Recycle?</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-image">
          <img className="carousel-image" alt="900x500" src={image2} />
          <Carousel.Caption>
            <h3 className="carousel-caption">Check out where you can drop your E-Waste</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
