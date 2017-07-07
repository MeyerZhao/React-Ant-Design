import React from 'react'
import './App.css';
import { Link } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends React.Component {
	state = {
	  collapsed: false,
	  mode: 'inline',
	}
	onCollapse = (collapsed) => {
	  console.log(collapsed);
	  this.setState({
	    collapsed: !this.state.collapsed,
	    mode: collapsed ? 'vertical' : 'inline',
	  });
	}
  render(){
    return (
    	<Layout style={{ height: '100vh' }}>
    		<Sider 
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
    		>
    		  <div className="logo" />

    		  <Menu theme="dark"  mode={this.state.mode} defaultSelectedKeys={['/']}>

    		    <Menu.Item key="/"><Link to="/">首页</Link></Menu.Item>

    		    <SubMenu
    		      key="/user"
    		      title={<span><Icon type="user" /><span className="nav-text">用户</span></span>}
    		    >
    		      <Menu.Item key="/user/userlist"><Link to="/user/userlist">用户列表</Link></Menu.Item>
    		      <Menu.Item key="/user/businesstype"><Link to="/user/businesstype">商家类型</Link></Menu.Item>
    		      <Menu.Item key="/user/businesslist"><Link to="/user/businesslist">商家列表</Link></Menu.Item>
    		    </SubMenu>

    		    <SubMenu
    		      key="/goods"
    		      title={<span><Icon type="user" /><span className="nav-text">商品</span></span>}
    		    >
    		      <Menu.Item key="/goods/goodstype"><Link to="/goods/goodstype">商品品类</Link></Menu.Item>
    		      <Menu.Item key="/goods/goodsprop"><Link to="/goods/goodsprop">商品属性</Link></Menu.Item>
    		      <Menu.Item key="/goods/typesku"><Link to="/goods/typesku">品种SKU</Link></Menu.Item>
    		      <Menu.Item key="/goods/goodssku"><Link to="/goods/goodssku">商品SKU</Link></Menu.Item>
    		      <Menu.Item key="/goods/usertype"><Link to="/goods/usertype">用户品种</Link></Menu.Item>
    		      <Menu.Item key="/goods/usergoods"><Link to="/goods/usergoods">用户商品</Link></Menu.Item>
    		    </SubMenu>

    		    <SubMenu
    		      key="/orders"
    		      title={<span><Icon type="user" /><span className="nav-text">订单</span></span>}
    		    >
    		      <Menu.Item key="/orders/general"><Link to="/orders/general">常规订单</Link></Menu.Item>
    		      <Menu.Item key="/orders/ious"><Link to="/orders/ious">白条订单</Link></Menu.Item>
    		      <Menu.Item key="/orders/infor"><Link to="/orders/infor">信息订单</Link></Menu.Item>
    		      <Menu.Item key="/orders/distribute"><Link to="/orders/distribute">配送订单</Link></Menu.Item>
    		      <Menu.Item key="/orders/refund"><Link to="/orders/refund">退款订单</Link></Menu.Item>
    		    </SubMenu>

    		    <SubMenu
    		      key="/finance"
    		      title={<span><Icon type="user" /><span className="nav-text">财务</span></span>}
    		    >
    		      <Menu.Item key="/finance/account_list"><Link to="/finance/account_list">常规订单</Link></Menu.Item>
    		      <Menu.Item key="/finance/business_ious"><Link to="/finance/business_ious">白条订单</Link></Menu.Item>
    		      <Menu.Item key="/finance/withdraw_manage"><Link to="/finance/withdraw_manage">信息订单</Link></Menu.Item>
    		      <Menu.Item key="/finance/account_manage"><Link to="/finance/account_manage">配送订单</Link></Menu.Item>
    		      <Menu.Item key="/finance/bill_center"><Link to="/finance/bill_center">退款订单</Link></Menu.Item>
    		      <Menu.Item key="/finance/bond_manage"><Link to="/finance/bond_manage">退款订单</Link></Menu.Item>
    		      <Menu.Item key="/finance/bank_card_manage"><Link to="/finance/bank_card_manage">退款订单</Link></Menu.Item>
    		    </SubMenu>

    		    <Menu.Item key="/app">
    		    	<Link to="/app">
    		    		<Icon type="file" />
    		        <span className="nav-text">应用</span>
    		    	</Link>
    		    </Menu.Item>

    		    <Menu.Item key="/data_analysis">
    		    	<Link to="/data_analysis">
    		    		<Icon type="file" />
    		        <span className="nav-text">数据分析</span>
    		    	</Link>
    		    </Menu.Item>

    		    <Menu.Item key="/admin_address">
    		    	<Link to="/admin_address">
    		    		<Icon type="file" />
    		        <span className="nav-text">管理员通讯录</span>
    		    	</Link>
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
    		    <Breadcrumb separator=">" style={{ margin: '12px 0' }} routes={this.props.routes} params={this.props.params} />
    		    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
    		      {this.props.children}
    		    </div>
    		  </Content>
    		  <Footer style={{ textAlign: 'center' }}>
    		    Ant Design ©2016 Created by Ant UED
    		  </Footer>
    		</Layout>

    	</Layout>
    )
  }
}


export default App