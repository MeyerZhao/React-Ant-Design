import React from 'react'
import { Table, Row, Col } from 'antd';
import { Input } from 'antd';
import Modal from '../../components/Modal.js'
import Form from './Form'
const Search = Input.Search;

const columns = [{
  title: '用户手机', dataIndex: 'item1', key: 'item1', }, {
  title: '真是姓名', dataIndex: 'item2', key: 'item2', }, {
  title: '所属部门', dataIndex: 'item3', key: 'item3', }, {
  title: '授权码', dataIndex: 'item4', key: 'item4', }, {
  title: '绑定IP', dataIndex: 'item5', key: 'item5', }, {
  title: '最近登录时间', dataIndex: 'item6', key: 'item6', }, {
  title: '开通时间', dataIndex: 'item7', key: 'item7', }, {
  title: '状态', dataIndex: 'item8', key: 'item8', }, {
  title: '操作',dataIndex: 'action', key: 'action', render: (text, record) => (
    <span>
      <a href={text}>编辑</a>
      <span className="ant-divider" />
      <a href="">编辑</a>
      <span className="ant-divider" />
      <a href="">权限</a>
      <span className="ant-divider" />
      <a href="">日志</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  item1: '15648945648',
  item2: '张三',
  item3: '市场营销',
  item4: '授权码',
  item5: '绑定IP',
  item6: '最近登录时间',
  item7: '开通时间',
  item8: '正常',
  action: '/admin_address/517052012334556',
}];

export default class Users extends React.Component {
  render(){
    return (
      <div>

        <Row style={{marginBottom:'10px'}}>
          <Col span={12}>
            <Modal title="添加管理员"> <Form /> </Modal>
          </Col>
          <Col span={12}>
              <Search
                size="large" 
                 placeholder="输入搜索内容"
                 style={{ width: 200, float:"right" }}
                 onSearch={value => console.log(value)}
               />
          </Col>
        </Row>
        <Table columns={columns} dataSource={data}/>
      </div>
    )
  }
}
