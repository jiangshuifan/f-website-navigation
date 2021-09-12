import axios from "axios";
axios.defaults.baseURL = '/api'

export function request(config){
    const instance = axios.create({
        timeout:5000,
        baseURL:"https://dcdn.it120.cc"
        // headers:{'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        //method、url、baseURL、transformRequest、transformResponse、headers、params
    })

    //请求拦截器
    // instance.interceptors.request.use(config=>{
    //     console.log(config);//拦截后在这进行操作
    //     return config//记得返回
    // },err=>{
    //     console.log(err);
    // })

    //响应拦截
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err);
    })

    return instance(config)
}