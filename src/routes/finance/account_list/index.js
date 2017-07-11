import React from 'react'
import { Table, Row, Col } from 'antd';
import { Input } from 'antd';
const Search = Input.Search;


const columns = [{
  title: '用户UID', dataIndex: 'item1', key: 'item1', }, {
  title: '注册手机', dataIndex: 'item2', key: 'item2', }, {
  title: '用户类型', dataIndex: 'item3', key: 'item3', }, {
  title: '商家名称', dataIndex: 'item4', key: 'item4', }, {
  title: '注册时间', dataIndex: 'item5', key: 'item5', }, {
  title: '可用余额', dataIndex: 'item6', key: 'item6', }, {
  title: '冻结金额', dataIndex: 'item7', key: 'item7', }, {
  title: '保证金额', dataIndex: 'item8', key: 'item8', }, {
  title: '白条额度', dataIndex: 'item9', key: 'item9', }, {
  title: '白条余额', dataIndex: 'item10', key: 'item10', }, {
  title: '操作', dataIndex: 'action', key: 'action', render: (text, record) => (
    <span>
      <a href={text.financialdetails}>财务明细</a>
      <span className="ant-divider" />
      <a href={text.manualrecharge}>人工充值</a>
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
  item7: 'John Brown',
  item8: 'John Brown',
  item9: 'John Brown',
  item10: 'John Brown',
  action: {
    financialdetails:'/finance/account_list/financialdetails/456798',
    manualrecharge:'/finance/account_list/manualrecharge/687456'
  }
}];

export default class Users extends React.Component {
  render(){
    return (
      <div>

        <Row style={{marginBottom:'10px'}}>
          <Col span={12}>
            <Search
              placeholder="输入搜索关键字 测试修改"
              style={{ width: 200 }}
              size="large"
            />
          </Col>
        </Row>
        <Table columns={columns} dataSource={data}/>
      </div>
    )
  }
}
