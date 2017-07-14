import React from 'react'
import { Form, Input, Button, Upload, Icon } from 'antd';

const FormItem = Form.Item;

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [{
    uid: 1,
    name: 'xxx.png',
    status: 'done',
    reponse: 'Server Error 500',  // custom error message to show
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: 2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }, {
    uid: 3,
    name: 'zzz.png',
    status: 'error',
    reponse: 'Server Error 500',  // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  }],
};







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

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
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

    return (
      <Form onSubmit={this.handleSubmit}>

        <FormItem 
          {...formItemLayout} 
          label="用户UID" 
        >
          <Input />
        </FormItem>

        <FormItem 
          {...formItemLayout} 
          label="充值金额" 
        >
          <Input />
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="充值说明"

        >         

           <Input type="textarea" rows={4} />

        </FormItem>

         <FormItem
          {...formItemLayout}
          label="添加附件"

        >         

           <Upload {...props}>
               <Button>
                 <Icon type="upload" /> Upload
               </Button>
             </Upload>

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