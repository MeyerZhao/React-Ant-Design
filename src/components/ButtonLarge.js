import React from 'react'
import { Button } from 'antd';

export default class extends React.Component {
  render(){
    return <Button {...this.props} size="large" />
  }
}
