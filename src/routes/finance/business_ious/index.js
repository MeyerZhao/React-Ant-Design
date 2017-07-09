import React from 'react'
import { Table, Row, Col } from 'antd';
import Modal from '../../../components/Modal.js'
import Form from './Form'

const columns = [{
  title: '图片', dataIndex: 'name', key: 'name', render: text => <a href="">{text}</a>, }, {
  title: '品种名称', dataIndex: 'address', key: '7', }, {
  title: 'SKU编号', dataIndex: 'address', key: '7', }, {
  title: '属性值', dataIndex: 'address', key: '7', }, {
  title: '所属品类', dataIndex: 'address', key: '8', }, {
  title: '排序', dataIndex: 'address', key: '9', }, {
  title: '更新时间', dataIndex: 'address', key: 'address', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">编辑</a>
      <span className="ant-divider" />
      <a href="">删除</a>
    </span>
  ),
}];

export default class Users extends React.Component {
  render(){
    return (
    	<div>
        <Row style={{marginBottom:'10px'}}>
          <Col span={12}>
            <Modal title="商家白条"> <Form /> </Modal>
          </Col>
        </Row>
        <Table columns={columns}  />

    	</div>
    )
  }
}
