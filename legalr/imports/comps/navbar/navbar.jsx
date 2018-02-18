import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import AccountsUI from '../../accounts-ui.jsx';
  import './navbar.css';

export default class MyNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
    <Container fluid>
      <Row>
        <Navbar color="faded" light expand="md">

        <Container>
          <NavbarBrand href="/" className="navbar-brand_logo">
            <img src="simpleLogo.png" width="55" height="55"
             className="d-inline-block align-top"
             alt="Legalr"
             id="Legalr_logo"/>
         </NavbarBrand>

         <NavbarBrand>
            <span className="navbar-brand_text">Legal<span id="r">r</span>
            <span id="alpha">(alpha)</span></span>
        </NavbarBrand>


          <div className="navbar-toggle"> <NavbarToggler onClick={this.toggle} />
          </div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto static-top" navbar>

              <NavItem>
                <NavLink className="MenuOptions" href="/">
                <span className="MenuOptions">
                  Resolutions
                </span>
              </NavLink>
              </NavItem>


              <NavItem>
                <NavLink className="MenuOptions" href="/about">
                  <span className="MenuOptions">
                    About
                  </span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/about">
                  <span className="MenuOptions">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </span>
                  </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
          </Container>
        </Navbar>
        </Row>
      </Container>

      </div>
    );
  }
}
