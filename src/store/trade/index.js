import { reqOrderInfo, reqUserAddress } from "@/api";
const state = {
    UserAddressList:[],
    orderInfo:{}
}
const mutations = {
    setUserAddressList(state,data){
        state.UserAddressList = data
    },
    setOrderInfo(state,data){
        state.orderInfo = data
    }
}
const actions = {
    // 获取地址
    async reqUserAddressActions({commit}){
        let result = await reqUserAddress()
        console.log(result.data)
        commit('setUserAddressList',result.data)
    },
    
    async reqOrderInfoActions({commit}){
        let result = await reqOrderInfo()
        commit('setOrderInfo',result.data)
    }

}
export default{
    state,
    mutations,
    actions
}