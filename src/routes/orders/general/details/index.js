import React from 'react'
import { Table, Row, Col } from 'antd';


export default class Users extends React.Component {
  render(){
    return (
    	<div>
    	  
    	  <Row gutter={8}>
    	    <Col span={12} ><h2>订单详情:{this.props.params.orderid}</h2> </Col>
    	    <Col span={12} />
    	  </Row>
    	</div>
    )
  }
}
