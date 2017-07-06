import React from 'react'
import { Row, Col, Button } from 'antd';
import Table from './Table'
import Modal from './Modal'
import Form from './Form'
import AdvSearch from './AdvSearch'


export default class Users extends React.Component {
  render(){
    return (
    	<div>

        <Row style={{marginBottom:'10px'}}>
          <Col span={12}>
            <Modal title="创建用户"> <Form /> </Modal>
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

        <Table />

    	</div>
    )
  }
}

