/* 
定义多个请求接口函数
*/

import ajax from './ajax'

const BASE = ''

//登录请求函数,返回一个promise对象
/* export function reqLogin(username,password){
    return ajax(BASE+'/login',{username,password},'POST')
} */


//登录（箭头函数）
export const reqLogin = (username,password) => ajax(BASE+'/login',{username,password},'POST')

//添加用户
export const reqAddUser = (user) => ajax(BASE+'/manage/user/add',user,'POST')


//测试
reqLogin('admin','admin').then(result => {
    console.log('result',result)
})