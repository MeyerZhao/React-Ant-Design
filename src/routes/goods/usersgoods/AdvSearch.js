import React from 'react'
import { Form, Row, Col, Input, Button, Select } from 'antd'
import { DatePicker } from 'antd'
import { Radio } from 'antd';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;


const InputGroup = Input.Group;
const Option = Select.Option;


const { RangePicker } = DatePicker;
const Search = Input.Search;
// const FormItem = Form.Item;

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

  render() {
    const formItemLayout = {
          labelCol: { span: 7},
          wrapperCol: { span: 17 },
        };
    return (
      <Form
        layout="inline"
        className="advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={16}>
          <Col {...ColProps} xl={4} md={6} >
            <Search 
                size="large"
                placeholder="输入关键字"
                onSearch={value => console.log(value)}
              />
          </Col>

          <Col {...ColProps} xl={3} md={4} >
              <Select size="large" placeholder="所属品类" >
                <Option value="1">商家类型1</Option>
                <Option value="2">商家类型2</Option>
                <Option value="3">商家类型3</Option>
              </Select>
          </Col>

          <Col {...ColProps} xl={6} md={9} >
            <InputGroup compact>
              <Select defaultValue="Option1" size="large" style={{ width: '25%'}}>
                <Option value="Option1">开店时间</Option>
                <Option value="Option2">有效期限</Option>
              </Select>
              <RangePicker
                  style={{ width: '75%' }} 
                  size="large"
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                  placeholder={['开始时间', '结束时间']}
                />
            </InputGroup>
          </Col>

         
        </Row>

        <Row gutter={16}>
          <Col {...ColProps} xl={4} md={8} >
              <FormItem style={{width:"100%", background:"#fff", borderRadius: "4px" }}
                {...formItemLayout}
                label="商家名称"
              >
                  <RadioGroup value={this.state.value} onChange={this.onChange} >
                    <Radio value={1}>上架</Radio>
                    <Radio value={2}>下架</Radio>
                  </RadioGroup>
                
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
