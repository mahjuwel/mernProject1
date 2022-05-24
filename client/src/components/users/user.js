import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

export default class DataTable extends Component {
    
  render() {
    const columns = [{
      dataField: 'id',
      text: 'Product ID',
    }, {
      dataField: 'name',
      text: 'Product Name',
      filter: textFilter()
    }, {
      dataField: 'price',
      text: 'Product Price',
      filter: textFilter()
    }];
    const products =[id=>1,name=>'banana',price=>'50'];
    return <div>
  
</div>

  }
}
