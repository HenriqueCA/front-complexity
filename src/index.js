import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import stdScr from './library/stdScreens'; 
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={ stdScr.Question } />
            <Route path="/forgot-password" exact={true} component={ stdScr.Forgot } />
            <Route path="/login" exact={true} component={stdScr.Login} />
            <Route path="/signup" exact={true} component={stdScr.Signup}/>
            <Route path="/profile" exact={true} component={ stdScr.Profile } />

        </Switch>
    </BrowserRouter>, document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
