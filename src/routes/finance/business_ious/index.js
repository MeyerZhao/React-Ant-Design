import React from 'react'
import { Table, Row, Col, Button, Input, } from 'antd';
import { Link } from 'react-router'
import AdvSearch from './AdvSearch'
const Search = Input.Search;

const columns = [{
  title: '商家UID', dataIndex: 'item1', key: '1', render: text => <a href="">{text}</a>, }, {
  title: '商家名称', dataIndex: 'item2', key: '2', }, {
  title: '商家类型', dataIndex: 'item3', key: '3', }, {
  title: '主营品类', dataIndex: 'item4', key: '4', }, {
  title: '注册时间', dataIndex: 'item5', key: '5', }, {
  title: '白条用户数', dataIndex: 'item6', key: '6', }, {
  title: '白条总额', dataIndex: 'item7', key: '7', }, {
  title: '白条余额', dataIndex: 'item8', key: '8', }, {
  title: '应收金额', dataIndex: 'item9', key: '9', }];




export default class Users extends React.Component {
  render(){
    return (
    	<div>
        <Row style={{marginBottom:'10px'}}>
          <Col span={12} >
            <Button type="primary" size="large" ><Link to="finance/business_ious/details">用户明细</Link></Button>
          </Col>
          <Col span={12}>
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
            <AdvSearch ></AdvSearch>
          </Col>
        </Row>

        <Table columns={columns}  />

    	</div>
    )
  }
}
