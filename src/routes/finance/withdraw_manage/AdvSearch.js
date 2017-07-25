import React from 'react'
import { Form, Row, Col, Input, Button, Select } from 'antd'
import { DatePicker } from 'antd'
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;
const Option = Select.Option;

    const InputGroup = Input.Group;
    const { RangePicker } = DatePicker;
    const Search = Input.Search;

    const ColProps = {
      xs: 24,
      sm: 12,
      style: {
        marginBottom: 16,
      },
    }


const plainOptions = [
  { label: '状态1', value: '状态1' },
  { label: '状态2', value: '状态2' },
  { label: '状态3', value: '状态3' },
];
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
          <Col {...ColProps} xl={6} md={9} >
            <Search 
                size="large"
                placeholder="UID/手机号码/名称 /流水号/开户人/账号"
                onSearch={value => console.log(value)}
              />
          </Col>
          <Col {...ColProps} xl={6} md={9} >
            <InputGroup compact>
              <Select size="large" defaultValue="申请时间"  style={{ width: '25%' }}>
                <option value="申请时间">申请时间</option>
                <option value="处理时间">处理时间</option>
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
            <Select placeholder="开户银行" size="large" >
                  <Option value="中国银行">中国银行</Option>
                  <Option value="中国工商银行">中国工商银行</Option>
                </Select>
          </Col>
          
          <Col {...ColProps} xl={6} md={9} >
            <InputGroup compact >
              <label style={{ width: "25%", background:"#fff", height:"32px", lineHeight:"32px", padding:"0 10px", overflow:"hidden"}}  >提现金额：</label>
              <Input size="large" style={{ width: "30%", textAlign: 'center' }} placeholder="最小值" />
              <Input size="large" style={{ width: "15%", textAlign: 'center', borderLeft: 0, pointerEvents: 'none' }} placeholder="~" />
              <Input size="large" style={{ width: "30%", textAlign: 'center', borderLeft: 0 }} placeholder="最大值" />
            </InputGroup>
          </Col>
         
        </Row>

        <Row gutter={24}>
          <Col {...ColProps} xl={6} md={9} >
            <InputGroup compact style={{width:"100%", background:"#fff", borderRadius: "4px" }}>
              <label style={{ width: "25%", background:"#fff", height:"32px", lineHeight:"32px", padding:"0 10px", overflow:"hidden"}}  >退款状态：</label>
              <CheckboxGroup options={plainOptions} defaultValue={['状态1']} />
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
