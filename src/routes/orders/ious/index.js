import React from 'react'
import { Table, Row, Col } from 'antd';
import Modal from '../../../components/Modal.js'
import Form from './Form'

const columns = [{
  title: '图片', dataIndex: 'item1', key: 'item1', render: text => <a href="">{text}</a>, }, {
  title: '品种名称', dataIndex: 'item2', key: 'item2', }, {
  title: 'SKU编号', dataIndex: 'item3', key: 'item3', }, {
  title: '属性值', dataIndex: 'item4', key: 'item4', }, {
  title: '所属品类', dataIndex: 'item5', key: 'item5', }, {
  title: '排序', dataIndex: 'item6', key: 'item6', }, {
  title: '更新时间', dataIndex: 'item7', key: 'item7', }, {
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
        <Row style={{marginBottom:'10px'}}>
          <Col span={12}>
            <Modal title="白条订单"> <Form /> </Modal>
          </Col>
        </Row>
        <Table columns={columns} dataSource={data}/>

    	</div>
    )
  }
}
