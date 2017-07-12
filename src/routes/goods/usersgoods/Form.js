import React from 'react'
import { Form, Input, Select, Button, Cascader } from 'antd';
import { DatePicker,Row, Col } from 'antd';
import city from '../../../utils/city.js'
import PicturesWall from '../../../components/PicturesWall.jsx'
const InputGroup = Input.Group;

const FormItem = Form.Item;
const Option = Select.Option;

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

  render() {
    const { getFieldDecorator } = this.props.form;

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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 60 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    function handleChange(value) {
      console.log(`selected ${value}`);
    }


    return (
      <Form onSubmit={this.handleSubmit}>

        <FormItem
          {...formItemLayout}
          label="商家名称"
          hasFeedback
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入名称!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="注册手机"
          hasFeedback
        >
          {getFieldDecorator('num', {
            rules: [{ required: true, message: '请输入商家UID!',}],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="商家类型"
          hasFeedback
        >
          {getFieldDecorator('type', {
            rules: [{ required: true, message: '请选择商家类型!', whitespace: true }],
          })(
            <Select defaultValue="1"  onChange={handleChange}>
              <Option value="1">实体花店</Option>
              <Option value="2">实体花店2</Option>
              <Option value="3">实体花店3</Option>
            </Select>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="主营类目"
          hasFeedback
        >
          {getFieldDecorator('maintype', {
            rules: [{ required: true, message: '请选择商家类型!', whitespace: true }],
          })(
            <Select defaultValue="1"  onChange={handleChange}>
              <Option value="1">切花</Option>
              <Option value="2">切叶</Option>
              <Option value="3">绿植</Option>
              <Option value="4">盆栽</Option>
            </Select>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="有效日期"
        > 
          <DatePicker
            showTime
            style={{ width: '100%' }} 
            format="YYYY-MM-DD HH:mm:ss"
            placeholder="选择有效日期"
          />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="联系电话"
        >{getFieldDecorator('uid', {
            rules: [{ required: true, message: '请输入联系人电话!', }],
          })(
            <InputGroup size="large">
              <Row gutter={8}>
                <Col span={6}>
                  <Input placeholder="联系人" />
                </Col>
                <Col span={18}>
                  <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Col>
              </Row>
            </InputGroup>
          )}
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="所在地"
          hasFeedback
        >         
          {getFieldDecorator('address', {
            rules: [{ required: true, message: '请选择地址！!' }],
          })(
           <Cascader
             size="large"
             style={{ width: '100%' }}
             options={city}
             placeholder="请选择地址！"
             changeOnSelect
           />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="详细地址"
          hasFeedback
        >         
          {getFieldDecorator('fullAddress', {
            rules: [{ required: true, message: '请输入详细地址！!' }],
          })(
           <Input type="textarea" rows={4} />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="商家图标"
        >
           <PicturesWall clssName="custom" uptxt="建议尺寸800*800" />
        
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="商家描述"
          hasFeedback
        >         
          {getFieldDecorator('describe', {
            rules: [{ required: true, message: '请输入商家描述！!' }],
          })(
           <Input type="textarea" rows={4} />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="主体信息"
          hasFeedback
        >         
          {getFieldDecorator('mainmsg', {
            rules: [{ required: true, message: '请输入主体信息！!' }],
          })(
            <Input placeholder="企业名称"/>
         
          )}
        </FormItem> 
        <FormItem
          {...formItemLayout}
          label="信用代码"
        >         
          <Input placeholder="统一社会信用代码"/>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="法人姓名"
        >         
          <Input placeholder="法人姓名"/>
        </FormItem>
          <FormItem
          {...formItemLayout}
          label="身份证号"
        >         
          <Input placeholder="身份证号"/>
        </FormItem>

      
        <FormItem
          {...formItemLayout}
          label="证件照片"
        >         
         <PicturesWall uptxt="身份证正面" />
         <PicturesWall uptxt="身份证反面" />
         <PicturesWall uptxt="营业执照" />
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