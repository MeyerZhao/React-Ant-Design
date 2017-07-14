import React from 'react'
import { Table, Row, Col, Button, Input  } from 'antd';
import { Icon } from 'antd';
import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const ButtonGroup = Button.Group;
const Search = Input.Search;

const columns = [{
  title: '日期', dataIndex: 'name', key: 'name', render: text => <a href="">{text}</a>, }, {
  title: '收入(元)', dataIndex: 'address', key: '7', }, {
  title: '支出(元)', dataIndex: 'address', key: '7', }, {
  title: '余额(元)', dataIndex: 'address', key: '7', }, {
  title: '操作', key: 'action', render: (text, record) => (
    <span>
      <a href="">编辑</a>
    </span>
  ),
}];

export default class Users extends React.Component {
  render(){
    return (
    	<div>
        <Row style={{marginBottom:'10px'}}>
          <Col span={12}>
            <RadioGroup defaultValue="a" size="large" style={{marginRight:"10px"}}>
              <RadioButton value="a">日汇总</RadioButton>
              <RadioButton value="b">月汇总</RadioButton>
            </RadioGroup>

            <ButtonGroup  style={{marginRight:"10px"}}>
                 <Button type="primary">
                   <Icon type="left" />
                 </Button>
                 <Button type="primary">
                   <Icon type="right" />
                 </Button>
            </ButtonGroup>
            <b style={{fontSize:"18px",fontWeight:"bold"}}>
              2017年5月
            </b>
          </Col>
          <Col span={12} >
            <Button size="large" style={{float: "right", }}>打印</Button>
            <Button size="large" style={{float: "right", marginRight:"10px"}}>下载</Button>
            <Search 
               size="large"
               placeholder="输入关键字"
               style={{ width: 200, float: "right",  marginRight:"10px" }}
             />
          </Col>
        </Row>

        <Table columns={columns} />

    	</div>
    )
  }
}
