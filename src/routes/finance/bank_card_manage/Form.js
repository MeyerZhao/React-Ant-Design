import React from 'react'
import { Form, Input, Button, Cascader, Select} from 'antd';
import city from '../../../utils/city.js'
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

        <FormItem {...formItemLayout} label="开户人"> <Input /> </FormItem>

        <FormItem {...formItemLayout} label="所属银行">
          <Select defaultValue="银行" >
              <Option value="银行">银行</Option>
              <Option value="银行1">银行1</Option>
              <Option value="银行2">银行2</Option>
              <Option value="银行3">银行3</Option>
            </Select>
        </FormItem>

        <FormItem {...formItemLayout} label="所在地区">
          <Cascader
             size="large"
             style={{ width: '100%' }}
             options={city}
             placeholder="请选择地址！"
             changeOnSelect
           />
        </FormItem>

        <FormItem {...formItemLayout} label="开户行"> <Input /> </FormItem>

        <FormItem {...formItemLayout} label="银行卡号"> <Input /> </FormItem>
      
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">确认提交</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);
export default WrappedRegistrationForm