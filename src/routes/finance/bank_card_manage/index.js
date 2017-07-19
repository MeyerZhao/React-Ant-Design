import React from 'react'
import { Table, Row, Col, } from 'antd';
import Modal from '../../../components/Modal.js'
import Form from './Form'


const columns = [{
  title: '用户UID', dataIndex: 'item1', key: '1', render: text => <a href="">{text}</a>, }, {
  title: '注册手机', dataIndex: 'item2', key: '2', }, {
  title: '用户类型', dataIndex: 'item3', key: '3', }, {
  title: '用户昵称/商家名称', dataIndex: 'item4', key: '4', }, {
  title: '开户人', dataIndex: 'item5', key: '5', }, {
  title: '所属银行', dataIndex: 'item6', key: '6', }, {
  title: '开户行', dataIndex: 'item7', key: '7', }, {
  title: '银行卡号', dataIndex: 'item8', key: '8', }, {
  title: '更新时间', dataIndex: 'item9', key: '9', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">编辑</a>
      <span className="ant-divider" />
      <a href="">删除</a>
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
        <Row style={{marginBottom:'10px'}}>
          <Col span={12}>
            <Modal title="添加银行卡"> <Form /> </Modal>
          </Col>
 
        </Row>

        <Table columns={columns} dataSource={data}  />

    	</div>
    )
  }
}
