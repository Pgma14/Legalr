import React, {Component} from 'react';

import SearchBar from './SearchBar.jsx';
import LawLayout from './LawLayout.jsx';

export default class SearchLayout extends Component {
  render () {
    return (
    <div>
      <div className="container">
        <SearchBar />
      </div>
      <div className="container">
        <LawLayout />
      </div>
    </div>
    )
  }
}
