import React from 'react'
import { Table} from 'antd';

const columns = [{
  title: '品类名称', dataIndex: 'name', key: 'name', render: text => <a href="">{text}</a>, }, {
  title: '品类属性', dataIndex: 'address', key: '7', }, {
  title: '品类排序', dataIndex: 'address', key: '8', }, {
  title: '品种SKU数量', dataIndex: 'address', key: '9', }, {
  title: '更新时间', dataIndex: 'address', key: 'address', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">编辑</a>
      <span className="ant-divider" />
      <a href="">删除</a>
    </span>
  ),
}];




export default class extends React.Component {
  render(){
    return <Table columns={columns} />
  }
}
