import React, {Component} from 'react';
import { Table } from 'reactstrap';

import "./DataTable2.css";

export default class DataTable2 extends Component {
  render () {
    return (
      <Table hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Summary</th>
            <th>Who it Affects</th>
            <th>Learn More</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bodyRow">
            <th>A Bill to Help Working Families</th>
            <td>Hashtag paleo semiotics mlkshk, raw denim vape selfies banh mi air plant bicycle rights edison bulb live-edge art
            </td>
            <td>Small Business Owners</td>
            <td><i class="fa fa-file-text"></i></td>
          </tr>
          <tr className="bodyRow">
            <th>A Bill to Help Working Families</th>
            <td>Hashtag paleo semiotics mlkshk, raw denim vape selfies banh mi air plant bicycle rights edison bulb live-edge art
            </td>
            <td>Small Business Owners</td>
            <td><i class="fa fa-file-text"></i></td>
          </tr>
          <tr className="bodyRow">
            <th>A Bill to Help Working Families</th>
            <td>Hashtag paleo semiotics mlkshk, raw denim vape selfies banh mi air plant bicycle rights edison bulb live-edge art
            </td>
            <td>Small Business Owners</td>
            <td><i class="fa fa-file-text"></i></td>
          </tr>
        </tbody>
      </Table>
    );
  }

  }
