import React from 'react'
import { Form, Input, Button, InputNumber } from 'antd';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };


class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    value: 1,

  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  onChange2 = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>

        <FormItem 
          {...formItemLayout} 
          label="用户UID" 
        >
          <Input disabled defaultValue="用户UID" />
        </FormItem>

        <FormItem 
          {...formItemLayout} 
          label="注册手机" 
        >
          <Input disabled defaultValue="注册手机" />
        </FormItem>

        <FormItem 
          {...formItemLayout} 
          label="昵称/商户名称" 
        >
          <Input disabled defaultValue="昵称/商户名称" />
        </FormItem>

        <FormItem 
          {...formItemLayout} 
          label="充值金额" 
        >
          <InputNumber min={1} max={10} defaultValue={200.00} disabled />
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="充值说明"
        >
           <Input disabled type="textarea" rows={4} defaultValue="充值说明充值说明充值说明充值说明" />

        </FormItem>

         <FormItem
          {...formItemLayout}
          label="复核说明"
        >
          <RadioGroup onChange={this.onChange2} value={this.state.value}>
              <Radio style={radioStyle}  value={1}>交易流水号错误</Radio>
              <Radio style={{display: 'block'}}  value={2}>其他
              </Radio>
            </RadioGroup>
          {this.state.value === 2 ? <Input style={{display: 'block'}} type="textarea" rows={4} /> : null}

        </FormItem>

      
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large" style={{marginRight:"10px"}}>审核通过</Button>
          <Button type="danger" ghost htmlType="submit" size="large">拒绝通过</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);


export default WrappedRegistrationForm