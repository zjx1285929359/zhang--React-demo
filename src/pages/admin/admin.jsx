import React, { Component } from 'react'
import {Redirect,Route,Switch} from 'react-router-dom'
import {Layout} from 'antd'

import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import ChartsBar from '../charts/bar'
import ChartsLine from '../charts/line'
import ChartsPie from '../charts/pie'

import AdminHeader from '../../component/header'
import LfetNav from '../../component/left-nav'
import memoryUtils from '../../utils/memoryUtils'

const {Footer,Sider,Content} = Layout

export default class Admin extends Component {
    render() {
        const user = memoryUtils.user
        if(!user._id){
            return <Redirect to="/login"/>
        }

        return (
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LfetNav/>
                </Sider>
                <Layout>
                    <AdminHeader/>
                    <Content style={{background:'white',margin:'30px'}}>
                        <Switch>
                            <Route psth="/home" component={Home}/>
                            <Route psth="/category" component={Category}/>
                            <Route psth="/product" component={Product}/>
                            <Route psth="/role" component={Role}/>
                            <Route psth="/user" component={User}/>
                            <Route psth="/charts/bar" component={ChartsBar}/>
                            <Route psth="/charts/line" component={ChartsLine}/>
                            <Route psth="/charts/pie" component={ChartsPie}/>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center',color:'#aaa'}}>推荐使用谷歌浏览器，可以获得更加页面操作体验</Footer>
                </Layout>
            </Layout>   
        )
    }
}
