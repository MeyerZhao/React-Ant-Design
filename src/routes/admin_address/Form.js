import React from 'react'
import { Form, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;



class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
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
   onChange3 = (e) => {
     console.log('radio1 checked', e.target.value);
     this.setState({
       value3: e.target.value,
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

        <FormItem {...formItemLayout} label="用户手机"> <Input /> </FormItem>

        <FormItem {...formItemLayout} label="真是姓名"> <Input /> </FormItem>

        <FormItem {...formItemLayout} label="所属部门"> <Input /> </FormItem>

        <FormItem {...formItemLayout} label="绑定IP"> <Input /> </FormItem>

        <FormItem {...formItemLayout} label="授权码"><Checkbox /> </FormItem>

      
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large" style={{marginRight:"10px"}}>完成</Button>
          <Button type="primary" htmlType="submit" size="large" >确认并添加权限</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);


export default WrappedRegistrationForm