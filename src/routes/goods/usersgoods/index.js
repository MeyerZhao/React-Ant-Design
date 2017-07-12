import React from 'react'
import { Row, Col, Button, Table } from 'antd';
// import Modal from '../../../components/Modal.js'
// import Form from './Form'
import AdvSearch from './AdvSearch'


const columns = [{
  title: '商家UID', dataIndex: 'name', key: 'name', render: text => <a href="">{text}</a>, }, {
  title: '商家名称', dataIndex: 'age', key: 'age', }, {
  title: '商家类型', dataIndex: 'address', key: '1', }, {
  title: '主营类目', dataIndex: 'address', key: '2', }, {
  title: '佣金比例', dataIndex: 'address', key: '22', }, {
  title: '当前状态', dataIndex: 'address', key: '3', }, {
  title: '所在地区', dataIndex: 'address', key: '4', }, {
  title: '开店时间', dataIndex: 'address', key: '5', }, {
  title: '有效期限', dataIndex: 'address', key: '6', }, {
  title: '用户数量', dataIndex: 'address', key: '8', }, {
  title: '商品数量', dataIndex: 'address', key: '9', }, {
  title: '成交金额', dataIndex: 'address', key: 'address', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">详情</a>
      <span className="ant-divider" />
      <a href="">编辑</a>
    </span>
  ),
}];


export default class Users extends React.Component {
  render(){
    return (
    	<div>

        <Row style={{marginBottom:'10px'}}>
          <Col span={12}>
         {/*   <Modal title="用户商品"> <Form /> </Modal>*/}
          </Col>
         
          <Col span={12}>
            <Button size="large" style={{float: "right"}}>高级搜索</Button>
          </Col>
        </Row>
        
        <Row style={{marginBottom:'10px'}}>
          <Col span={24}>
            <AdvSearch></AdvSearch>
          </Col>
        </Row>

        <Table columns={columns} />
        

    	</div>
    )
  }
}

