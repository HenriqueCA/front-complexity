import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import stdScr from './library/stdScreens';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={stdScr.Home} />
            <Route path="/forgot-password" exact={true} component={stdScr.Forgot} />
            <Route path="/login" exact={true} component={stdScr.Login} />
            <Route path="/signup" exact={true} component={stdScr.Signup} />
            <Route path="/profile" exact={true} component={stdScr.Profile} />
            <Route path="/problem" exact={true} component={stdScr.Question} />
            <Route path="/problems" exact={true} component={stdScr.Questions} />
            <Route path="/blog" exact={true} component={stdScr.Blogs} />
            <Route path="/blog/search" exact={true} component={stdScr.SearchBlog} />
            <Route path="/blog/page" exact={true} component={stdScr.Blog} />
            <Route path="/blog/create" exact={true} component={stdScr.CreateBlog} />
            <Route path="/ranking" exact={true} component={stdScr.Ranking} />
            <Route path="/a" component={stdScr.NotFound} />
        </Switch>
    </BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
