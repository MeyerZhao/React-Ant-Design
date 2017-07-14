import React from 'react'
import { Table, Row, Col, Button, Input } from 'antd';
import AdvSearch from '../AdvSearch'
const Search = Input.Search;











const columns = [{
  title: '订单编号', dataIndex: 'item1', key: 'item1', render: text => <a href={text}>{text}</a>, }, {
  title: '下单方名称', dataIndex: 'item2', key: 'item2', }, {
  title: '配送时间', dataIndex: 'item3', key: 'item3', }, {
  title: '配送地区', dataIndex: 'item4', key: 'item4', }, {
  title: '接单方', dataIndex: 'item5', key: 'item5', }, {
  title: '订单状态', dataIndex: 'item6', key: 'item6', }, {
  title: '来源渠道', dataIndex: 'item7', key: 'item7', }, {
  title: '下单时间', dataIndex: 'item8', key: 'item8', }];

const data = [{
  key: '1',
  item1: '#/orders/infor/517052012334556',
  item2: 'John Brown',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
  item7: 'John Brown',
},{
  key: '2',
  item1: '#/orders/infor/zhaom',
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
