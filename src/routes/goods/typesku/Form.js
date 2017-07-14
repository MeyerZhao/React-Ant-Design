import React from 'react'
import { Form, Input, Button, InputNumber} from 'antd';
import { Select } from 'antd';
import { Radio } from 'antd';
import { Row, Col } from 'antd';
import PicturesWall2 from '../../../components/PicturesWall2.jsx'
const RadioGroup = Radio.Group;
const Option = Select.Option;
const FormItem = Form.Item;

const plainOptions = ['红色', '白色', '绿色'];
const plainOptions2 = ['A级', 'B级', 'C级'];
const plainOptions3 = ['昆明', '广西', '本地'];

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
     value1: '红色',
     value2: 'A级',
     value3: '昆明',
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

        <FormItem 
          {...formItemLayout} 
          label="品种名称" 
        >
          <Input />
        </FormItem>

        <FormItem 
          {...formItemLayout} 
          label="品种别名" 
        >
          <Input />
        </FormItem>

        <FormItem 
          {...formItemLayout} 
          label="单位数量" 
        >
          <InputNumber min={1} max={200} defaultValue={3} />
          <Select defaultValue=".com" style={{ width: 70 }}>
            <Option value=".com">枝</Option>
          </Select> 
         
        </FormItem>

        <FormItem {...formItemLayout} label="所属品类">
          <Select placeholder="所属品类">
               <Option value="1">顶级品类</Option>
               <Option value="2">顶级品类1</Option>
               <Option value="3">顶级品类2</Option>
             </Select>
        </FormItem>



        <FormItem 
          {...formItemLayout} 
          label="图片" 
        >
          <PicturesWall2 uptxt="上传图片" />
        </FormItem>




        <FormItem 
          {...formItemLayout} 
          label="颜色" 
        >
          <RadioGroup options={plainOptions} onChange={this.onChange1} value={this.state.value1} />
        </FormItem>

        <FormItem 
          {...formItemLayout} 
          label="等级" 
        >
         <RadioGroup options={plainOptions2} onChange={this.onChange2} value={this.state.value2} />
        </FormItem>

        <FormItem 
          {...formItemLayout} 
          label="产地" 
        >
         <RadioGroup options={plainOptions3} onChange={this.onChange3} value={this.state.value3} />
        </FormItem>


        <FormItem 
          {...formItemLayout} 
          label="SKU编号" 
        >
          <Row gutter={8}>
            <Col span={16}>           
                <Input />              
            </Col>
            <Col span={8}>
              <Button style={{width: "100%"}}>生成SKU</Button>
            </Col>
          </Row>
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