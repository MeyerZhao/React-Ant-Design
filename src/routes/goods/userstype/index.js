import React from 'react'
import { Row, Col, Button, Table } from 'antd';


import AdvSearch from './AdvSearch'


const columns = [{
  title: '图片', dataIndex: 'name', key: 'name', render: text => <a href="">{text}</a>, }, {
  title: '品种名称', dataIndex: 'address', key: '1', }, {
  title: 'SKU编号', dataIndex: 'address', key: '2', }, {
  title: '属性值', dataIndex: 'address', key: '3', }, {
  title: '所属品类', dataIndex: 'address', key: '4', }, {
  title: '所属用户', dataIndex: 'address', key: '5', }, {
  title: '更新时间', dataIndex: 'address', key: '6', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">详情</a>
      <span className="ant-divider" />
      <a href="">编辑</a>
    </span>
  ),
}];


export default class Users extends React.Component {
  state={
    show: false,
  }
  handleClick =(e) => {
   this.setState({show: !this.state.show});
  }
  render(){
    return (
    	<div>

        <Row style={{marginBottom:'10px'}}>
          <Col span={12}>
            
          </Col>
         
          <Col span={12}>
                        <Button size="large" style={{float: "right"}} onClick={this.handleClick}>高级搜索</Button>
          </Col>
        </Row>
        
        <Row style={{marginBottom:'10px'}}>
          <Col span={24}>
            {this.state.show ? <AdvSearch /> : null}
          </Col>
        </Row>

        <Table columns={columns} />
        

    	</div>
    )
  }
}

