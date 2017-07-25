import React from 'react'
import { Table, Row, Col, Button, Input, Tabs } from 'antd'
import { Popover, Icon } from 'antd';
import ModalList from '../../../components/ModalList'
import AdvSearch from './AdvSearch'
import Form from './Form'

const Search = Input.Search;
const TabPane = Tabs.TabPane;



const columns = [{
  title: '所属银行', dataIndex: 'item1', key: '1', render: text => <a href="">{text}</a>, }, {
  title: '提现单号', dataIndex: 'item2', key: '2', }, {
  title: '用户UID', dataIndex: 'item3', key: '3', }, {
  title: '用户昵称/商家名称', dataIndex: 'item4', key: '4', }, {
  title: '申请金额', dataIndex: 'item5', key: '5',}, {
  title: '提现状态', dataIndex: 'item6', key: '6', 
  render:(text,record) =>{
    const reason_content = (
      <div>
        <p>{record.reason}</p>
        <p>Content</p>
      </div>
    );
    return(
    <div>
    <span style={{marginRight:'5px'}}>{text}</span>
    <Popover content={reason_content} title="修改人 更新时间" trigger="hover" placement="right">
      <Icon type="question-circle-o" />
    </Popover>
    </div>
    )}

  }, {
  title: '申请时间', dataIndex: 'item7', key: '7', }, {
  title: '处理时间', dataIndex: 'item8', key: '8', }, {
  title: '支付渠道流水号', dataIndex: 'item9', key: '9', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">提交复核</a>
      <span className="ant-divider" />
      <ModalList title="退回"> <Form /> </ModalList>
    </span>
  ),
}];

const data = [{
  key: '1',
  item1: '1513213',
  item2: 'John Brown',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
  reason: '原因描述巴拉巴',
  description: '开户人姓名：张依依      账号：1122223344444      开户行：浙江 杭州 德甲支行' 
}, {
  key: '2',
  item1: '1513213',
  item2: 'John Brown',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
  description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' 
}];

const columns1= [{
  title: '所属银行', dataIndex: 'item1', key: '1', render: text => <a href="">{text}</a>, }, {
  title: '提现单号', dataIndex: 'item2', key: '2', }, {
  title: '用户UID', dataIndex: 'item3', key: '3', }, {
  title: '用户昵称/商家名称', dataIndex: 'item4', key: '4', }, {
  title: '申请金额', dataIndex: 'item5', key: '5', }, {
  title: '提现状态', dataIndex: 'item6', key: '6', }, {
  title: '申请时间', dataIndex: 'item7', key: '7', }, {
  title: '处理时间', dataIndex: 'item8', key: '8', }, {
  title: '支付渠道流水号', dataIndex: 'item9', key: '9', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">确认完成</a>
      <span className="ant-divider" />
      <ModalList title="退回"> <Form /> </ModalList>
    </span>
  ),
}];

const columns2 = [{
  title: '所属银行', dataIndex: 'item1', key: '1', render: text => <a href="">{text}</a>, }, {
  title: '提现单号', dataIndex: 'item2', key: '2', }, {
  title: '用户UID', dataIndex: 'item3', key: '3', }, {
  title: '用户昵称/商家名称', dataIndex: 'item4', key: '4', }, {
  title: '申请金额', dataIndex: 'item5', key: '5', }, {
  title: '提现状态', dataIndex: 'item6', key: '6', }, {
  title: '申请时间', dataIndex: 'item7', key: '7', }, {
  title: '处理时间', dataIndex: 'item8', key: '8', }, {
  title: '支付渠道流水号', dataIndex: 'item9', key: '9', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
    <ModalList title="提交失败"> <Form /> </ModalList>
    </span>
  ),
}];

const columns3 = [{
  title: '所属银行', dataIndex: 'item1', key: '1', render: text => <a href="">{text}</a>, }, {
  title: '提现单号', dataIndex: 'item2', key: '2', }, {
  title: '用户UID', dataIndex: 'item3', key: '3', }, {
  title: '用户昵称/商家名称', dataIndex: 'item4', key: '4', }, {
  title: '申请金额', dataIndex: 'item5', key: '5', }, {
  title: '提现状态', dataIndex: 'item6', key: '6', }, {
  title: '申请时间', dataIndex: 'item7', key: '7', }, {
  title: '处理时间', dataIndex: 'item8', key: '8', }, {
  title: '支付渠道流水号', dataIndex: 'item9', key: '9', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">备注</a>
    </span>
  ),
}];

const columns4 = [{
  title: '所属银行', dataIndex: 'item1', key: '1', render: text => <a href="">{text}</a>, }, {
  title: '提现单号', dataIndex: 'item2', key: '2', }, {
  title: '用户UID', dataIndex: 'item3', key: '3', }, {
  title: '用户昵称/商家名称', dataIndex: 'item4', key: '4', }, {
  title: '申请金额', dataIndex: 'item5', key: '5', }, {
  title: '提现状态', dataIndex: 'item6', key: '6', }, {
  title: '申请时间', dataIndex: 'item7', key: '7', }, {
  title: '处理时间', dataIndex: 'item8', key: '8', }, {
  title: '支付渠道流水号', dataIndex: 'item9', key: '9', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">备注</a>
    </span>
  ),
}];

// rowSelection object indicates the need for row selection


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
          <Col span={12} offset={12}>
            <Button size="large" style={{float: "right"}} onClick={this.handleClick}>高级搜索</Button>
            <Search 
               size="large"
               placeholder="输入关键字"
               style={{ width: 200, float: "right",  marginRight:"10px" }}
             />
          </Col>
        </Row>

        <Row style={{marginBottom:'10px'}}>
          <Col span={24}>
            {this.state.show ? <AdvSearch /> : null}
          </Col>
        </Row>

        <Tabs defaultActiveKey="1" >
           <TabPane tab="提现申请" key="1"> 
              <Table 
              columns={columns}  
              dataSource={data}
              expandedRowRender={record => <p style={{textAlign:"right", color:"#ff6600"}}>{record.description}</p>}
              />
            </TabPane>
           <TabPane tab="提现复核" key="2"> <Table expandedRowRender={record => <p style={{textAlign:"right", color:"#ff6600"}}>{record.description}</p>} columns={columns1} dataSource={data} /> </TabPane>
           <TabPane tab="提现成功" key="3"> <Table expandedRowRender={record => <p style={{textAlign:"right", color:"#ff6600"}}>{record.description}</p>} columns={columns2} dataSource={data} /> </TabPane>
           <TabPane tab="提现退回" key="4"> <Table expandedRowRender={record => <p style={{textAlign:"right", color:"#ff6600"}}>{record.description}</p>} columns={columns3} dataSource={data} /> </TabPane>
           <TabPane tab="提现失败" key="5"> <Table expandedRowRender={record => <p style={{textAlign:"right", color:"#ff6600"}}>{record.description}</p>} columns={columns4} dataSource={data} /> </TabPane>
         </Tabs>


    	</div>
    )
  }
}
