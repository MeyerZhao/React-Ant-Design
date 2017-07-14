import React from 'react'
import { Table, Row, Col } from 'antd';
import Modal from '../../../../components/Modal.js'
import Form from './Form'



const columns = [{
  title: '流水号', dataIndex: 'item1', key: 'item1', render: text => <a>{text}</a>, }, {
  title: '接收手机', dataIndex: 'item2', key: 'item2', }, {
  title: '短信内容', dataIndex: 'item3', key: 'item3', }, {
  title: '提交时间', dataIndex: 'item4', key: 'item4', }, {
  title: '短信类型', dataIndex: 'item5', key: 'item5', }, {
  title: '短信状态', dataIndex: 'item6', key: 'item6', }, {
  title: '发送人', dataIndex: 'item7', key: 'item7', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">重发</a>
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
  item8: 'John Brown',
  item9: 'John Brown',
}];

export default class Users extends React.Component {
  render(){
    return (
      <div>

        <Row style={{marginBottom:'10px'}}>
          <Col span={12}>
            <Modal title="发送短信"> <Form /> </Modal>
          </Col>
        </Row>
        <Table columns={columns} dataSource={data}/>
      </div>
    )
  }
}
