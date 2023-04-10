
import {reqDetail} from '@/api/index'
import { reqAddtoCardList } from '@/api/index'
import { reqUUID } from '@/utils/uuid_token'
const state = {
    detailData:{},
    uuid_token:reqUUID()
}
const mutations = {
    setDetail(state,data){
        state.detailData = data
    }
}
const actions = {
    async getDetail({commit},skuId){
        let result = await reqDetail(skuId)
        console.log("请求发成功了，参数是",skuId)
        console.log("请求发成功了，结果是",result.data)
        commit('setDetail',result.data)
    },
    async reqAddtoCardListActions({commit},data){
        console.log("请求已经委派，参数是",data.skuId,data.skuNum)
       let result =  await reqAddtoCardList(data.skuId,data.skuNum)
        if(result.code == 200){
            console.log("数据添加成功")
            return "ok"
            
        }else{
            return Promise.reject(new Error('存储失败了'))
        }
        
    }
}
const getters = {
    categoryView(state){
        return state.detailData.categoryView ||{}
    },
    skuInfo(state){
        return state.detailData.skuInfo ||{}
    },
    spuSaleAttrList(state){
        return state.detailData.spuSaleAttrList ||[]
    }
}
export default{
   state,
   actions,
   mutations,
   getters
}