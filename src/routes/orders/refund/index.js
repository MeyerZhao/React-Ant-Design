import React from 'react'
import { Table, Row, Col, Button, Input } from 'antd';
import AdvSearch from '../AdvSearch3'
const Search = Input.Search;

const columns = [{
  title: '  订单编号', dataIndex: 'item1', key: 'item1', render: text => <a href={text}>{text}</a>, }, {
  title: '  订单金额', dataIndex: 'item2', key: 'item2', }, {
  title: '  退款金额', dataIndex: 'item3', key: 'item3', }, {
  title: '  接单方', dataIndex: 'item4', key: 'item4', }, {
  title: '  退款类型', dataIndex: 'item5', key: 'item5', }, {
  title: '  申请时间', dataIndex: 'item6', key: 'item6', }, {
  title: '  当前状态', dataIndex: 'item7', key: 'item7', }, {
  title: '  更新时间', dataIndex: 'item8', key: 'item8', }];

const data = [{
  key: '1',
  item1: '#/orders/refund/517052012334556',
  item2: 'John Brown',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
  item7: 'John Brown',
},{
  key: '2',
  item1: '#/orders/refund/zhaom',
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
          <Col span={12} offset={12}>
            <Button size="large" style={{float: "right"}}>高级搜索</Button>
            <Search 
               size="large"
               placeholder="输入关键字"
               style={{ width: 200, float: "right",  marginRight:"10px" }}
             />
          </Col>
        </Row>

        <Row style={{marginBottom:'10px'}}>
          <Col span={24}>
            <AdvSearch></AdvSearch>
          </Col>
        </Row>

        <Table columns={columns} dataSource={data} />

    	</div>
    )
  }
}
