import React from 'react'
import { Table } from 'antd';

const columns = [{
  title: '类型编码',
  dataIndex: 'item1',
  key: 'item1',
  render: text => <a href="">{text}</a>,
}, {
  title: '类型名称',
  dataIndex: 'item12',
  key: 'item12',
}, {
  title: '佣金比例',
  dataIndex: 'item13',
  key: 'item13',
}, {
  title: '商家数量',
  dataIndex: 'item14',
  key: 'item14',
}, {
  title: '更新时间',
  dataIndex: 'item15',
  key: 'item15',
}, {
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="">编辑</a>
      <span className="ant-divider" />
      <a href="">删除</a>
    </span>
  ),
}];



export default class extends React.Component {
  render(){
    return <Table columns={columns}  />
  }
}
