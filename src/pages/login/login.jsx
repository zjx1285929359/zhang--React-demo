import React, { Component } from 'react'
import { 
    Form, 
    Icon, 
    Input, 
    Button,
    message
 } from 'antd';
 import {Redirect} from 'react-router-dom'
import {reqLogin} from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import logo from './images/logo.png'
import './login.less'

const Item = Form.Item

class Login extends Component {

    handleSubmit = (event)=>{
        event.preventDefault();

        //统一进行所有表单所有的验证
        this.props.form.validateFields (async (err,values)=>{
            if(!err){
                // console.log('发登录ajax请求',values)
                //调用登录请求接口函数
                const {username,password} = values
                const result = await reqLogin(username,password)
                //判断是否登录成功
                if(result.status === 0){
                    //保存数据
                    const user = result.data
                    //user在local文件中存储,
                    //如果登陆了，刷新页面，跳转登陆后页面
                    localStorage.setItem('USER-KEY',JSON.stringify(user))
                    //把user存储在内存中
                    memoryUtils.user = user
                    console.log(memoryUtils.user)
                    //跳转admin界面
                    this.props.history.replace('/')
                }else{
                    //登录失败
                    message.error(result.msg)
                }
            }
        })
        // const userName = this.props.form.getFieldValue('username')
        // const passWord = this.props.form.getFieldValue('password')
        // const values = this.props.form.getFieldsValue()
        // console.log(userName,passWord,values)
    }

    //自定义密码验证
    validatePwd = (rule,value,callback)=>{
        // console.log(rule,value)
        value = value.trim()
        if(!value){
            callback('请输入密码')
        }else if(value.length<4){
            callback('密码不能小于4位')
        }else if(value.length>12){
            callback('密码不能大于12位')
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            callback('用户名必须由英文、数字、下划线组成')
        }else{
            callback()
        }
    }

    render() {
        const {getFieldDecorator} = this.props.form

        //如果訪問login界面,已經登錄,自動跳轉到admin
        const user = memoryUtils.user
        if(user._id){
            return <Redirect to="/"/>
        }


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
                            {
                                getFieldDecorator('username',{
                                    initialValue:'',
                                    rules:[
                                        {required:true,message:'请输入用户名'},
                                        {min:4,message:'用户名不能小于4位'},
                                        {max:12,message:'用户名不能大于12位'},
                                        {pattern:/^[a-zA-Z0-9_]+$/,message:'用户名必须由英文、数字、下划线组成'}
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />
                                )
                            }
                        </Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password',{
                                    initialValue:'',
                                    rules:[
                                        {validator:this.validatePwd}
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                )
                            }
                            
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

//运用高阶函数渲染组件
const warpLogin = Form.create()(Login)
export default warpLogin
    