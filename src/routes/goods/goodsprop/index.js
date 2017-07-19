import React from 'react'
import { Row, Col, Button } from 'antd';
import Table from './Table'
import Modal from '../../../components/Modal.js'
import Form from './Form'
import Form2 from './Form2'
import { Link } from 'react-router';


export default class Users extends React.Component {
  render(){
    return (
    	<div>

        <Row style={{marginBottom:'10px'}}>
          <Col span={12}>
            <Modal title="添加属性"> <Form /> </Modal>
            <Modal title="添加属性值"> <Form2 /> </Modal>
             <Button size="large" type="primary" ><Link to="/goods/goodsprop/goodspropvalue">属性值列表 </Link></Button>
          </Col>
        </Row>


        <Table />


    	</div>
    )
  }
}

