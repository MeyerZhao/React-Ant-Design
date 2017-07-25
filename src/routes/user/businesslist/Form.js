import React from 'react'
import { Form, Input, Select, Button, Cascader, Tabs, Table, Radio } from 'antd';
import { DatePicker,Row, Col } from 'antd';
import city from '../../../utils/city.js'
import PicturesWall from '../../../components/PicturesWall.jsx'
import TimePickerW from '../../../components/TimePickerW.js'
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const InputGroup = Input.Group;

const FormItem = Form.Item;
const Option = Select.Option;

const columns = [{
  title: '省份', dataIndex: 'name', key: 'name', render: text => <a href="">{text}</a>, }, {
  title: '城市', dataIndex: 'age', key: 'age', }, {
  title: '排序', dataIndex: 'address', key: '1', }, {
  title: '可配送区域', dataIndex: 'address', key: '2', }, {
  title: '未配送区域', dataIndex: 'address', key: '22', }, {
  title: '更新时间', dataIndex: 'address', key: '3', }];

const columns2 = [{
  title: '自提点名称', dataIndex: 'name', key: 'name', render: text => <a href="">{text}</a>, }, {
  title: '联系地址', dataIndex: 'age', key: 'age', }, {
  title: '联系电话', dataIndex: 'address', key: '1', }, {
  title: '营业时间', dataIndex: 'address', key: '2', }, {
  title: '更新时间', dataIndex: 'address', key: '22'}];

const data = [{
  key: '1',
  name: '空',
  age:'空',
  address: 'Num',
}];

    const ColProps = {
      xs: 24,
      sm: 12,
      style: {
        marginBottom: 16,
      },
    }

class RegistrationForm extends React.Component {
  state = {
    value: 1,
    confirmDirty: false,
    autoCompleteResult: [],
  };
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
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
    const { getFieldDecorator } = this.props.form;

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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 60 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const company=(

      <span>
      
      <FormItem
        {...formItemLayout}
        label="企业名称"
        hasFeedback
      >         
        {getFieldDecorator('mainmsg', {
          rules: [{ required: true, message: '请输入主体信息！!' }],
        })(
          <Input placeholder="企业名称"/>      
        )}
      </FormItem>       
      <FormItem
        {...formItemLayout}
        label="信用代码"
      >         
        <Input placeholder="统一社会信用代码"/>
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="法人姓名"
      >         
        <Input placeholder="法人姓名"/>
      </FormItem>
        <FormItem
        {...formItemLayout}
        label="身份证号"
      >         
        <Input placeholder="身份证号"/>
      </FormItem>

      
      <FormItem
        {...formItemLayout}
        label="证件照片"
      >         
       <PicturesWall uptxt="身份证正面" />
       <PicturesWall uptxt="营业执照" />
      </FormItem>

      </span>

    )

    const person=(

      <span>
      
      <FormItem
        {...formItemLayout}
        label="姓名"
        hasFeedback
      >         
        {getFieldDecorator('mainmsg', {
          rules: [{ required: true, message: '请输入你的名字！' }],
        })(
          <Input placeholder="姓名"/>      
        )}
      </FormItem>       
      <FormItem
        {...formItemLayout}
        label="身份证号"
      >    
        {getFieldDecorator('idcard', {
          rules: [{ required: true, message: '身份证号' }],
        })(
          <Input placeholder="身份证号"/>
        )}      
        
      </FormItem>

      
      <FormItem
        {...formItemLayout}
        label="证件照片"
      >         
       <PicturesWall uptxt="身份证正面" />

      </FormItem>

      </span>

    )


    return (
       <Tabs defaultActiveKey="1" >
           <TabPane tab="基本信息" key="1"> 
                  <Form onSubmit={this.handleSubmit}>

                    <FormItem
                      {...formItemLayout}
                      label="商家名称"
                      hasFeedback
                    >
                      {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请输入名称!', whitespace: true }],
                      })(
                        <Input />
                      )}
                    </FormItem>

                    <FormItem
                      {...formItemLayout}
                      label="注册手机"
                      hasFeedback
                    >
                      {getFieldDecorator('num', {
                        rules: [{ required: true, message: '请输入商家UID!',}],
                      })(
                        <Input />
                      )}
                    </FormItem>

                    <FormItem
                      {...formItemLayout}
                      label="商家类型"
                      hasFeedback
                    >
                      {getFieldDecorator('type', {
                        rules: [{ required: true, message: '请选择商家类型!', whitespace: true }],
                      })(
                        <Select defaultValue="1"  >
                          <Option value="1">实体花店</Option>
                          <Option value="2">实体花店2</Option>
                          <Option value="3">实体花店3</Option>
                        </Select>
                      )}
                    </FormItem>

                    <FormItem
                      {...formItemLayout}
                      label="主营类目"
                      hasFeedback
                    >
                      {getFieldDecorator('maintype', {
                        rules: [{ required: true, message: '请选择商家类型!', whitespace: true }],
                      })(
                        <Select defaultValue="1"  >
                          <Option value="1">切花</Option>
                          <Option value="2">切叶</Option>
                          <Option value="3">绿植</Option>
                          <Option value="4">盆栽</Option>
                        </Select>
                      )}
                    </FormItem>

                    <FormItem
                      {...formItemLayout}
                      label="佣金比例"
                      hasFeedback
                    >
                      {getFieldDecorator('money', {
                        rules: [{ required: true, message: '', whitespace: true }],
                      })(
                        <Input></Input>
                      )}
                    </FormItem>

                    <FormItem
                      {...formItemLayout}
                      label="有效日期"
                    > 
                      <DatePicker
                        showTime
                        style={{ width: '100%' }} 
                        format="YYYY-MM-DD HH:mm:ss"
                        placeholder="选择有效日期"
                      />
                    </FormItem>

                    <FormItem
                      {...formItemLayout}
                      label="联系电话"
                    >{getFieldDecorator('uid', {
                        rules: [{ required: true, message: '请输入联系人电话!', }],
                      })(
                        <InputGroup size="large">
                          <Row gutter={8}>
                            <Col span={6}>
                              <Input placeholder="联系人" />
                            </Col>
                            <Col span={18}>
                              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                            </Col>
                          </Row>
                        </InputGroup>
                      )}
                    </FormItem>


                    <FormItem
                      {...formItemLayout}
                      label="所在地"
                      hasFeedback
                    >         
                      {getFieldDecorator('address', {
                        rules: [{ required: true, message: '请选择地址！!' }],
                      })(
                       <Cascader
                         size="large"
                         style={{ width: '100%' }}
                         options={city}
                         placeholder="请选择地址！"
                         changeOnSelect
                       />
                      )}
                    </FormItem>

                    <FormItem
                      {...formItemLayout}
                      label="详细地址"
                      hasFeedback
                    >         
                      {getFieldDecorator('fullAddress', {
                        rules: [{ required: true, message: '请输入详细地址！!' }],
                      })(
                       <Input type="textarea" rows={4} />
                      )}
                    </FormItem>

                    <FormItem
                      {...formItemLayout}
                      label="商家图标"
                    >
                       <PicturesWall clssName="custom" uptxt="建议尺寸800*800" />
                    
                    </FormItem>

                    <FormItem
                      {...formItemLayout}
                      label="商家描述"
                      hasFeedback
                    >         
                      {getFieldDecorator('describe', {
                        rules: [{ required: true, message: '请输入商家描述！!' }],
                      })(
                       <Input type="textarea" rows={4} />
                      )}
                    </FormItem>

                    <FormItem
                      {...formItemLayout}
                      label="主体信息"
                      hasFeedback
                    >         
                    
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                           <Radio value={1}>企业</Radio>
                           <Radio value={2}>个人</Radio>
                         </RadioGroup>
               
                    </FormItem> 
                    {this.state.value === 1 ? company : person}

                  
                    <FormItem {...tailFormItemLayout}>
                      <Button type="primary" htmlType="submit" size="large">确认提交</Button>
                    </FormItem>
                  </Form>
           </TabPane>
           <TabPane tab="店铺设置情况" key="2">
             <div style={{padding:"0 20px"}}>
              <Row gutter={16} style={{marginBottom:"10px"}}>
                <Col {...ColProps} span={12} >订货单：未开启 </Col>
                <Col {...ColProps} span={12} >白条支付：已开启</Col>
                <Col {...ColProps} span={12} >库存关联：未开启 </Col>
                <Col {...ColProps} span={12} >会员价格：未开启</Col>
                <Col {...ColProps} span={24} >运费设置：无条件包邮：单笔订单未满200元，需要单独支付运费15元。</Col>
              </Row>
              
              <Row gutter={16} >
                <Col {...ColProps} span={24} >销售区域：未开启 /已开启</Col>
              </Row>
              <Row gutter={16} style={{marginBottom:"10px"}}>
                <Table columns={columns} dataSource={data} size="small"  />  
              </Row>

              <Row gutter={16} style={{marginBottom:"10px"}}>
                <Col span={24} >营业时间：未开启 /已开启</Col>
              </Row>
              <Row gutter={16} style={{marginBottom:"20px"}}>
               <div className="ant-table-middle">
                  <table style={{width:"100%"}} >
                   <tbody className="ant-table-tbody">
                     <tr> <td>星期</td> <td>开始时间</td> <td>结束时间</td> <td>切换时间</td> </tr>
                     <tr> <td>周一</td> <td><TimePickerW /></td> <td><TimePickerW /></td> <td><TimePickerW /></td> </tr>
                     <tr> <td>周二</td> <td><TimePickerW /></td> <td><TimePickerW /></td> <td><TimePickerW /></td> </tr>
                     <tr> <td>周三</td> <td><TimePickerW /></td> <td><TimePickerW /></td> <td><TimePickerW /></td> </tr>
                     <tr> <td>周四</td> <td><TimePickerW /></td> <td><TimePickerW /></td> <td><TimePickerW /></td> </tr>
                     <tr> <td>周五</td> <td><TimePickerW /></td> <td><TimePickerW /></td> <td><TimePickerW /></td> </tr>
                     <tr> <td>周六</td> <td><TimePickerW /></td> <td><TimePickerW /></td> <td><TimePickerW /></td> </tr>
                   </tbody>
                 </table>
               </div>
              </Row>

               <Row gutter={16} style={{marginBottom:"10px"}}>
                 <Col span={24} >自提点：未开启</Col>
               </Row>
               <Table columns={columns2} dataSource={data} size="small"  />  


             </div>
           </TabPane>
        </Tabs>



    );
  }
}


const WrappedRegistrationForm = Form.create()(RegistrationForm);


export default WrappedRegistrationForm