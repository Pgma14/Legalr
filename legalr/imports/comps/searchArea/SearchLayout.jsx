import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import GifList from './GifList.jsx';
import SearchBar from './SearchBar.jsx';
import LawLayout from './LawLayout.jsx';
import request from 'superagent';

import './SearchBar.css';

export default class SearchLayout extends Component {
  constructor() {
        super();

        this.state = {
            gifs: []
        }
    }

  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

          request.get(url, (err, res) => {
              this.setState({ gifs: res.body.data })
         });
 }


  render () {
    return (
    <div>

      <Row>
      <Col className="instructions text-center" md="12" sm="12" xs="12" id="search_heading">
        <h1 id="Search_laws">Search laws</h1>
      </Col>
     </Row>

      <div className="container">
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
      <div className="container" id="lawLayoutContainer">
        <LawLayout />
      </div>
    </div>
    )
  }
}
