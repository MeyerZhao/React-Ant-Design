import React from 'react'
import { Table } from 'antd';

const columns = [{
  title: '类型编码',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="">{text}</a>,
}, {
  title: '类型名称',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '商家数量',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '更新时间',
  dataIndex: 'address',
  key: 'address',
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
