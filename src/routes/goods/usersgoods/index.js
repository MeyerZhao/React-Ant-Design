import React from 'react'
import { Row, Col, Button, Table } from 'antd';
// import Modal from '../../../components/Modal.js'
// import Form from './Form'
import AdvSearch from './AdvSearch'
import { Select } from 'antd';
const table_img ={
  verticalAlign: "middle",
  marginRight: "8px"
}

const columns = [{
  title: '图片', dataIndex: 'item1', key: '1', render: (text, record) =><span><img width="30" style={table_img} src={text} alt=""/>{record.item2}</span>, }, {
  title: '商品名称', dataIndex: '2', key: '2', }, {
  title: 'SKU编号', dataIndex: '3', key: '3', }, {
  title: '所属品类', dataIndex: '4', key: '4', }, {
  title: '排序', dataIndex: '5', key: '5', }, {
  title: '当前状态', dataIndex: '6', key: '6', }, {
  title: '所属用户', dataIndex: '7', key: '7', }, {
  title: '更新时间', dataIndex: '8', key: '8', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">添加到商品SKU</a>
      <span className="ant-divider" />
      <a href="">编辑</a>
      <span className="ant-divider" />
      <a href="">删除</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  item1: 'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
  item2: 'John Brown name',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
  item7: 'John Brown',
  item8: 'John Brown',
  item9: 'John Brown',
}, {
  key: '2',
  item1: 'https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg',
  item2: 'John Brown name',
  item3: 'John Brown',
  item4: 'John Brown',
  item5: 'John Brown',
  item6: 'John Brown',
  item7: 'John Brown',
  item8: 'John Brown',
  item9: 'John Brown',
}];


const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',    // Column configuration not to be checked
  }),
};

export default class Users extends React.Component {
  state={
    show: false,
  }
  handleClick =(e) => {
   this.setState({show: !this.state.show});
  }
  render(){
    return (
    	<div>

        <Row style={{marginBottom:'10px'}}>
          <Col span={12}>
         {/*   <Modal title="用户商品"> <Form /> </Modal>*/}
          </Col>
         
          <Col span={12}>
            <Button size="large" style={{float: "right"}} onClick={this.handleClick}>高级搜索</Button>
          </Col>
        </Row>
        
        <Row style={{marginBottom:'10px'}}>
          <Col span={24}>
            {this.state.show ? <AdvSearch /> : null}
          </Col>
        </Row>

        <Row style={{marginBottom:'10px'}}>
          <Col span={24}>
            <div>
              <Select defaultValue="批量操作" style={{ width: 120, marginBottom:"10px" }} >
                <option value="批量操作">批量操作</option>
                <option value="批量上架">批量上架</option>
                <option value="批量下架">批量下架</option>
                <option value="批量删除">批量删除</option>
              </Select>
            </div>
            <Table columns={columns} rowSelection={rowSelection} dataSource={data} />
          </Col>
        </Row>
  
       
        

    	</div>
    )
  }
}

