import React from 'react'
import { Table } from 'antd';
// import Modal from '../../../../components/Modal.js'
// import Form from './Form'

const columns = [{
  title: '属性编号', dataIndex: 'name', key: 'name', render: text => <a href="">{text}</a>, }, {
  title: '属性值', dataIndex: 'address', key: '7', }, {
  title: '排序', dataIndex: 'address', key: '7', }, {
  title: '所属属性', dataIndex: 'address', key: '7', }, {
  title: '所属分类', dataIndex: 'address', key: '8', }, {
  title: '更新时间', dataIndex: 'address', key: '9', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">编辑</a>
      <span className="ant-divider" />
      <a href="">删除</a>
    </span>
  ),
}];

export default class Users extends React.Component {
  render(){
    return (
    	<div>
        
        <Table columns={columns}  />

    	</div>
    )
  }
}
