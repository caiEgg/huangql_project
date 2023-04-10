import { reqCategorylist } from "@/api"
import { reqBanners } from "@/api"
import { reqFloors } from "@/api"

const state = {
    categoryList: [],
    banners: [],
    floorList: [],
    
}
const mutations = {
    categoryList(state, value) {
        state.categoryList = value
    },
    getBanners(state, value) {
        state.banners = value
    },
    setFloorList(state, value) {
        state.floorList = value
    },
    
}
const actions = {
    async categoryList(store) {
        let result = await reqCategorylist()
        store.commit('categoryList', result.data)
    },
    async getBanners(store) {
        reqBanners().then((result) => {
            store.commit('getBanners', result.data)
        })
    },
    async getFloorList(store) {
        let result = await reqFloors();
        store.commit('setFloorList', result.data)
    },
    

}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}