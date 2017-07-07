import React from 'react'
import { Form, Row, Col, Input, Button, Select, Cascader } from 'antd'
import { DatePicker } from 'antd'
import city from '../../../utils/city.js'

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
        <Row gutter={16}>
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
          <Col {...ColProps} xl={6} md={9} >
            <InputGroup compact>
              <Select defaultValue="1" size="large" style={{ width: '25%' }}  >
                <Option value="1">商品数量</Option>
                <Option value="2">用户数量</Option>
                <Option value="3">成交金额</Option>
              </Select>
              <Input size="large" style={{ width: 100, textAlign: 'center' }} placeholder="最小值" />
              <Input size="large" style={{ width: 24, borderLeft: 0, pointerEvents: 'none' }} placeholder="~" />
              <Input size="large" style={{ width: 100, textAlign: 'center', borderLeft: 0 }} placeholder="最大值" />
            </InputGroup>
          </Col>
         
        </Row>
        <Row gutter={16}>
          <Col {...ColProps} xl={2} md={3} >
            <Select size="large" placeholder="商家类型">
                  <Option value="1">商家类型1</Option>
                  <Option value="2">商家类型2</Option>
                  <Option value="3">商家类型3</Option>
                </Select>
          </Col>
          <Col {...ColProps} xl={2} md={3} >
            <Select size="large" placeholder="选择主营类目">
                  <Option value="1">选择主营类目1</Option>
                  <Option value="2">选择主营类目2</Option>
                  <Option value="3">选择主营类目3</Option>
                </Select>
          </Col>
          <Col {...ColProps} xl={2} md={9} >
             <Select size="large" placeholder="店铺状态">
                  <Option value="1">营业</Option>
                  <Option value="2">歇业</Option>
                  <Option value="3">待审核</Option>
                </Select>
          </Col>
           <Col {...ColProps} xl={4} md={9} >
             <Cascader
               size="large"
               style={{ width: '100%' }}
               options={city}
               placeholder="请选择地址"
               changeOnSelect
             />
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
