import React from 'react'
import { Table, Icon } from 'antd';

const columns = [{
  title: '名字',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="">{text}</a>,
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '地址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="">删除</a>
      <span className="ant-divider" />
      <a href="" className="ant-dropdown-link">
        更多操作 <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: '张龙',
  age: 32,
  address: '地址',
}, {
  key: '2',
  name: '赵虎',
  age: 42,
  address: '地址',
}, {
  key: '3',
  name: '李四',
  age: 32,
  address: '地址',
}];

export default class extends React.Component {
  render(){
    return <Table columns={columns} dataSource={data} />
  }
}
