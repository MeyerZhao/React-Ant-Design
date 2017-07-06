import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;




class App extends Component {
	state = {
    collapsed: false,
    mode: 'inline',
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed: !this.state.collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  render() {
    return (
      <Layout style={{height: '100%'}}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />

          <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['/']}>

            <Menu.Item key="/"><Link to="">首页</Link></Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span className="nav-text">用户</span></span>}
            >

              <Menu.Item key="/userlist"><Link to="/user/userlist">用户列表</Link></Menu.Item>
              <Menu.Item key="/businesstype"><Link to="/user/businesstype">商家类型</Link></Menu.Item>
              <Menu.Item key="/businesslist"><Link to="/user/businesslist">商家列表</Link></Menu.Item>

            </SubMenu>

            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span className="nav-text">商品</span></span>}
            >
              <Menu.Item key="4">Team 1</Menu.Item>
              <Menu.Item key="5">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="6">
              <span>
                <Icon type="file" />
                <span className="nav-text">File</span>
              </span>
            </Menu.Item>
          </Menu>

        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.onCollapse}
            />
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>   
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;