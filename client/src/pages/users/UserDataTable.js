import React, { Component } from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import Footer from '../../components/common/Footer';
import DataTable from '../../components/users/DataTable';

export default class UserDataTable extends Component {
  render() {
    return <div>
         <Header />
        <Sidebar menuOpenUserData="nav-item menu-open" menuActiveUserData="nav-link active" />
        <DataTable/>
        <Footer />
    </div>;
  }
}
