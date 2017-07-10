import React from 'react'


export default class Users extends React.Component {
  render(){
    return (
    	<div>
    	  <h2>订单详情:{this.props.params.orderid}</h2>
    	</div>
    )
  }
}
