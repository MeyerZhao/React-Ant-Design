import React from 'react'
import { Table } from 'antd';

const columns = [{
  title: '注册手机', dataIndex: 'name', key: 'name', render: text => <a href="">{text}</a>, }, {
  title: '用户UID'  , dataIndex: 'age', key: 'age', }, {
  title: '用户昵称' , dataIndex: 'address', key: 'address', }, {
  title: '注册时间' , dataIndex: 'address', key: 'address', }, {
  title: '注册渠道' , dataIndex: 'address', key: 'address', }, {
  title: '上次登录' , dataIndex: 'address', key: 'address', }, {
  title: '登录IP'   , dataIndex: 'address', key: 'address', }, {
  title: '消费次数' , dataIndex: 'address', key: 'address', }, {
  title: '消费金额' , dataIndex: 'address', key: 'address', }, {
  title: '提现次数' , dataIndex: 'address', key: 'address', }, {
  title: '提现金额' , dataIndex: 'address', key: 'address',
}];


export default class extends React.Component {
  render(){
    return <Table columns={columns} />
  }
}
