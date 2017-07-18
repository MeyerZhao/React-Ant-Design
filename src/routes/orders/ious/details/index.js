import React from 'react'
import { Table, Row, Col, Button, } from 'antd';
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

const businessdata = [{
  key: '1',
  item1: '下单方',
  item2: 32,
  item3: '0571-22098909',
  item4: 18889898989,
  item5: 'New York No. 1 Lake Park',
  item6: 'New York No. 1 Lake Park',
  item7: 'New York No. 1 Lake Park',
}, {
  key: '2',
  item1: '接单方',
  item2: 32,
  item3: '0571-22098909',
  item4: 18889898989,
  item5: 'New York No. 1 Lake Park',
  item6: 'New York No. 1 Lake Park',
  item7: 'New York No. 1 Lake Park',
}]

const distribution = [{
  title: '配送/发货时间', dataIndex: 'item1', key: 'item1', }, {
  title: '收货人姓名', dataIndex: 'item2', key: 'item2', }, {
  title: '联系方式', dataIndex: 'item3', key: 'item3', }, {
  title: '详细地址', dataIndex: 'item4', key: 'item4', }];

const goods = [{
  title: '商品信息', dataIndex: 'item1', key: 'item1', }, {
  title: '单价', width:"100px", dataIndex: 'item2', key: 'item2', }, {
  title: '数量', width:"100px", dataIndex: 'item3', key: 'item3', }, {
  title: '小计', width:"100px", dataIndex: 'item4', key: 'item4', }];






export default class Users extends React.Component {
  render(){
    return (
      <div>
        <div style={{paddingLeft:"40px", borderLeft:"6px solid #50b6ef", marginBottom:"30px"}}>
          
          <Row gutter={8}>
            <Col span={12} >
              <h2 style={{color:"#4d545c", marginBottom:"5px"}}>订单编号：{this.props.params.id}</h2> 
              <p style={{marginBottom:"10px", color:"#94a1b0"}} >订单类型：白条订单    来源渠道：API    附加号码：1213132424</p>

              <h2 style={{color:"#4d545c", marginBottom:"5px"}}>支付金额：<span style={{color:"#e55850"}}>￥90.00</span></h2> 
              <p style={{marginBottom:"10px", color:"#94a1b0"}} >（商品费用90.00+服务费用0.00）</p>

              <h2 style={{color:"#4d545c", marginBottom:"5px"}}>支付方式：支付宝</h2> 
              <p style={{marginBottom:"10px", color:"#94a1b0"}} >（89.00）+优惠（1.00，号码：23333）+退款（0.00）</p>

              <h2 style={{color:"#4d545c", marginBottom:"5px"}}>当前状态：已支付</h2>
               <Button style={{marginRight:"10px"}} size="large" type="primary" >确认订单</Button>
               <Button style={{marginRight:"10px"}} size="large">签收订单</Button>
               <Button style={{marginRight:"10px"}} size="large">退款</Button>
            </Col>
            <Col span={12} />
           

          </Row>

          
        </div>
        <div style={{paddingLeft:"40px"}}>
          <h4 style={{borderBottom: "2px solid #ddd", paddingBottom: "10px"}} >基础信息</h4>
          <Table columns={columns} pagination={false} style={{marginBottom:"30px"}}/>

          <h4 style={{borderBottom: "2px solid #ddd", paddingBottom: "10px"}} >交易双方</h4>
          <Table columns={business} dataSource={businessdata} pagination={false} style={{marginBottom:"30px"}}/>

          <h4 style={{borderBottom: "2px solid #ddd", paddingBottom: "10px"}} >配送信息</h4>
          <Table columns={distribution} pagination={false} style={{marginBottom:"30px"}}/>

          <h4 style={{borderBottom: "2px solid #ddd", paddingBottom: "10px"}} >其他信息</h4>
            <table style={{marginBottom:"30px", width:"100%"}}>
              <tbody className="ant-table-tbody">
                <tr><td style={{width:"100px"}}>下单方备注</td><td>请按时送达</td></tr>
                <tr><td>接单方备注</td><td>请按时送达</td></tr>
                <tr><td>贺卡信息</td><td>祝福卡  祝妈妈生日快乐！</td></tr>
                <tr><td>订单图片</td><td><PicturesWall2 uptxt="上传图片" /></td></tr>
              </tbody>
            </table>

          <h4 style={{marginBottom:"10px"}} >商品信息</h4>
          <Table columns={goods} pagination={false} style={{marginBottom:"10px"}}/>

        </div>
      </div>
    )
  }
}
