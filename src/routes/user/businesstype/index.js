import React from 'react'
import { Row, Col, Button } from 'antd';
import Table from './Table'
import Modal from '../../../components/Modal.js'
import Form from './Form'


export default class Users extends React.Component {
  render(){
    return (
    	<div>

        <Row style={{marginBottom:'10px'}}>
          <Col span={12}>
            <Modal title="添加商家类型"> <Form /> </Modal>
          </Col>
         
          <Col span={12}>
            <Button size="large" style={{float: "right"}}>高级搜索</Button>
          </Col>
        </Row>


        <Table />

    	</div>
    )
  }
}

