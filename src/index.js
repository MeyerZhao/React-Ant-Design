import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './App'
import Home from './routes/Home'

import UserList from './routes/user/userlist/';
import BusinessType from './routes/user/businesstype/';
import BusinessList from './routes/user/businesslist/';

import GoodsType from './routes/goods/goodstype/';
import GoodsProp from './routes/goods/goodsprop/';
  import GoodsPropValue from './routes/goods/goodsprop/goodspropvalue/';

import TypeSku from './routes/goods/typesku/';
import GoodsSku from './routes/goods/goodssku/';
import UsersType from './routes/goods/userstype/';
import UsersGoods from './routes/goods/usersgoods/';

import General from './routes/orders/general/';
    import GeneralDetails from './routes/orders/general/details/';

import Ious from './routes/orders/ious/';
    import IousDetails from './routes/orders/ious/details/';

import Infor from './routes/orders/infor/';
    import InforDetails from './routes/orders/infor/details/';

import Distribute from './routes/orders/distribute/';
    import DistributeDetails from './routes/orders/distribute/details/';

import Refund from './routes/orders/refund/';
    import RefundDetails from './routes/orders/refund/details/';

import AccountList from './routes/finance/account_list/';
    import FinancialDetails from './routes/finance/account_list/financialdetails/';
    import ManualRecharge from './routes/finance/account_list/manualrecharge/';
import BusinessIous from './routes/finance/business_ious/';
    import BusinessIousDetails from './routes/finance/business_ious/details/';

import WithdrawManage from './routes/finance/withdraw_manage/';
import AccountManage from './routes/finance/account_manage/';
  import AdjustmentRecord from './routes/finance/account_manage/adjustmentrecord/';

import BillCenter from './routes/finance/bill_center/';
import BondManage from './routes/finance/bond_manage/';
  import BondManageDetails from './routes/finance/bond_manage/details';
  
import BankCardManage from './routes/finance/bank_card_manage/';


import SMSMgr from './routes/application/sms_mgr/';
  import SMSMgrDetails from './routes/application/sms_mgr/details';

import Data_Analysis from './routes/data_analysis'; 

import AdminAddress from './routes/admin_address/';
    import AdminAddressDetails from './routes/admin_address/details/';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route breadcrumbName="首页" path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route breadcrumbName="用户" path="/user">
				<Route breadcrumbName="用户列表" path="userlist" component={UserList}> </Route>
				<Route breadcrumbName="商家类型" path="businesstype" component={BusinessType}> </Route>
				<Route breadcrumbName="商家列表" path="businesslist" component={BusinessList}> </Route>
      </Route>
      <Route breadcrumbName="商品" path="goods">
      	<Route breadcrumbName="商品品类" path="goodstype" component={GoodsType}> </Route>
      	<Route breadcrumbName="商品属性" path="goodsprop" component={GoodsProp}> </Route>
          <Route breadcrumbName="属性值列表"  path="goodsprop/goodspropvalue" component={GoodsPropValue}> </Route>

      	<Route breadcrumbName="品种SKU" path="typesku" component={TypeSku}> </Route>
      	<Route breadcrumbName="商品SKU" path="goodssku" component={GoodsSku}> </Route>
      	<Route breadcrumbName="用户品种" path="usertype" component={UsersType}> </Route>
      	<Route breadcrumbName="用户商品" path="usergoods" component={UsersGoods}> </Route>
      </Route>
      <Route breadcrumbName="订单" path="orders">
        <Route breadcrumbName="常规订单" path="general" component={General}> </Route>
          <Route breadcrumbName="常规订单详情"  path="general/:id" component={GeneralDetails}> </Route>

      	<Route breadcrumbName="白条订单" path="ious" component={Ious}> </Route>
          <Route breadcrumbName="白条订单详情"  path="ious/:id" component={IousDetails}> </Route>

      	<Route breadcrumbName="信息订单" path="infor" component={Infor}> </Route>
          <Route breadcrumbName="信息订单详情"  path="infor/:id" component={InforDetails}> </Route>

      	<Route breadcrumbName="配送订单" path="distribute" component={Distribute}> </Route>
          <Route breadcrumbName="配送订单详情"  path="distribute/:id" component={DistributeDetails}> </Route>

      	<Route breadcrumbName="退款订单" path="refund" component={Refund}> </Route>
          <Route breadcrumbName="退款订单详情"  path="refund/:id" component={RefundDetails}> </Route>
      </Route>
      <Route breadcrumbName="财务" path="finance">
      	<Route breadcrumbName="账户列表" path="account_list" component={AccountList}> </Route>
          <Route breadcrumbName="财务明细"  path="account_list/financialdetails/:id" component={FinancialDetails}> </Route>
          <Route breadcrumbName="人工充值"  path="account_list/manualrecharge/:id" component={ManualRecharge}> </Route>
        <Route breadcrumbName="商家白条" path="business_ious" component={BusinessIous}> </Route>
          <Route breadcrumbName="用户明细"  path="business_ious/details" component={BusinessIousDetails}> </Route>

        <Route breadcrumbName="提现管理" path="withdraw_manage" component={WithdrawManage}> </Route>
        <Route breadcrumbName="账户管理" path="account_manage" component={AccountManage}> </Route>
          <Route breadcrumbName="调整记录"  path="account_manage/adjustmentrecord" component={AdjustmentRecord}> </Route>

        <Route breadcrumbName="对账中心" path="bill_center" component={BillCenter}> </Route>
        
        <Route breadcrumbName="保证金管理" path="bond_manage" component={BondManage}> </Route>
          <Route breadcrumbName="变动明细"  path="bond_manage/details" component={BondManageDetails}> </Route>

      	<Route breadcrumbName="银行卡管理" path="bank_card_manage" component={BankCardManage}> </Route>
      </Route>

      <Route breadcrumbName="应用" path="app"> 
        <Route breadcrumbName="短信管理" path="sms_mgr" component={SMSMgr}> </Route>
          <Route breadcrumbName="短信明细"  path="sms_mgr/:id" component={SMSMgrDetails}> </Route>
      </Route>

      <Route breadcrumbName="数据" path="data_analysis" component={Data_Analysis}> </Route>

      <Route breadcrumbName="管理员通讯录" path="admin_address" component={AdminAddress}> </Route>
        <Route breadcrumbName="管理员通讯录编辑"  path="admin_address/:id" component={AdminAddressDetails}> </Route>
    </Route>
  </Router>
, document.getElementById('root'));





