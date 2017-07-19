import React from 'react'
import { Table, Row, Col, Input, Button } from 'antd';
import AdvSearch from './AdvSearch'
import './index.css';
const Search = Input.Search;

const columns = [{
  title: '流水号', dataIndex: 'item1', key: 'item1', render: text => <a href={text}>{text}</a>, }, {
  title: '商家UID', dataIndex: 'item2', key: 'item2', }, {
  title: '商家名称', dataIndex: 'item3', key: 'item3', }, {
  title: '白条用户UID', dataIndex: 'item4', key: 'item4', }, {
  title: '白条用户名称', dataIndex: 'item5', key: 'item5', }, {
  title: '白条总额', dataIndex: 'item6', key: 'item6', }, {
  title: '白条余额', dataIndex: 'item7', key: 'item7', }, {
  title: '应收金额', dataIndex: 'item8', key: 'item8', }];

const data = [{
  key: '1',
  item1: ' 17050003',
  item2: ' 2000.00',
  item3: ' 1705012345',
  item4: ' 13989456668',
  item5: ' 未设置',
  item6: ' 2017-05-02 12:01:27',
  item7: ' 2017-05-02 12:01:27',
  item8: ' PC-支付宝',
  item9: ' 已成功',
}];

export default class Users extends React.Component {
  render(){
    return (
      <div>
        <Row style={{marginBottom:'10px'}}>
          <Col span={24}>
            <Button size="large" style={{float: "right"}}>高级搜索</Button>
            <Search 
              placeholder="输入搜索关键字"
              style={{ width: 200, float:"right", marginRight:"10px"}}
              size="large"
            />
          </Col>
        </Row>
        <Row style={{marginBottom:'10px'}}>
          <Col span={24}>
            <AdvSearch></AdvSearch>
          </Col>
        </Row>
        
       <Table columns={columns} dataSource={data}/>
        
      </div>
    )
  }
}
