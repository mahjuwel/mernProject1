import React, { Component } from 'react'

export default class LogoutPage extends Component {
    componentDidMount() {
        sessionStorage.setItem("userData",'');
        sessionStorage.clear();
        window.location.href='/#/login'; 
    }
  render() {
    return (
      <div>LogoutPage</div>
    )
  }
}
