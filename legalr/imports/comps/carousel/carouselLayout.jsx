import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Scrollchor from 'react-scrollchor';

import USmap from './USA.jsx';
import EUmap from './EU.jsx';
import CanadaMap from './Canada.jsx';
import FranceMap from './France.jsx';

import './carouselLayoutStyle.css';

export default class DemoCarousel extends Component {
  render() {

    return (
  <div className="container" id="carousel-container">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={75}
        totalSlides={4}
      >

        <Slider onFocus="null">
          <Slide index={0}>
            <USmap />
          </Slide>
          <Slide index={1}><CanadaMap /></Slide>
          <Slide index={2}><EUmap /></Slide>
          <Slide index={3}><FranceMap /></Slide>
        </Slider>


        <ButtonBack id="ButtonBack"><i className="fa fa-chevron-left" id="left-chevron"></i></ButtonBack>
        <ButtonNext id="ButtonNext"><i className="fa fa-chevron-right" id="right-chevron" ></i></ButtonNext>
      </CarouselProvider>
  </div>
    );
  }
}
