import React from 'react'
import { Table, Row, Col } from 'antd';
import Modal from '../../../components/Modal.js'
import Form from './Form'



const columns = [{
  title: '商户UID', dataIndex: 'item1', key: 'item1', render: text => <a href={text}>{text}</a>, }, {
  title: '短信类型', dataIndex: 'item2', key: 'item2', }, {
  title: '购买量', dataIndex: 'item3', key: 'item3', }, {
  title: '购买金额', dataIndex: 'item4', key: 'item4', }, {
  title: '使用量', dataIndex: 'item5', key: 'item5', }, {
  title: '剩余量', dataIndex: 'item6', key: 'item6', }, {
  title: '短信签名', dataIndex: 'item7', key: 'item7', }, {
  title: '来源', dataIndex: 'item8', key: 'item8', }, {
  title: '更新时间', dataIndex: 'item9', key: 'item9', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">短信明细</a>
      <span className="ant-divider" />
      <a href="">编辑</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  item1: '#/app/sms_mgr/517052012334556',
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
            <Modal title="添加短信商户"> <Form /> </Modal>
          </Col>
        </Row>
        <Table columns={columns} dataSource={data}/>
      </div>
    )
  }
}
