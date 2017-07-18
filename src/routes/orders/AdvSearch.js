import React from 'react'
import { Form, Row, Col, Input, Button, Select, Cascader } from 'antd'
import city from '../../utils/city.js'
import { DatePicker } from 'antd'
import { Radio } from 'antd';

    const RadioGroup = Radio.Group;
    const InputGroup = Input.Group;
    const Option = Select.Option;
    const { RangePicker } = DatePicker;
    const Search = Input.Search;


    const plainOptions = ['状态1', '状态2', '状态3'];
    const plainOptions2 = ['渠道1', '渠道2', '渠道3'];

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
    value1: '状态1',
    value2: '渠道1',
  };
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
          <Col {...ColProps} xl={6} md={9} >
            <Search 
                size="large"
                placeholder="输入关键字"
                onSearch={value => console.log(value)}
              />
          </Col>
          <Col {...ColProps} xl={6} md={9} >
            <InputGroup compact>
              <Select defaultValue="Option1" size="large" style={{ width: '25%' }}>
                <Option value="Option1">下单时间</Option>
                <Option value="Option2">配送时间</Option>
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
        <Row gutter={24}>
          <Col {...ColProps} xl={6} md={9} >
            <InputGroup compact size="large">
              <label style={{ width: "25%", background:"#fff", height:"32px", lineHeight:"32px", padding:"0 10px", overflow:"hidden"}}  >订单金额</label>
              <Input  style={{ width: "30%", textAlign: 'center' }} placeholder="最小值" />
              <Input  style={{ width: "15%", textAlign: 'center', borderLeft: 0, pointerEvents: 'none' }} placeholder="~" />
              <Input  style={{ width: "30%", textAlign: 'center', borderLeft: 0 }} placeholder="最大值" />
            </InputGroup>
          </Col>
          <Col {...ColProps} xl={6} md={9} >
          <InputGroup compact style={{width:"100%", background:"#fff", borderRadius: "4px" }}>
            <label style={{ width: "25%", background:"#fff", height:"32px", lineHeight:"32px", padding:"0 10px", overflow:"hidden"}}  >订单状态：</label>
            <RadioGroup options={plainOptions} onChange={this.onChange1} value={this.state.value1} />
          </InputGroup>
             
          </Col>
        </Row>
        <Row gutter={24}>
          <Col {...ColProps} xl={6} md={9} >
            <Cascader
              size="large"
              style={{ width: '100%' }}
              options={city}
              placeholder="配送地址"
              changeOnSelect
            />
          </Col>
          <Col {...ColProps} xl={6} md={9} >
            <InputGroup compact style={{width:"100%", background:"#fff", borderRadius: "4px" }}>
              <label style={{ width: "25%", background:"#fff", height:"32px", lineHeight:"32px", padding:"0 10px", overflow:"hidden"}}  >来源渠道：</label>
              <RadioGroup options={plainOptions2} onChange={this.onChange2} value={this.state.value2} />
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
