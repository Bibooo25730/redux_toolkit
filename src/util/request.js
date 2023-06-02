import axios from "axios";
const axiosInstance = axios.create({
    baseURL:'http://localhost:3001',
    timeout:60 * 1000,
})
//请求拦截
axiosInstance.interceptors.request.use(
    config=>{
        return config;
    },
    err=>{

    }
)
//响应拦截
axiosInstance.interceptors.response.use(
    res=>{
        return Promise.resolve(res)
    },
    err=>{
        return Promise.reject(err)
    }
)

const axiosFn = {
    onGet:(url,params) =>{
        return new Promise((reslove,reject)=>{
            console.log(url)
            axiosInstance.get(url,{params})
            .then(res=>{
                reslove(res.data);
            })
            .catch(err=>{
                reject(err)
            })
        })
    }
}

export default axiosFn;