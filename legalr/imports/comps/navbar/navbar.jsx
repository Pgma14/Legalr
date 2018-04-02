import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { withHistory, withRouter } from 'react-router-dom';
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
import Scrollchor from 'react-scrollchor';


  import AccountsUI from '../../accounts-ui.jsx';
  import './navbar.css';

class MyNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this)
  }

  getMeteorData(){
   return { isAuthenticated: Meteor.userId() !== null };
 }

 logout(){
    Meteor.logout( (err) => {
        if (err) {
            console.log( err.reason );
        } else {
          window.location.reload(this.props.history.push('/results'))
            this.setState({
              isAuthenticated: false
            });
        }
    });
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
        <Navbar expand="md">

        <Container>
          <NavbarBrand href="/" className="navbar-brand_logo">
            <img src="simpleLogo.png" width="55" height="55"
             className="d-inline-block align-top"
             alt="Legalr"
             id="Legalr_logo"/>
         </NavbarBrand>

         <NavbarBrand>
            <span className="navbar-brand_text">Legal<span id="r">r</span>
            <span id="alpha"></span></span>
        </NavbarBrand>


          <div className="navbar-toggle">
            <span><i className="fa fa-bars" onClick={this.toggle}></i></span>
          </div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto static-top" navbar>

              <NavItem>
                <NavLink className="MenuOptions" href="/">
                  <Scrollchor to="#How_It_Works" className="scroll" animate={{offset: 0, duration: 1000}}>
                <span className="MenuOptions">
                  How It Works
                </span>
                  </Scrollchor>
              </NavLink>
              </NavItem>


              <NavItem>

                <NavLink className="MenuOptions">
                  <Scrollchor to="#Our_Team" className="scroll" animate={{offset: 0, duration: 800}}>
                      <span className="MenuOptions">
                        Our Team
                      </span>
                  </Scrollchor>
                </NavLink>
              </NavItem>

              {this.state.isAuthenticated ? (
                <NavItem>
                  <NavLink className="MenuOptions">
                        <span onClick={this.logout} href="/" className="MenuOptions">
                          Log Out
                        </span>
                  </NavLink>
                </NavItem>
              ) : (<div></div>) }

            {/*}  <NavItem>
                <NavLink className="MenuOptions">
                  <Scrollchor to="#Search_laws" className="scroll" animate={{offset: 0, duration: 800}}>
                  <span className="MenuOptions">
                    <i className="fa fa-search" aria-hidden="true" id="searchicon"></i>
                  </span>
                </Scrollchor>
                  </NavLink>
              </NavItem> {*/}

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

export default withRouter(MyNavbar);
