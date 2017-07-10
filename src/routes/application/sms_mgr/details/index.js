import React from 'react'
import { Table, Row, Col, Button } from 'antd';


const columns = [{
  title: '订单编号', dataIndex: 'item1', key: 'item1', render: text => <a href={text}>{text}</a>, }, {
  title: '下单方名称', dataIndex: 'item2', key: 'item2', }, {
  title: '配送时间', dataIndex: 'item3', key: 'item3', }, {
  title: '配送地区', dataIndex: 'item4', key: 'item4', }, {
  title: '接单方', dataIndex: 'item5', key: 'item5', }, {
  title: '订单状态', dataIndex: 'item6', key: 'item6', }, {
  title: '订单金额', dataIndex: 'item7', key: 'item7', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">编辑</a>
      <span className="ant-divider" />
      <a href="">删除</a>
    </span>
  ),
}];

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

const columns2 = [{
  title: '订单编号', width:120,  dataIndex: 'item1', key: 'item1'}, {
  title: '下单方名称', dataIndex: 'item2', key: 'item2', }
];

const data2 = [{
  key: '1',
  item1: '下单方备注',
  item2: '请按时送达',
},{
  key: '2',
  item1: '接单方备注',
  item3: '请按时送达',
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
	    		<Table columns={columns} dataSource={data} pagination={false} style={{marginBottom:"30px"}}/>
	    		<h4 style={{borderBottom: "2px solid #ddd", paddingBottom: "10px"}} >交易双方</h4>
	    		<Table columns={columns} dataSource={data} pagination={false} style={{marginBottom:"30px"}}/>
	    		<h4 style={{borderBottom: "2px solid #ddd", paddingBottom: "10px"}} >配送信息</h4>
	    		<Table columns={columns} dataSource={data} pagination={false} style={{marginBottom:"30px"}}/>

	    		<h4 style={{borderBottom: "2px solid #ddd", paddingBottom: "10px"}} >其他信息</h4>
	    		<Table
	    			style={{marginBottom:"30px"}} 
	    			columns={columns2} 
	    			dataSource={data2} 
	    			pagination={false}
	    			showHeader={false}
	    		/>

	    		<h4 style={{marginBottom:"10px"}} >商品信息</h4>
	    		<Table columns={columns} dataSource={data} pagination={false} style={{marginBottom:"10px"}}/>
	    		<div style={{textAlign:"right", fontSize:"18px", fontWeight:"bold"}}>
		    		订单总金额:<span style={{color:"#e55850"}}>￥90.00</span>
	    		</div >

	    	</div>
    	</div>
    )
  }
}
