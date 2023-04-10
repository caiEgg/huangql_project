import { reqCode,reqRegister,reqLogin,reqLogout ,reqUser} from "@/api"
import { setToken,getToken,removeToken } from "@/utils/login_token"
const state={
    codeNum:'',
    login_token:getToken(),
    name:'',
    UserInfo:{}
}
const mutations = {
    setCode(state,data){
        state.codeNum = data
    },
    setToken(state,data){
        state.login_token = data
    },
    setUserInfo(state,value){
        state.name = value.name
        state.UserInfo = value
    },
    ClearInfo(state){
        removeToken()
        state.login_token = ''
        state.name = ''
        state.UserInfo = {}
    }
    
}
const actions = {
    // 请求验证码
    async reqCodeActions({commit},phone){
        let result = await reqCode(phone)
        if(result.code == 200){
            console.log("验证码请求成功")
            commit('setCode',result.data)
            return "ok"
        }else{
            return Promise.reject(new Error('失败'))
        }
    },
    // 注册
    async reqRegisterActions({commit},data){ 
        let result = await reqRegister(data.phone,data.password,data.code)
        if(result.code == 200){
            return "ok"
        }else if(result.code ==223){
            alert(result.message) 
            return Promise.reject(new Error(result.message))
        }
        else{
            return Promise.reject(new Error(result.message))
        }
    },
    // 登录
    async reqLoginActions({commit},data){
        let result = await reqLogin(data.phone,data.password)
        if(result.code == 200){
            commit('setToken',result.data.token)
            // 持久化存储token
            setToken(result.data.token)
            return result.message
        }else{
            return Promise.reject(new Error(result.message))
        }
    },
    // 获取用户信息
    async getUserInfo({commit}){
        let result = await reqUser()
        console.log("用户请求结果是,",result)
        if(result.code == 200){
            commit('setUserInfo',result.data)
           return "ok"
        }else{
            return Promise.reject(new Error(result.message))
        }
    },
    // 退出登录
    async reqLogoutActions({commit}){
        let result = await reqLogout()
        console.log(result)
        if(result.code == 200){
            // 清除本地仓库用户信息
            commit('ClearInfo')
            return "ok"
        }else{
            return Promise.reject(new Error('退出登录失败'))
        }
        
        
    }

}

export default{
    state,
    mutations,
    actions
}