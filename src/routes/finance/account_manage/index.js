import React from 'react'
import { Table, Row, Col, Button, Tabs } from 'antd';
import { Link } from 'react-router'
import ModalList from '../../../components/ModalList'
import Form from './Form'

const TabPane = Tabs.TabPane;











const columns1 = [{
  title: '用户UID', dataIndex: 'item3', key: '3', }, {
  title: '商家名称', dataIndex: 'item4', key: '4', }, {
  title: '用户类型', dataIndex: 'item5', key: '5', }, {
  title: '当日提现次数', dataIndex: 'item6', key: '6', }, {
  title: '充值状态', dataIndex: 'item7', key: '7', }, {
  title: '提现状态', dataIndex: 'item8', key: '8', }, {
  title: '交易状态', dataIndex: 'item9', key: '9', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
       <ModalList title="账户调整"> <Form /> </ModalList>
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
          <Col span={12} offset={12}>
            <Button style={{float: "right"}} type="primary" size="large" ><Link to="/finance/account_manage/adjustmentrecord">调整记录</Link></Button>
          </Col>
        </Row>

        <Tabs defaultActiveKey="1" >
           <TabPane tab="全部" key="1"> <Table columns={columns1} dataSource={data} /> </TabPane>
           <TabPane tab="进行中(1)" key="2"> <Table columns={columns1} dataSource={data} /> </TabPane>
         </Tabs>


    	</div>
    )
  }
}
