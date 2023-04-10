import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
Vue.use(VueRouter)


let OringinPush = VueRouter.prototype.push;
let OringinReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        OringinReplace.call(this, location, resolve, reject)
    } else {
        OringinReplace.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        OringinPush.call(this, location, resolve, reject)
    } else {
        OringinPush.call(this, location, () => { }, () => { })
    }
}
const router = new VueRouter({
    routes
})
// 
router.beforeEach(async (to, from, next) => {
    // 如果要去登录，判断有没有登录
    console.log("从哪里来",from)
    console.log("现在路由要去哪",to)
    let pathList = ['/trade','/pay','/paysuccess','/center','/shopcart','/center/centerorder']
    try {
        // 登录成功
        await store.dispatch('getUserInfo')
        // 不能去登录页面的
        if(to.path=="/login"){
            next('/home')
        }else{
            next()
        }        
    } catch (error) {
        // 说明之前的token过期了，清除掉token，再登录
        await store.dispatch('reqLogoutActions')
        if(pathList.indexOf(to.path) > -1){
            // 你要去这些路径的话，没登录就得登录,把要去的路径保存到query参数上
            alert("您还未登录，请先登录再操作")
            next('/login?redirect='+to.path)
        }
        // 其他页面一律放行
        next()
    }
    
    
    

})
export default router