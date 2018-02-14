import React, {Component} from 'react';
import './Home.css';

import DemoCarousel from '../comps/carousel/carouselLayout.jsx';
import Divider from '../comps/Divider/Divider.jsx';
import SearchLayout from '../comps/searchArea/SearchLayout.jsx';


export default class Home extends Component {
  render () {
    return (
    <div className="container-fluid">
      <div className="container">
        <DemoCarousel />
      </div>

      <div className="container-fluid">
        <Divider />
      </div>

      <div className="container">
        <SearchLayout />
      </div>
    </div>
    )
  }
}
