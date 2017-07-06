import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import UserList from './routes/user/userlist/';
import BusinessType from './routes/user/businesstype/';
import BusinessList from './routes/user/businesslist/';


ReactDOM.render((
	<Router history={browserHistory}>
	    <Route name="home" breadcrumbName="Home" path="/" component={App}>
	    	<Route name="user" breadcrumbName="User" path="user">
			    <Route name="userlist" breadcrumbName="UserList" path="userlist" component={UserList} />
			    <Route path="businesstype" component={BusinessType} />
			    <Route path="businesslist" component={BusinessList} />
	    	</Route>
	    </Route>
	  </Router>
), document.getElementById('root'));

