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
      splitButtonOpen: false
    };
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


  render () {
    return (
    <div>


    <InputGroup id="adv-search">
      <Input type="text" placeholder="Search key words, topics, etc..." />
      <InputGroupButtonDropdown className="input-group-btn" addonType="append" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
        <DropdownToggle split outline className="button" />
        <DropdownMenu>
          <DropdownItem toggle={false}>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </DropdownItem>

          <DropdownItem toggle={false}>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </DropdownItem>

          <DropdownItem toggle={false}>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </DropdownItem>

          <Row className="text-center">

          <DropdownItem toggle={false}><Col className="text-center"  md="12" sm="12" xs="12">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
               <DropdownToggle caret id='advanced-toggle' >
                 Advanced
              </DropdownToggle>
             </Dropdown>
          </Col>

          </DropdownItem>

          </Row>
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
