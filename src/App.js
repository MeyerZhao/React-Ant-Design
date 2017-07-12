import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
const { Content, Footer } = Layout;

class App extends Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout className="ant-layout-has-sider" style={{ height: '100vh' }}>
              <SiderCustom path={this.props.location.pathname} collapsed={this.state.collapsed} />
              <Layout>
                <HeaderCustom toggle={this.toggle} />
                <Content style={{ margin: '0 16px'}}>
                              <Breadcrumb separator=">" style={{ margin: '12px 0' }} routes={this.props.routes} params={this.props.params} />
                  <div style={{ padding: 24, background: '#fff', minHeight: 360, position:"relative"}}>
                    {this.props.children}
                  </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                  React-Admin ©2017 Created by 865470087@qq.com
                </Footer>
              </Layout>
            </Layout>
        );
    }
}

export default App;
