import React from 'react'
import { Form, Row, Col, Input, Button, Select } from 'antd'
import { DatePicker } from 'antd'

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
  };
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
    return (
      <Form
        layout="inline"
        className="advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={24}>
          <Col {...ColProps} xl={4} md={6} >
            <Search 
                size="large"
                placeholder="输入关键字"
                onSearch={value => console.log(value)}
              />
          </Col>
          <Col {...ColProps} xl={6} md={9} >
            <InputGroup compact>
              <Select defaultValue="Option1" size="large" style={{ width: '25%' }}>
                <Option value="Option1">注册时间</Option>
                <Option value="Option2">上次登录</Option>
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
          <Col {...ColProps} xl={6} md={9} >
            <InputGroup compact>
              <Select defaultValue="1" size="large" style={{ width: '25%' }}>
                <Option value="1">消费次数</Option>
                <Option value="2">消费金额</Option>
                <Option value="3">提现次数</Option>
                <Option value="4">提现金额</Option>
              </Select>
              <Input size="large" style={{ width: '25%', textAlign: 'center' }} placeholder="最小值" />
              <Input size="large" style={{ width: 25, borderLeft: 0, pointerEvents: 'none' }} placeholder="~" />
              <Input size="large" style={{ width: '25%', textAlign: 'center', borderLeft: 0 }} placeholder="最大值" />
            </InputGroup>
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
