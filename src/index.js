import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, hashHistory } from 'react-router'
import App from './App';
import User from './routes/user/';


ReactDOM.render((
	<Router history={hashHistory}>
	    <Route path="/" component={App}>
		    <Route path="/user" component={User} />
	    </Route>
	  </Router>
), document.getElementById('root'));

