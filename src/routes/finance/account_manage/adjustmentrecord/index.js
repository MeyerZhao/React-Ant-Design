import React from 'react'
import { Table, Tabs } from 'antd';

const TabPane = Tabs.TabPane;

const columns1 = [{
  title: '所属银行', dataIndex: 'item1', key: '1', render: text => <a href="">{text}</a>, }, {
  title: '提现单号', dataIndex: 'item2', key: '2', }, {
  title: '用户UID', dataIndex: 'item3', key: '3', }, {
  title: '用户昵称/商家名称', dataIndex: 'item4', key: '4', }, {
  title: '申请金额', dataIndex: 'item5', key: '5', }, {
  title: '提现状态', dataIndex: 'item6', key: '6', }, {
  title: '申请时间', dataIndex: 'item7', key: '7', }, {
  title: '处理时间', dataIndex: 'item8', key: '8', }, {
  title: '支付渠道流水号', dataIndex: 'item9', key: '9', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">编辑</a>
    </span>
  ),
}];

const columns2 = [{
  title: '所属银行', dataIndex: 'item1', key: '1', render: text => <a href="">{text}</a>, }, {
  title: '提现单号', dataIndex: 'item2', key: '2', }, {
  title: '用户UID', dataIndex: 'item3', key: '3', }, {
  title: '用户昵称/商家名称', dataIndex: 'item4', key: '4', }, {
  title: '申请金额', dataIndex: 'item5', key: '5', }, {
  title: '提现状态', dataIndex: 'item6', key: '6', }, {
  title: '申请时间', dataIndex: 'item7', key: '7', }, {
  title: '处理时间', dataIndex: 'item8', key: '8', }, {
  title: '支付渠道流水号', dataIndex: 'item9', key: '9', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">编辑</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  item1: '1513213',
  item2: 'John Brown',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
}];



export default class Users extends React.Component {
  render(){
    return (
        <div>
         
          <Tabs defaultActiveKey="1" >
             <TabPane tab="全部" key="1"> <Table columns={columns1} dataSource={data}  /> </TabPane>
             <TabPane tab="进行中(1)" key="2"> <Table columns={columns2} dataSource={data} /> </TabPane>
           </Tabs>
        </div>
    )
  }
}
