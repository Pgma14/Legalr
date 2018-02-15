import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, InputGroupDropDown, InputGroupButtonDropdown } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
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
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
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
