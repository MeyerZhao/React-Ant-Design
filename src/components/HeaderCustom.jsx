/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Icon, Layout } from 'antd';

const { Header } = Layout;


class HeaderCustom extends Component {
    state = {
        user: ''
    };

    render() {
        return (
            <Header style={{ background: '#fff', padding: 0, height: 65 }} className="custom-theme" >
                <Icon
                    className="trigger custom-trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
               
               
            </Header>
        )
    }
}

export default HeaderCustom;