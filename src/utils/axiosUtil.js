import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"

// 超时时间
axios.defaults.timeout = 2000 * 1000
// 服务器域名
axios.defaults.baseURL = "http://127.0.0.1:8080"
// 允许跨域携带cookie
axios.defaults.withCredentials = true

axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    response => {
        console.dir(response)
        if(response.status == 200){
            console.dir(response)
            return Promise.resolve(response)
        }else{
            return Promise.reject(response)
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default {
    /**
     * @name get请求实体
     * @author 张硕
     * @date 2022.5.8
     * @param {String} url
     * @param {Object} data 
     */
    get(url, data){
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: data
            }).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}