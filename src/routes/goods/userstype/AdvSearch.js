import React from 'react'
import { Form, Row, Col, Input, Button, Select } from 'antd'
import { Radio } from 'antd';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;

const Option = Select.Option;

const Search = Input.Search;

const plainOptions = ['红色', '白色', '绿色'];
const plainOptions2 = ['A级', 'B级', 'C级'];
const plainOptions3 = ['昆明', '广西', '本地'];

const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
}

class AdvancedSearchForm extends React.Component {
  state = {
    expand: false,
    value: 1,
    value1: '红色',
    value2: 'A级',
    value3: '昆明',
  };
  onChange = (e) => {
     console.log('radio checked', e.target.value);
     this.setState({
       value: e.target.value,
     });
   }
  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }
  handleReset = () => {
    this.props.form.resetFields();
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
          labelCol: { span: 4},
          wrapperCol: { span: 17 },
        };
    return (
      <Form
        layout="inline"
        className="advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={16}>
          <Col {...ColProps} xl={6} md={9} >
            <Search 
                size="large"
                placeholder="输入关键字"
                onSearch={value => console.log(value)}
              />
          </Col>

          <Col {...ColProps} xl={6} md={8} >
              <Select size="large" placeholder="所属品类" >
                <Option value="1">商家类型1</Option>
                <Option value="2">商家类型2</Option>
                <Option value="3">商家类型3</Option>
              </Select>
          </Col>

         
        </Row>

        <Row gutter={16}>
          <Col {...ColProps} xl={6} md={9} >
              <FormItem style={{width:"100%", background:"#fff", borderRadius: "4px" }}
                {...formItemLayout}
                label="属性"
              >
                <RadioGroup options={plainOptions} onChange={this.onChange1} value={this.state.value1} />
                <RadioGroup options={plainOptions2} onChange={this.onChange2} value={this.state.value2} />
                <RadioGroup options={plainOptions3} onChange={this.onChange3} value={this.state.value3} />
              </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span={24} style={{ textAlign: 'left' }}>
            <Button type="primary" htmlType="submit" size="large">搜索</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);

export default WrappedAdvancedSearchForm
