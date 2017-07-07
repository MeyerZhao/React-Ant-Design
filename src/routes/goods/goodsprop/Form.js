import React from 'react'
import { Form, Input, Button,} from 'antd';
import { Select } from 'antd';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;
const Option = Select.Option;
const FormItem = Form.Item;

const plainOptions = ['单选', '复选'];
const plainOptions2 = ['必填', '选填'];

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
     value1: '单选',
     value2: '必填',
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
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('2次输入密码不一致!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }



  onChange1 = (e) => {
     console.log('radio1 checked', e.target.value);
     this.setState({
       value1: e.target.value,
     });
   }
   onChange2 = (e) => {
     console.log('radio1 checked', e.target.value);
     this.setState({
       value2: e.target.value,
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



    return (
      <Form onSubmit={this.handleSubmit}>

        <FormItem {...formItemLayout} label="所属品类">
          <Select placeholder="选择品类">
               <Option value="1">顶级品类</Option>
               <Option value="2">顶级品类1</Option>
               <Option value="3">顶级品类2</Option>
             </Select>
        </FormItem>

        <FormItem 
          {...formItemLayout} 
          label="属性名称" 
        >
          <Input />
        </FormItem>

        <FormItem 
          {...formItemLayout} 
          label="属性排序" 
          extra="默认值为100，数字越大越靠前"
        >
          <Input />
        </FormItem>

        <FormItem 
          {...formItemLayout} 
          label="展现方式" 
        >
          <RadioGroup options={plainOptions} onChange={this.onChange1} value={this.state.value1} />
        </FormItem>

        <FormItem 
          {...formItemLayout} 
          label="重要程度" 
        >
         <RadioGroup options={plainOptions2} onChange={this.onChange2} value={this.state.value2} />
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