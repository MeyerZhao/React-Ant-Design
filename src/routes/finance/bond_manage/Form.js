import React from 'react'
import { Form, Input, Button, InputNumber, Radio } from 'antd';

const RadioGroup = Radio.Group;
const FormItem = Form.Item;



class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    value: 1,
  };
  onChange2 = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
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
    const ReceiveUid = (
  <FormItem {...formItemLayout} label="接收UID"> 
     <Input /> 
  </FormItem>
  )

    return (
      <Form onSubmit={this.handleSubmit}>
      

        <FormItem >
        <div style={{textAlign:"center"}}>
        <RadioGroup onChange={this.onChange2} value={this.state.value}>
            <Radio value={1}>减少</Radio>
            <Radio value={2}>增加 </Radio>
          </RadioGroup>
        </div>
        </FormItem>

        <FormItem {...formItemLayout} label="用户UID"> <Input /> </FormItem>

        <FormItem {...formItemLayout} label="处理金额"> 
        <InputNumber 
             style={{width:"100%"}}
             defaultValue={1000}
             formatter={value => `￥ ${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
             parser={value => value.replace(/\$\s?|(,*)/g, '')}
           />
        </FormItem>

        <FormItem {...formItemLayout} label="处理说明"> 
          <Input type="textarea" rows={4} />
        </FormItem>

           {this.state.value === 1 ? ReceiveUid: null}

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">确认提交</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);


export default WrappedRegistrationForm