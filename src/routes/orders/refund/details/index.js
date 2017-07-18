import React from 'react'
import { Table, Row, Col, Button, Alert } from 'antd';

const columns = [{
  title: '下单方', dataIndex: 'item1', key: 'item1', render: text => <a href={text}>{text}</a>, }, {
  title: '接单方', dataIndex: 'item2', key: 'item2', }, {
  title: '申请时间', dataIndex: 'item3', key: 'item3', }, {
  title: '处理时间', dataIndex: 'item4', key: 'item4', }, {
  title: '结束时间', dataIndex: 'item5', key: 'item5', }];

const data = [{
  key: '1',
  item1: '/orders/general/517052012334556',
  item2: 'John Brown',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
  item7: 'John Brown',
},{
  key: '2',
  item1: '/orders/general/zhaom',
  item2: 'John Brown',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
  item7: 'John Brown',
}];

const columns_refund = [{
  title: '操作者', width:150, dataIndex: 'item1', key: 'item1', }, {
  title: '操作时间', width:250, dataIndex: 'item2', key: 'item2', }, {
  title: '操作内容', dataIndex: 'item3', key: 'item3', }];


const data_refund = [{
  key: '1',
  item1: '下单方手机',
  item2: '13655286637',
  item3: '发起退款，退款金额90.00  退款类型：漏单 退款原因：测试订单', 
}, {
  key: '2',
  item1: '接单方店铺',
  item2: '13655286637',
  item3: '拒绝退款，拒绝原因：请修改退款金额', }
  ];

const columns4 = [{
  title: '商品信息', width:120,  dataIndex: 'item1', key: 'item1'}, {
  title: '单价', width:120,  dataIndex: 'item1', key: 'item1'}, {
  title: '数量', width:120,  dataIndex: 'item1', key: 'item1'}, {
  title: '服务费', width:120,  dataIndex: 'item1', key: 'item1'}, {
  title: '优惠', width:120,  dataIndex: 'item1', key: 'item1'}, {
  title: '小计', dataIndex: 'item2', key: 'item2', }
];


export default class Users extends React.Component {
  render(){
    return (
    	<div>
	    	<div style={{paddingLeft:"40px", borderLeft:"6px solid #50b6ef", marginBottom:"30px"}}>
	    	  
	    	  <Row gutter={8}>
	    	    <Col span={12} >
	    	    	<h2 style={{color:"#4d545c", marginBottom:"5px"}}>订单编号：{this.props.params.id}</h2> 
	    	    	<p style={{marginBottom:"10px", color:"#94a1b0"}} >订单类型：配送单    来源渠道：API   </p>

              <h2 style={{color:"#4d545c"}}>当前退款状态：退款中，等待接单方处理</h2>

	    	    	<Button style={{margin:"20px 0",height:"44px", width:"140px"}} siz="large" type="primary" >退款处理</Button>

              <h2 style={{color:"#4d545c", marginBottom:"5px"}}>申请退款金额：<span style={{color:"#e55850"}}>￥90.00</span></h2>
              <p style={{marginBottom:"10px", color:"#94a1b0"}} >订单可退款金额90.00</p>
	    	    </Col>
	    	    
	    	  </Row>

	    	  
	    	</div>
	    	<div style={{paddingLeft:"40px"}}>
	    		<h4 style={{borderBottom: "2px solid #ddd", paddingBottom: "10px"}} >基础信息</h4>
	    		<Table columns={columns} dataSource={data} pagination={false} style={{marginBottom:"30px"}}/>
          <Alert
              message="错误 退款类型"
              description="退款类型：花材与描述不符."
              type="error"
              showIcon
            />
           <Alert
              message="错误 退款说明"
              description="退款说明：花材跟说明的严重不符合"
              type="error"
              showIcon
            /> 

	    		<h4 style={{borderBottom: "2px solid #ddd", paddingBottom: "10px"}} >退款记录</h4>
	    		<Table columns={columns_refund} dataSource={data_refund} pagination={false} style={{marginBottom:"30px"}}/>

	    		<h4 style={{marginBottom:"10px"}} >商品信息</h4>
	    		<Table columns={columns4} pagination={false} style={{marginBottom:"10px"}}/>

	    	</div>
    	</div>
    )
  }
}
