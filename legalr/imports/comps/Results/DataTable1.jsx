import React, {Component} from 'react';
import ReactTable from 'react-table';
import { makeData } from "./Utils.jsx";

import "react-table/react-table.css";
import "./DataTable1.css";

export default class DataTable1 extends Component {
  constructor() {
      super();
      this.state = {
        data: makeData()
      };
    }
    render() {
      const { data } = this.state;
      return (
        <div id="TableContainer">
          <ReactTable
            data={data}
            columns={[
              {
                columns: [
                  {
                    accessor: "firstName"
                  },
                  {
                    id: "lastName",
                    accessor: d => d.lastName
                  }
                ]
              },
              {
                columns: [
                  {
                    accessor: "age"
                  },
                  {
                    accessor: "status"
                  }
                ]
              },
              {
                columns: [
                  {
                    accessor: "visits"
                  }
                ]
              }
            ]}
            defaultPageSize={10}
            className="-highlight"
          />
        </div>
      );
    }
}
