import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Demo.css';

import DemoCarousel from '../comps/carousel/carouselLayout.jsx';
import Divider from '../comps/Divider/Divider.jsx';
import SearchLayout from '../comps/searchArea/SearchLayout.jsx';
import WhatWeDo from '../comps/WhatWeDo/WhatWeDo.jsx';
import OurTeam from '../comps/OurTeam/OurTeam.jsx';
import Accolades from '../comps/Accolades/Accolades.jsx';



export default class Demo extends Component {
  constructor() {
  super();
  this.state = {
    width: window.innerWidth,
  };
}

componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
}

// make sure to remove the listener
// when the component is not mounted anymore
componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
};

render() {
  const { width } = this.state;
  const isMobile = width <= 500;

    if (isMobile) {
    return (
      <div>
      <Container fluid id="demo_wrapper">
        <Container>
          <SearchLayout />
        </Container>

        <Container>
          <WhatWeDo />
        </Container>

        <Container fluid>
          <OurTeam />
        </Container>

        <Container fluid>
          <Accolades />
        </Container>
      </Container>
    </div>
    );
  } else {
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

        <Container fluid>
            <Accolades />
        </Container>

    </Container>
  </div>
    );
  }
}
}
