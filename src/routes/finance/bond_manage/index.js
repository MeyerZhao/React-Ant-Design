import React from 'react'
import { Table } from 'antd';
import Modal from '../../../components/ModalList.js'
import Form from './Form'


const columns = [{
  title: '用户UID', dataIndex: 'item1', key: '1', render: text => <a href="">{text}</a>, }, {
  title: '注册手机', dataIndex: 'item2', key: '2', }, {
  title: '用户类型', dataIndex: 'item3', key: '3', }, {
  title: '用户昵称/商家名称', dataIndex: 'item4', key: '4', }, {
  title: '当前保证金', dataIndex: 'item5', key: '5', }, {
  title: '增加保证金', dataIndex: 'item6', key: '6', }, {
  title: '减少保证金', dataIndex: 'item7', key: '7', }, {
  title: '账户可用余额', dataIndex: 'item8', key: '8', }, {
  title: '更新时间', dataIndex: 'item9', key: '9', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">变动明细</a>
      <span className="ant-divider" />
      <Modal title="保证金人工处理"> <Form /> </Modal>
    </span>
  ),
}];

const data = [{
  key: '1',
  item1: 'John Brown',
  item2: 'John Brown',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
  item7: 'John Brown',
}];


export default class Users extends React.Component {
  render(){
    return (
    	<div>
    
        <Table columns={columns} dataSource={data} />

    	</div>
    )
  }
}
