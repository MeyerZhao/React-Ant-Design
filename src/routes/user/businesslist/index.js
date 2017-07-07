import React from 'react'
import { Row, Col, Button, Tabs } from 'antd';
import Table from './Table'
import Modal from '../../../components/Modal.js'
import Form from './Form'
import AdvSearch from './AdvSearch'

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export default class Users extends React.Component {
  render(){
    return (
    	<div>

        <Row style={{marginBottom:'10px'}}>
          <Col span={12}>
            <Modal title="添加商家"> <Form /> </Modal>
          </Col>
         
          <Col span={12}>
            <Button size="large" style={{float: "right"}}>高级搜索</Button>
          </Col>
        </Row>
        
        <Row style={{marginBottom:'10px'}}>
          <Col span={24}>
            <AdvSearch></AdvSearch>
          </Col>
        </Row>
        
        <Tabs defaultActiveKey="1" onChange={callback}>
           <TabPane tab="全部" key="1"> <Table /> </TabPane>
           <TabPane tab="待审核(1)" key="2"> <Table /> </TabPane>
           <TabPane tab="营业" key="3"> <Table /> </TabPane>
           <TabPane tab="歇业(3)" key="4"> <Table /> </TabPane>
         </Tabs>

    	</div>
    )
  }
}

