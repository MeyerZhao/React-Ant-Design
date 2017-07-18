import React from 'react'
import { Row, Col, Button, Table } from 'antd';
// import Modal from '../../../components/Modal.js'
// import Form from './Form'
import AdvSearch from './AdvSearch'










const columns = [{
  title: '图片', dataIndex: '1', key: '1', render: text => <a href="">{text}</a>, }, {
  title: '商品名称', dataIndex: '2', key: '2', }, {
  title: 'SKU编号', dataIndex: '3', key: '3', }, {
  title: '所属品类', dataIndex: '4', key: '4', }, {
  title: '排序', dataIndex: '5', key: '5', }, {
  title: '当前状态', dataIndex: '6', key: '6', }, {
  title: '所属用户', dataIndex: '7', key: '7', }, {
  title: '更新时间', dataIndex: '8', key: '8', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">添加到商品SKU</a>
      <span className="ant-divider" />
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

