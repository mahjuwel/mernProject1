import React, { Component } from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import Dashboard from '../../components/users/Dashboard';
import Footer from '../../components/common/Footer';

export default class HomePage extends Component {
  
  render() {
    
    return <div>
        <Header />
        <Sidebar />
        <Dashboard/>
        <Footer />
    </div>;
  }
}
