import React from 'react'
import { Table, Row, Col, Input, Tabs, Button } from 'antd';
import AdvSearch from './AdvSearch'
import './index.css';
const TabPane = Tabs.TabPane;
const Search = Input.Search;


const columns = [{
  title: '入账时间', dataIndex: 'item1', key: 'item1', render: text => <a href={text}>{text}</a>, }, {
  title: '用户UID', dataIndex: 'item2', key: 'item2', }, {
  title: '商家名称', dataIndex: 'item3', key: 'item3', }, {
  title: '流水号', dataIndex: 'item4', key: 'item4', }, {
  title: '账务类型', dataIndex: 'item5', key: 'item5', }, {
  title: '交易对方', dataIndex: 'item6', key: 'item6', }, {
  title: '收支金额', dataIndex: 'item7', key: 'item7', }, {
  title: '账户余额', dataIndex: 'item8', key: 'item8', }, {
  title: '操作', dataIndex: 'item10', key: 'item10', }
];




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
  item10: ' 详情',
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
        
        <Tabs defaultActiveKey="1" >
          <TabPane tab="全部" key="1">
            <Row gutter={32}>
              <Col span={12}>
                <div className="income_bg">
                  <p style={{marginBottom:"20px"}}><span>收入</span> <span style={{opacity:.6, float:"right"}}><b>199</b>笔订单</span></p>
                  <span className="h3" style={{fontSize:"30px"}}><b>+397,318.70</b></span>
                </div>
              </Col>
              <Col span={12}>
                <div className="cost_bg ">
                  <p style={{marginBottom:"20px"}}><span>收入</span> <span style={{opacity:.6, float:"right"}}><b>199</b>笔订单</span></p>
                  <span className="h3" style={{fontSize:"30px"}}><b>+397,318.70</b></span>
                </div>
              </Col>
            </Row>
            <Table columns={columns} dataSource={data}/>
          </TabPane>
          <TabPane tab="收入" key="2"><Table columns={columns} dataSource={data}/></TabPane>
          <TabPane tab="支出" key="3"><Table columns={columns} dataSource={data}/></TabPane>
        </Tabs>
        
      </div>
    )
  }
}
