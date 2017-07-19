import React from 'react'
import { Form, Input, Button, Radio, Checkbox } from 'antd'
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;


const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;

const options = [
  { label: '提现次数不限', value: '提现次数不限' },
  { label: '充值限制', value: '充值限制' },
  { label: '提现限制', value: '提现限制', },
  { label: '交易限制', value: '交易限制', },
];



const RangePicker2=(
  <RangePicker
        showTime={{ format: 'HH:mm' }}
        format="YYYY-MM-DD HH:mm"

      />)



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

        <FormItem {...formItemLayout} label="用户UID"> <Input /> </FormItem>
       

        <FormItem 
          {...formItemLayout} 
          label="调整内容" 
        >
          <CheckboxGroup options={options} defaultValue={['交易限制']}  />
        </FormItem>

      

         <FormItem
          {...formItemLayout}
          label="有效期限"
        >
          <RadioGroup onChange={this.onChange2} value={this.state.value}>
              <Radio   value={1}>长期</Radio>
              <Radio   value={2}>自定义
              </Radio>
            </RadioGroup>
          {this.state.value === 2 ? RangePicker2 : null}

        </FormItem>

       <FormItem {...formItemLayout} label="调整原因">  <Input type="textarea" rows={4} /> </FormItem>
      
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">确认提交</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);


export default WrappedRegistrationForm