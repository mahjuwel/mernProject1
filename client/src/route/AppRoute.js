import React, {Component,Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/users/HomePage";
import LoginPage from '../pages/users/LoginPage';
import RegisterAppUserPage from '../pages/users/RegisterAppUserPage';
import UserDataTable from '../pages/users/UserDataTable';
import LogoutPage from '../pages/users/LogoutPage';


class AppRoute extends Component {
    
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>    
                    <Route exact path="/login" component={LoginPage}/>  
                    <Route exact path="/AppUserRegister" component={RegisterAppUserPage}/>                              
                    <Route exact path="/UserData" component={UserDataTable} />
                    <Route exact path="/logout" component={LogoutPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;