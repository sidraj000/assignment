import React, { Component } from 'react'
import {  Router, Switch, Route } from "react-router-dom";
import history from './history';
import Notification from './Notification';
import Settings from './Settings';
import Task from './Task';
export default class Routes extends Component {
    render() {
        
        return (
         <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Settings}/>
                    <Route exact path="/Task1" component={Task}/>
                    
                    <Route exact path="/Task2" component={Task}/>
                    <Route exact path="/Settings" component={Settings}/>
                    <Route exact path="/Notifications" component={Notification}/>
                </Switch>
        </Router >
        )
    }
}
