import React from 'react'
import { Table, Icon } from 'antd';

const columns = [{
  title: '商家UID',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="">{text}</a>,
}, {
  title: '商家名称',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '商家类型',
  dataIndex: 'address',
  key: '1',
}, {
  title: '主营类目',
  dataIndex: 'address',
  key: '2',
}, {
  title: '当前状态',
  dataIndex: 'address',
  key: '3',
}, {
  title: '坐在地区',
  dataIndex: 'address',
  key: '4',
}, {
  title: '开店时间',
  dataIndex: 'address',
  key: '5',
}, {
  title: '有效期限',
  dataIndex: 'address',
  key: '6',
}, {
  title: '主题信息',
  dataIndex: 'address',
  key: '7',
}, {
  title: '用户数量',
  dataIndex: 'address',
  key: '8',
}, {
  title: '商品数量',
  dataIndex: 'address',
  key: '9',
}, {
  title: '成交金额',
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
  address: 'Num',
}, {
  key: '2',
  name: '赵虎',
  age: 42,
  address: 'Num',
}, {
  key: '3',
  name: '李四',
  age: 32,
  address: 'Num',
}];

export default class extends React.Component {
  render(){
    return <Table columns={columns} dataSource={data} />
  }
}
