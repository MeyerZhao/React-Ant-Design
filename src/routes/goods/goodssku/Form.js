import React from 'react'
import { Form, Input, Button,} from 'antd';
import { Select } from 'antd';
import { Row, Col } from 'antd';
import PicturesWall from '../../../components/PicturesWall.jsx'
import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

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


    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
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
          label="商品名称" 
        >
          <Input />
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

        <FormItem 
          {...formItemLayout} 
          label="渠道编号" 
        > 
          <Input />
        </FormItem>

        <FormItem 
          {...formItemLayout} 
          label="图片" 
        >
          <Row gutter={8}>
            <Col span={8}>           
              <PicturesWall style={{float:'left'}} clssName="custom" uptxt="顶部平铺" />
            </Col>
            <Col span={8}>
              <PicturesWall style={{float:'left'}} clssName="custom" uptxt="侧面直立" />
            </Col>
            <Col span={8}>
              <PicturesWall style={{float:'left'}} clssName="custom" uptxt="细节图" />
            </Col>
          </Row>
        </FormItem>

        <FormItem 
          {...formItemLayout} 
          label="商品明细" 
        >
          <Table columns={columns} dataSource={data} />
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