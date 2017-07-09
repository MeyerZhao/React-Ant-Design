import React from 'react'
import { Table} from 'antd';

const columns = [{
  title: '图片', dataIndex: 'name', key: 'name', render: text => <a href="">{text}</a>, }, {
  title: '商品名称', dataIndex: 'address', key: '7', }, {
  title: 'SKU编号', dataIndex: 'address', key: '8', }, {
  title: '所属品类', dataIndex: 'address', key: '9', }, {
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
    return <Table columns={columns}  />
  }
}
