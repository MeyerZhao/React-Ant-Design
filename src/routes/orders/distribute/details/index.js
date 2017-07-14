import React from 'react'
import { Table, Row, Col } from 'antd';




const columns_base = [{
  title: '下单时间 （商户）', dataIndex: 'item1', key: 'item1', render: text => <a href={text}>{text}</a>, }, {
  title: '确认时间 （配送员）', dataIndex: 'item2', key: 'item2', }, {
  title: '取件时间 （配送员）', dataIndex: 'item3', key: 'item3', }, {
  title: '送达时间 （配送员）', dataIndex: 'item4', key: 'item4', }, {
  title: '配送时间 （订单）', dataIndex: 'item5', key: 'item5', }];

const data_base = [{
  key: '1',
  item1: 'John Brown',
  item2: 'John Brown',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
}];

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
	    	    	<h2 style={{color:"#4d545c", marginBottom:"5px"}}>订单编号{this.props.params.id}</h2> 
              <p style={{marginBottom:"10px", color:"#94a1b0"}} >订单类型：信息订单 来源渠道</p>

              <h2 style={{color:"#4d545c"}}>配送单号：1213132424</h2>
              <p style={{marginBottom:"10px", color:"#94a1b0"}} >配送类型（闪送/达达/自有）</p>

              <h2 style={{color:"#4d545c", marginBottom:"5px"}}>当前状态：配送中 &nbsp;&nbsp;&nbsp; 配送价格<span style={{color:"#e55850"}}>￥90.00</span></h2>
              <p style={{marginBottom:"10px", color:"#94a1b0"}} >距离目的地1.0km</p>

	    	    </Col>
	    	    <Col span={12} />
	    	  </Row>

	    	  
	    	</div>
	    	<div style={{paddingLeft:"40px"}}>
	    		<h4 style={{borderBottom: "2px solid #ddd", paddingBottom: "10px"}} >基础信息</h4>
	    		<Table columns={columns_base} dataSource={data_base} pagination={false} style={{marginBottom:"30px"}}/>

	    		<h4 style={{borderBottom: "2px solid #ddd", paddingBottom: "10px"}} >配送信息</h4>
	    		<table style={{marginBottom:"30px", width:"100%"}}>
            <tbody className="ant-table-tbody">
              <tr><td style={{width:"100px"}}>收货人</td><td>张三，18678863773，浙江省杭州市下城区泰地北上新城2幢</td></tr>
              <tr><td>发货人</td><td>李四，13655286637，浙江省杭州市江干区五星路188号荣安大厦21层    </td></tr>
              <tr><td>配送物品</td><td>鲜花一公斤以内</td></tr>
              <tr><td>配送人员</td><td>张三-16845978546</td></tr>
              <tr><td>配送距离</td><td>1.9km</td></tr>
              <tr><td>配送时效</td><td>1小时21分59秒</td></tr>
            </tbody>
          </table>

          <h4 style={{borderBottom: "2px solid #ddd", paddingBottom: "10px"}} >配送信息</h4>
          <div style={{height:"300px",width:"100%",marginBottom:"10px",background:"#ddd"}}>
           这里放置地图
          </div>

          <h4 style={{marginBottom:"10px"}} >商品信息</h4>
          <Table columns={columns4} pagination={false} style={{marginBottom:"10px"}}/>


	    

	    		

	    	</div>
    	</div>
    )
  }
}
