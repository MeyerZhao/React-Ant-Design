import React from 'react'
import { Form, Input, Button,} from 'antd';
import { Select } from 'antd';
import { Radio } from 'antd';


const RadioGroup = Radio.Group;
const Option = Select.Option;
const FormItem = Form.Item;

const plainOptions = ['文字', '语音'];



class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
     value1: '文字',

  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
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



  onChange1 = (e) => {
     console.log('radio1 checked', e.target.value);
     this.setState({
       value1: e.target.value,
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
    const prefixSelector =(
      <Select defaultValue="86" style={{ width: 60 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
      )




    return (
      <Form onSubmit={this.handleSubmit}>

        <FormItem {...formItemLayout} label="商户UID">
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </FormItem>
         <FormItem {...formItemLayout} label="短信类型">
           <RadioGroup options={plainOptions} onChange={this.onChange1} value={this.state.value1} />
        </FormItem>
         <FormItem {...formItemLayout} label="短信内容">
          <Input  type="textarea" rows={4} defaultValue="短信内容短信内容短信内容" />
        </FormItem>
        




      
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">确认提交</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);


export default WrappedRegistrationForm