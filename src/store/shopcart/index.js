import { reqCartList ,changeGoodCheck,deleteCartList} from "@/api";


const state = {
    CartList:[]
}
const mutations = {
    setCartList(state,data){
        state.CartList = data
    }
}
const actions = {
    async reqCartListActions({commit}){
        let result = await reqCartList()
        if(result.code == 200){
            commit('setCartList',result.data)
            return "ok"
        }
    },
    async deleteCartInfoActions({commit},skuId){
        let result = await deleteCartList(skuId);
        if(result.code == 200){
            return "ok"
        }else{
            return Promise.reject(new Error("出错了"))
        }
    },
    async changeGoodCheckActions({commit},data){
        let result = await changeGoodCheck(data.skuId,data.isChecked)
        if(result.code == 200){
            console.log("改变商品状态成功")
            return "ok"
        }else{
            return Promise.reject(new Error("改变商品状态失败"))
        }
    } 
}
const getters = {
   
    cartInfoList(state){
        if(state.CartList[0]){
            return state.CartList[0].cartInfoList || []
        }
    },
   
}

export default{
    state,
    mutations,
    actions,
    getters
}