import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';

import App from './App'

import UserList from './routes/user/userlist/';
import BusinessType from './routes/user/businesstype/';
import BusinessList from './routes/user/businesslist/';






ReactDOM.render(
  <Router history={browserHistory}>
    <Route breadcrumbName="首页" path="/" component={App}>
      <Route breadcrumbName="用户" path="user">
				<Route breadcrumbName="用户列表" path="userlist" component={UserList}> </Route>
				<Route breadcrumbName="商家类型" path="businesstype" component={BusinessType}> </Route>
				<Route breadcrumbName="商家列表" path="businesslist" component={BusinessList}> </Route>
      </Route>
      <Route breadcrumbName="商品" path="goods">
      	<Route breadcrumbName="商品品类" path="goodstype"> </Route>
      	<Route breadcrumbName="商品属性" path="goodsprop"> </Route>
      	<Route breadcrumbName="品种SKU" path="typesku"> </Route>
      	<Route breadcrumbName="商品SKU" path="goodssku"> </Route>
      	<Route breadcrumbName="用户品种" path="usertype"> </Route>
      	<Route breadcrumbName="用户商品" path="usergoods"> </Route>
      </Route>
      <Route breadcrumbName="订单" path="orders">
      	<Route breadcrumbName="常规订单" path="general"> </Route>
      	<Route breadcrumbName="白条订单" path="ious"> </Route>
      	<Route breadcrumbName="信息订单" path="infor"> </Route>
      	<Route breadcrumbName="配送订单" path="distribute"> </Route>
      	<Route breadcrumbName="退款订单" path="refund"> </Route>
      </Route>
      <Route breadcrumbName="财务" path="finance">
      	<Route breadcrumbName="账户列表" path="account_list"> </Route>
      	<Route breadcrumbName="商家白条" path="business_ious"> </Route>
      	<Route breadcrumbName="提现管理" path="withdraw_manage"> </Route>
      	<Route breadcrumbName="账户管理" path="account_manage"> </Route>
      	<Route breadcrumbName="对账中心" path="bill_center"> </Route>
      	<Route breadcrumbName="保证金管理" path="bond_manage"> </Route>
      	<Route breadcrumbName="银行卡管理" path="bank_card_manage"> </Route>
      </Route>

      <Route breadcrumbName="应用" path="app"> </Route>
      <Route breadcrumbName="数据分析" path="data_analysis"> </Route>
      <Route breadcrumbName="管理员通讯录" path="admin_address"> </Route>
    </Route>
  </Router>
, document.getElementById('root'));





