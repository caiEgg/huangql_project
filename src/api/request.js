// 对axios进行二次封装
import axios from 'axios'
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import store from '@/store';
const requests = axios.create({
    baseURL:'/api',
    timeout:5000
})
requests.interceptors.request.use((config) => {
    nProgress.start();
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token
    }
    if(store.state.register.login_token){
        config.headers.token = store.state.register.login_token
    }
    return config
})

requests.interceptors.response.use((res) => {
    nProgress.done()
    return res.data
},(err) => {
    return Promise.reject(new Error('faile'))
})
export default requests