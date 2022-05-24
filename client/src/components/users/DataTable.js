import React, {useState, useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { CSVLink } from "react-csv";
import axios from 'axios';
import * as ReactBootStrap from "react-bootstrap";
const api = "http://localhost:5000/api/v1/AppUserList";
const token=sessionStorage.getItem("userData");
function DataTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUserData = async () => {
    try {      
    const data = await axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} });
    setUsers(data.data.data);    
    setLoading(true);
    
    } catch (e) {

    }
  }
  useEffect( () => {
    getUserData();
  }, []);
  console.log(users);
  const columns = [{
    dataField: 'name',
    text: 'Name',
    filter: textFilter()
  }, {
    dataField: 'email',
    text: 'Email',
    filter: textFilter()
  }, {
    dataField: 'username',
    text: 'User Name',
    filter: textFilter()   
  },
  {
    dataField: 'role',
    text: 'Role',
    filter: textFilter()   
  },
  {
    dataField: 'password',
    text: 'Password'  
  }
];
 const headers = [  
   {label: 'Name', key: 'name'},
   {label: 'Email', key: 'email'},
   {label: 'User Name', key: 'username'},
   {label: 'Role', key: 'role'},
   {label: 'Password', key: 'password'}
 ];
 const csvReport = {
   filename: 'Report.csv',
   headers: headers,
   data: users
 }
  return <div>
    <div>
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>DataTables</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">DataTables</li>
              </ol>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
     
              {/* /.card */}
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title"><CSVLink {...csvReport}> Export to CSV </CSVLink></h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">

                  {loading ? ( <BootstrapTable keyField='_id' data={ users } columns={ columns } filter={ filterFactory() } pagination={ paginationFactory() } /> ) : (<ReactBootStrap.Spinner animation="border" />)}
                
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
  </div>
  </div>;
}

export default DataTable;
