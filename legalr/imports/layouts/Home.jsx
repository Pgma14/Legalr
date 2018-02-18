import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Home.css';

import DemoCarousel from '../comps/carousel/carouselLayout.jsx';
import Divider from '../comps/Divider/Divider.jsx';
import SearchLayout from '../comps/searchArea/SearchLayout.jsx';
import WhatWeDo from '../comps/WhatWeDo/WhatWeDo.jsx';
import OurTeam from '../comps/OurTeam/OurTeam.jsx';


export default class Home extends Component {
  render () {
    return (
  <div>
    <Container fluid>

        <Container>
          <DemoCarousel />
        </Container>

        <Container fluid>
          <Divider />
        </Container>

        <Container>
          <SearchLayout />
        </Container>

        <Container>
          <WhatWeDo />
        </Container>

        <Container fluid>
          <OurTeam />
        </Container>

    </Container>
  </div>
    )
  }
}
