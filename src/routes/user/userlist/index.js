import React from 'react'
import { Row, Col, Button } from 'antd';
import Table from './Table'
import Modal from '../../../components/Modal.js'
import Form from './Form'
import AdvSearch from './AdvSearch'


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
            <Modal title="创建用户"> <Form /> </Modal>
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

        <Table />

    	</div>
    )
  }
}

