import { reqList } from '@/api/index'

const state = {
    listData: {}
}
const mutations = {
    getList(state, data) {
        if (data != null) {
            state.listData = data
        }

    }
}
const actions = {
    async getList(store, data) {
        console.log("请求发成功了，参数是",data)
        
        let result = await reqList(data);
        
        if (result.code == 200) {   
            console.log("请求发成功了,结果是",result)                   
            store.commit('getList', result.data)
        }else{
            console.log("请求发送失败")
        }
    }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}