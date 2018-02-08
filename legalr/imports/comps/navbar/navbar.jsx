import React, {Component} from 'react';
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

        <Navbar color="faded" light expand="md">
          <div className="container">

          <NavbarBrand href="/" className="navbar-brand_logo">

            <img src="simpleLogo.png" width="55" height="55"
             className="d-inline-block align-top"
             alt="Legalr"/>
         </NavbarBrand>

         <NavbarBrand>
            <span className="navbar-brand_text">Legal<span id="r">r</span>
            <span id="alpha">(alpha)</span></span>
        </NavbarBrand>



          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto static-top" navbar>

              <NavItem>
                <NavLink href="/">Resolutions</NavLink>
              </NavItem>


              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
            </div>
        </Navbar>
      </div>
    );
  }
}
