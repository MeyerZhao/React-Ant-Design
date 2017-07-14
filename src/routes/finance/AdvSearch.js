import React from 'react'
import { Form, Row, Col, Input, Button, Select } from 'antd'
import { Radio } from 'antd';

    const RadioGroup = Radio.Group;
    const InputGroup = Input.Group;
    const Option = Select.Option;
    const Search = Input.Search;
    const FormItem = Form.Item;

    const plainOptions = ['类型1', '类型2', '类型3'];
    const plainOptions2 = ['未开通', '已开通'];

    const ColProps = {
      xs: 24,
      sm: 12,
      style: {
        marginBottom: 16,
      },
    }
    const formItemLayout = {
          labelCol: { span: 6},
          wrapperCol: { span: 18 },
    };

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
  render() {
    return (
      <Form
        layout="inline"
        className="advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={24}>
          <Col {...ColProps} xl={5} md={6} >
            <Search 
                size="large"
                placeholder="输入关键字"
                onSearch={value => console.log(value)}
              />
          </Col>

          <Col {...ColProps} xl={6} md={9} >
            <InputGroup compact>
              <Select defaultValue="可用余额" size="large" style={{ width: '25%' }}>
                <Option value="可用余额">可用余额</Option>
                <Option value="冻结金额">冻结金额</Option>
                <Option value="保证金额">保证金额</Option>
                <Option value="白条额度">白条额度</Option>
                <Option value="白条余额">白条余额</Option>
                
              </Select>
              <Input size="large" style={{ width: '25%', textAlign: 'center' }} placeholder="最小值" />
              <Input size="large" style={{ width: 25, borderLeft: 0, pointerEvents: 'none' }} placeholder="~" />
              <Input size="large" style={{ width: '25%', textAlign: 'center', borderLeft: 0 }} placeholder="最大值" />
            </InputGroup>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col {...ColProps} xl={5} md={8} >
              <FormItem style={{width:"100%", background:"#fff", borderRadius: "4px" }}
                {...formItemLayout}
                label="用户类型"
              >
                  <RadioGroup options={plainOptions} onChange={this.onChange1} value={this.state.value1} />
              </FormItem>
          </Col>
          <Col {...ColProps} xl={5} md={8} >
              <FormItem style={{width:"100%", background:"#fff", borderRadius: "4px" }}
                {...formItemLayout}
                label="白条状态"
              >
                  <RadioGroup options={plainOptions2} onChange={this.onChange2} value={this.state.value2} />
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
