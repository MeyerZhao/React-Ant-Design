import React from 'react'
import { Form, Row, Col, Input, Button, Select} from 'antd'

    const InputGroup = Input.Group;
    const Search = Input.Search;

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
                placeholder="UID/手机号码/名称 （用户+商家）"
                onSearch={value => console.log(value)}
              />
          </Col>
          <Col {...ColProps} xl={6} md={9} >
            <InputGroup compact size="large">
              <Select size="large" defaultValue="白条总额"  style={{ width: '25%' }}>
                <option value="白条总额">白条总额</option>
                <option value="白条余额">白条余额</option>
                <option value="应收金额">应收金额</option>
              </Select>
              <Input  style={{ width: "30%", textAlign: 'center' }} placeholder="最小值" />
              <Input  style={{ width: "15%", textAlign: 'center', borderLeft: 0, pointerEvents: 'none' }} placeholder="~" />
              <Input  style={{ width: "30%", textAlign: 'center', borderLeft: 0 }} placeholder="最大值" />
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
