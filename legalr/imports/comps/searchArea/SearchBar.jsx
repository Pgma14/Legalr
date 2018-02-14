import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


export default class SearchBar extends Component {
  render () {
    return (
    <div>
      <div className="col-md-12 col-sm-12 col-xs-12 instructions text-center" id="search_heading">
        <h1>Search laws</h1>
      </div>

    <div className="input-group" id="adv-search">
        <input type="text" className="form-control" placeholder="Search key words, topics, etc..." />

      <div className="input-group-btn">
        <div className="btn-group" role="group">
          <div className="dropdown dropdown-xl dropdown-md dropdown-lg">
            <button type="button" className="btn btn-default dropdown-toggle caret" data-toggle="dropdown" aria-expanded="false"><span id="caret"></span>
            </button>
          </div>
        </div>
      </div>
    </div>

   </div>
    )
  }
}
