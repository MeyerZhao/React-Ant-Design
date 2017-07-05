import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, hashHistory } from 'react-router'
import App from './App';
import Users from './routes/Users';


ReactDOM.render((
	<Router history={hashHistory}>
	    <Route path="/" component={App}>
		    <Route path="/users" component={Users} />
	    </Route>
	  </Router>
), document.getElementById('root'));

