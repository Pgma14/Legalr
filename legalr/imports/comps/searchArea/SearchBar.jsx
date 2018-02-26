import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, InputGroupDropDown, InputGroupButtonDropdown } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { Form, FormGroup, Label, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false,
      term: '',
    };

   this.toggle = this.toggle.bind(this);
  }

  onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }





  render () {
    return (
    <div>


    <InputGroup id="adv-search">
      <Input type="text" placeholder="Search key words, topics, etc..."
        onChange={event => this.onInputChange(event.target.value)}/>
      <InputGroupButtonDropdown className="input-group-btn" addonType="append" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
        <DropdownToggle split outline className="button" />
        <DropdownMenu>

          <Row>
            <Col className="searchOptions text-center" md="4" sm="12" xs="12">
                  <DropdownItem toggle={false}>
                    <FormGroup>
                      <Label for="exampleSelect">Country</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option value="0" selected>All</option>
                        <option value="1">USA</option>
                        <option value="2">Canada</option>
                        <option value="3">France</option>
                        <option value="4">EU</option>
                      </Input>
                    </FormGroup>
                  </DropdownItem>
            </Col>

            <Col className="searchOptions text-center" md="4" sm="12" xs="12">
                <DropdownItem toggle={false}>
                  <FormGroup>
                    <Label for="exampleSelect">State</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option value="0" selected>All</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">D.C.</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </Input>
                  </FormGroup>
                </DropdownItem>
            </Col>

            <Col className="searchOptions text-center" md="4" sm="12" xs="12">
                <DropdownItem toggle={false}>
                  <FormGroup>
                    <Label for="exampleSelect">Topic</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option value="0" selected>All</option>
                      <option value="agriculture">Agriculture</option>
                      <option value="animals">Animals</option>
                      <option value="banking">Banking</option>
                      <option value="business">Business</option>
                      <option value="civil rights">Civil Rights</option>
                      <option value="commerce">Commerce</option>
                      <option value="construction">Construction</option>
                      <option value="consumable substances">Food</option>
                      <option value="criminal law">Criminal Law</option>
                      <option value="disability">Disability</option>
                      <option value="economic">Economic</option>
                      <option value="education">Education</option>
                      <option value="elderly">Elderly</option>
                      <option value="emergency">Emergency</option>
                      <option value="environment">Environment</option>
                      <option value="firearms/weapons">Firearms</option>
                      <option value="government">Government</option>
                      <option value="health">Health</option>
                      <option value="housing">Housing</option>
                      <option value="insurance">Insurance</option>
                      <option value="judicial">Judicial</option>
                      <option value="juvenile">Juvenile</option>
                      <option value="labor">Labor</option>
                      <option value="licensing">Licensing</option>
                      <option value="military">Military</option>
                      <option value="motor vehicles">Motor Vehicles</option>
                      <option value="municipal">Municipal</option>
                      <option value="non-profit organizations">Charity</option>
                      <option value="recreation">Recreation</option>
                      <option value="safety">Safety</option>
                      <option value="science/technology">Science</option>
                      <option value="taxes">Taxes</option>
                      <option value="traffic">Traffic</option>
                      <option value="transportation">Transportation</option>
                      <option value="voting">Voting</option>
                    </Input>
                  </FormGroup>
                </DropdownItem>
          </Col>

          </Row>

 {/* Temporary cut of advanced search dropdown feature}
        <DropdownItem toggle={false}>
            <Col className="text-center"  md="12" sm="12" xs="12">
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret className="button" id='advanced-toggle' >
                 Advanced
               </DropdownToggle>
                <DropdownMenu>
                <DropdownItem toggle={false}>
                    <div>a</div>
                  </DropdownItem>
                </DropdownMenu>
             </Dropdown>
           </Col>
      </DropdownItem>
   {Temporary cut of advanced search dropdown feature */}

        </DropdownMenu>

      </InputGroupButtonDropdown>
      <InputGroupAddon addonType="append" >
        <Button color="primary" className="btn-group text-center" id="searchButton">
          <span className="fa fa-search" id="searchBarIcon" aria-hidden="true">
          </span>
        </Button>
      </InputGroupAddon>
    </InputGroup>

   </div>
    )
  }
}
