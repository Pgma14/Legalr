import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Home.css';

import LandingHeader from '../comps/LandingHeader/LandingHeader.jsx';
import Divider from '../comps/Divider/Divider.jsx';
import SearchLayout from '../comps/searchArea/SearchLayout.jsx';
import WhatWeDo from '../comps/WhatWeDo/WhatWeDo.jsx';
import OurTeam from '../comps/OurTeam/OurTeam.jsx';
import Accolades from '../comps/Accolades/Accolades.jsx';

export default class Home extends Component {
render() {
    return (
  <div>
    <Container fluid>

        <Container fluid>
          <LandingHeader />
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
