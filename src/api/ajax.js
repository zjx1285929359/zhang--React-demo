import axios from 'axios'

export default function ajax(url,data = {},method = "GET"){
    //返回一个Promise对象
    return new Promise ((resolve,reject)=>{
        let promise
        //判断
        if(method === 'GET'){
            //axios.get产生一个新的promise对象
            promise = axios.get(url,{
                params:data
            })
        }else{
            //axios.get产生一个新的promise对象            
            promise = axios.post(url,data)
        }

        promise.then(
            response =>{
                resolve(response.data)
            },
            error =>{
                alert('请求异常:'+error.message)
            }
        )

    })
}

async function login(){
    const result = await ajax('/login',{//result等于response.data
        username:'admin',
        password:'admin'
    },'POST')
    if(result.status === 0){
        //成功
    }else{
        //失败
    }
}