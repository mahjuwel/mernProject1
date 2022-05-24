import React, {Component} from 'react';
//import {Button} from "react-bootstrap";
import {HashRouter} from "react-router-dom";
import AppRoute from "./route/AppRoute";
class App extends Component {
    render() {
        return (
            <div class="wrapper">
                    <HashRouter>
                        <AppRoute />
                    </HashRouter>
            </div>
        );
    }
}


export default App;