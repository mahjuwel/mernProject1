import React, { Component } from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import Sidebar from '../../components/common/Sidebar'
import RegisterAppUser from '../../components/users/RegisterAppUser'

export default class RegisterAppUserPage extends Component {
 
  render() {
    return (
      <div>
     <Header/>
     <Sidebar menuOpenAppUser="nav-item menu-open" menuActiveAppUser="nav-link active" />
    <RegisterAppUser />
    <Footer/>
    </div>
    )
  }
}
