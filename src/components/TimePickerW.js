import React from 'react'
import { TimePicker, Button } from 'antd';


export default class extends React.Component {
  state = { open: false };

  handleOpenChange = (open) => {
    this.setState({ open });
  }

  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <TimePicker
        open={this.state.open}
        onOpenChange={this.handleOpenChange}
        addon={() => (
          <Button size="small" type="primary" onClick={this.handleClose}>
            确定
          </Button> 
        )} />
    );
  }
}