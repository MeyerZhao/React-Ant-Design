import React from 'react'
import { Table, Row, Col, Button } from 'antd';
import PicturesWall2 from '../../../../components/PicturesWall2.jsx'


const columns = [{
  title: '下单时间', dataIndex: 'item1', key: 'item1', render: text => <a href={text}>{text}</a>, }, {
  title: '支付时间', dataIndex: 'item2', key: 'item2', }, {
  title: '确认时间', dataIndex: 'item3', key: 'item3', }, {
  title: '签收时间', dataIndex: 'item4', key: 'item4', }, {
  title: '转账时间', dataIndex: 'item5', key: 'item5', }, {
  title: '退款时间', dataIndex: 'item6', key: 'item6', }];


const business = [{
  title: '交易双方', dataIndex: 'item1', key: 'item1', }, {
  title: 'UID', dataIndex: 'item2', key: 'item2', }, {
  title: '注册手机', dataIndex: 'item3', key: 'item3', }, {
  title: '昵称/店铺名', dataIndex: 'item4', key: 'item4', }, {
  title: '所在地区', dataIndex: 'item5', key: 'item5', }, {
  title: '注册时间', dataIndex: 'item6', key: 'item6', }];

const distribution = [{
title: '配送/发货时间', dataIndex: 'item1', key: 'item1', }, {
title: '收货人姓名', dataIndex: 'item2', key: 'item2', }, {
title: '联系方式', dataIndex: 'item3', key: 'item3', }, {
title: '详细地址', dataIndex: 'item4', key: 'item4', }];







const columns2 = [{
  title: '订单编号', width:120,  dataIndex: 'item1', key: 'item1'}, {
  title: '下单方名称', dataIndex: 'item2', key: 'item2', }];

const data2 = [{
  key: '1',
  item1: '下单方备注',
  item2: '请按时送达',
},{
  key: '2',
  item1: '接单方备注',
  item2: '请按时送达',
},{
  key: '3',
  item1: '贺卡信息',
  item2: '贺卡类型 + 内容 （主要为B2C/转单订单）',
},{
  key: '4',
  item1: '订单图片',
  item2: '贺卡类型 + 内容 （主要为B2C/转单订单）',
}];

export default class Users extends React.Component {
  render(){
    return (
    	<div>
	    	<div style={{paddingLeft:"40px", borderLeft:"6px solid #50b6ef", marginBottom:"30px"}}>
	    	  
	    	  <Row gutter={8}>
	    	    <Col span={12} >
	    	    	<h2>订单详情:{this.props.params.orderid}</h2> 
	    	    	<p style={{marginBottom:"10px"}} >订单类型：配送单    来源渠道：API    附加号码：1213132424</p>

	  	    	  <p style={{marginBottom:"10px"}} >
	    	    		<b>当前状态：已支付</b> <b>支付金额：￥90.00</b><small>（商品费用90.00+服务费用0.00）</small>
	    	    	 	<b>支付方式：支付宝</b> <small>（89.00）+优惠（1.00，号码：23333）+退款（0.00）</small>
	    	    	</p>
	    	    	 <Button type="primary">确认订单</Button>&nbsp;
	    	    	 <Button >签收订单</Button>&nbsp;
	    	    	 <Button >退款</Button>
	    	    </Col>
	    	    <Col span={12} />
	    	  </Row>

	    	  
	    	</div>
	    	<div style={{paddingLeft:"40px"}}>
	    		<h4 style={{borderBottom: "2px solid #ddd", paddingBottom: "10px"}} >基础信息</h4>
	    		<Table columns={columns} pagination={false} style={{marginBottom:"30px"}}/>
	    		<h4 style={{borderBottom: "2px solid #ddd", paddingBottom: "10px"}} >交易双方</h4>
	    		<Table columns={business} pagination={false} style={{marginBottom:"30px"}}/>
	    		<h4 style={{borderBottom: "2px solid #ddd", paddingBottom: "10px"}} >配送信息</h4>
	    		<Table columns={distribution} pagination={false} style={{marginBottom:"30px"}}/>

	    		<h4 style={{borderBottom: "2px solid #ddd", paddingBottom: "10px"}} >其他信息</h4>
	    		<Table
	    			style={{marginBottom:"30px"}} 
	    			columns={columns2} 
	    			dataSource={data2} 
	    			pagination={false}
	    			showHeader={false}
	    		/>

	    		<h4 style={{marginBottom:"10px"}} >商品信息</h4>
	    		<Table columns={columns} pagination={false} style={{marginBottom:"10px"}}/>
	    		<div style={{textAlign:"right", fontSize:"18px", fontWeight:"bold"}}>
		    		订单总金额:<span style={{color:"#e55850"}}>￥90.00</span>
	    		</div >

	    	</div>
    	</div>
    )
  }
}
