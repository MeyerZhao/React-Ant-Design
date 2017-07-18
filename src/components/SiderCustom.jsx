/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderCustom extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '',
        selectedKey: ''
    };
    componentDidMount() {
        const _path = this.props.path;
        this.setState({
            openKey: _path.substr(0, _path.lastIndexOf('/')),
            selectedKey: _path
        });
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.onCollapse(nextProps.collapsed);
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    };
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        console.log(this.state);

    };
    openMenu = v => {
        console.log(v);
        this.setState({
            openKey: v[v.length - 1]
        })
    };
    render() {
        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsible
                collapsed={this.props.collapsed}
                onCollapse={this.onCollapse}

            >
                <div className="logo" />
                <Menu
                    onClick={this.menuClick}
                    theme="dark"
                    mode={this.state.mode}
                    selectedKeys={[this.state.selectedKey]}
                    openKeys={[this.state.openKey]}
                    onOpenChange={this.openMenu}
                >
                    <Menu.Item key="/app/dashboard/index">
                        <Link to={'/app/dashboard/index'}><Icon type="mobile" /><span className="nav-text">首页</span></Link>
                    </Menu.Item>

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
                                  title={<span><Icon type="gift" /><span className="nav-text">商品</span></span>}
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
                                  title={<span><Icon type="exception" /><span className="nav-text">订单</span></span>}
                                >
                                  <Menu.Item key="/orders/general"><Link to="/orders/general">常规订单</Link></Menu.Item>
                                  <Menu.Item key="/orders/ious"><Link to="/orders/ious">白条订单</Link></Menu.Item>
                                  <Menu.Item key="/orders/infor"><Link to="/orders/infor">信息订单</Link></Menu.Item>
                                  <Menu.Item key="/orders/distribute"><Link to="/orders/distribute">配送订单</Link></Menu.Item>
                                  <Menu.Item key="/orders/refund"><Link to="/orders/refund">退款订单</Link></Menu.Item>
                                </SubMenu>

                                <SubMenu
                                  key="/finance"
                                  title={<span><Icon type="bank" /><span className="nav-text">财务</span></span>}
                                >
                                  <Menu.Item key="/finance/account_list"><Link to="/finance/account_list">账户列表</Link></Menu.Item>
                                  <Menu.Item key="/finance/business_ious"><Link to="/finance/business_ious">商家白条</Link></Menu.Item>
                                  <Menu.Item key="/finance/withdraw_manage"><Link to="/finance/withdraw_manage">提现管理</Link></Menu.Item>
                                  <Menu.Item key="/finance/account_manage"><Link to="/finance/account_manage">账户管理</Link></Menu.Item>
                                  <Menu.Item key="/finance/bill_center"><Link to="/finance/bill_center">对账中心</Link></Menu.Item>
                                  <Menu.Item key="/finance/bond_manage"><Link to="/finance/bond_manage">保证金管理</Link></Menu.Item>
                                  <Menu.Item key="/finance/bank_card_manage"><Link to="/finance/bank_card_manage">银行卡管理</Link></Menu.Item>
                                </SubMenu>

                                <SubMenu
                                  key="/app"
                                  title={<span><Icon type="appstore-o" /><span className="nav-text">应用</span></span>}
                                >
                                  <Menu.Item key="/app/sms_mgr"><Link to="/app/sms_mgr">短信管理</Link></Menu.Item>
                                 
                                </SubMenu>

                                <Menu.Item key="/data_analysis">
                                    <Link to="/data_analysis">
                                        <Icon type="area-chart" />
                                    <span className="nav-text">数据分析</span>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key="/admin_address">
                                    <Link to="/admin_address">
                                        <Icon type="contacts" />
                                    <span className="nav-text">管理员通讯录</span>
                                    </Link>
                                </Menu.Item>




                </Menu>
        
            </Sider>
        )
    }
}

export default SiderCustom;