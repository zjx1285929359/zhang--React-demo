import React, { Component } from 'react'
import { 
    Form, 
    Icon, 
    Input, 
    Button
 } from 'antd';

import logo from './images/logo.png'
import './login.css'

const Item = Form.Item

export default class Login extends Component {

    handleSubmit = (event)=>{
        event.preventdefault();
        alert('提交');
    }

    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className="login-section">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />
                        </Item>
                        <Form.Item>
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>        
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登 录
                            </Button>     
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
