import React from 'react'
import { Form, Input, Button,} from 'antd';
import { Select } from 'antd';

const Option = Select.Option;
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
          <Select placeholder="所属品类">
               <Option value="1">切花</Option>
               <Option value="2">切花1</Option>
               <Option value="3">切花2</Option>
             </Select>
        </FormItem>

        <FormItem {...formItemLayout} label="所属属性">
          <Select placeholder="所属属性">
               <Option value="1">颜色1</Option>
               <Option value="2">颜色2</Option>
               <Option value="3">颜色3</Option>
             </Select>
        </FormItem>

        <FormItem 
          {...formItemLayout} 
          label="属性值" 
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




      
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">确认提交</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);


export default WrappedRegistrationForm