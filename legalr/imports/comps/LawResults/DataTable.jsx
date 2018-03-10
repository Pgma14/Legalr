import React, {Component} from 'react';
import ReactTable from 'react-table';
import { makeData } from "./Utils.jsx";

import "react-table/react-table.css";
import "./DataTable.css";

export default class DataTable extends Component {
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
                Header: "Name",
                columns: [
                  {
                    Header: "First Name",
                    accessor: "firstName"
                  },
                  {
                    Header: "Last Name",
                    id: "lastName",
                    accessor: d => d.lastName
                  }
                ]
              },
              {
                Header: "Info",
                columns: [
                  {
                    Header: "Age",
                    accessor: "age"
                  },
                  {
                    Header: "Status",
                    accessor: "status"
                  }
                ]
              },
              {
                Header: 'Stats',
                columns: [
                  {
                    Header: "Visits",
                    accessor: "visits"
                  }
                ]
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
      );
    }
}
