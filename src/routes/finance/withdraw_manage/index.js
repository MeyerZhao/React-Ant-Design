import React from 'react'
import { Table, Row, Col, Button, Input, Tabs } from 'antd';
// import Modal from '../../../components/Modal.js'
// import Form from './Form'
const Search = Input.Search;
const TabPane = Tabs.TabPane;

const columns = [{
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
      <a href="">提交复核</a>
      <span className="ant-divider" />
      <a href="">退回</a>
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

const columns1= [{
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
      <a href="">确认完成</a>
      <span className="ant-divider" />
      <a href="">退回</a>
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
      <a href="">提交失败</a>
    </span>
  ),
}];

const columns3 = [{
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
      <a href="">备注</a>
    </span>
  ),
}];

const columns4 = [{
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
      <a href="">备注</a>
    </span>
  ),
}];

export default class Users extends React.Component {
  render(){
    return (
    	<div>
        <Row style={{marginBottom:'10px'}}>
          <Col span={12} offset={12}>
            <Button size="large" style={{float: "right"}}>高级搜索</Button>
            <Search 
               size="large"
               placeholder="输入关键字"
               style={{ width: 200, float: "right",  marginRight:"10px" }}
             />
          </Col>
        </Row>
        <Tabs defaultActiveKey="1" >
           <TabPane tab="提现申请" key="1"> <Table columns={columns} dataSource={data}  /> </TabPane>
           <TabPane tab="提现复核" key="2"> <Table columns={columns1} dataSource={data} /> </TabPane>
           <TabPane tab="提现成功" key="3"> <Table columns={columns2} dataSource={data} /> </TabPane>
           <TabPane tab="提现退回" key="4"> <Table columns={columns3} dataSource={data} /> </TabPane>
           <TabPane tab="提现失败" key="5"> <Table columns={columns4} dataSource={data} /> </TabPane>
         </Tabs>


    	</div>
    )
  }
}
