import React from 'react'
import { Row, Col } from 'antd';
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
        </Row>


        <Table />

    	</div>
    )
  }
}

