import requests  from "./request";
import mockAjax from "./ajaxMock";
export const reqCategorylist = () => {
    // requests
    return requests({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}
export const reqBanners = () => { return mockAjax.get('banners')}
export const reqFloors = () => {return mockAjax.get('floors')}

export const reqList = (data) => {
    return requests({
        url:'/list',
        method:'post',
        data:data
    })
}
export const reqDetail = (skuId) => {
    return requests({
        url:`/item/${skuId}`,
        method:'get',
        
    })
}
export const reqAddtoCardList = (skuId,skuNum) => {
    return requests({
        url:`/cart/addToCart/${skuId}/${skuNum}`,
        method:'post'
    })
}

export const reqCartList = () => {
    return requests({
        url:'/cart/cartList',
        method:'get'
    })
}
export const deleteCartList = (skuId) => {
    return requests({
        url:`/cart/deleteCart/${skuId}`,
        method:'delete'
    })
}
export const changeGoodCheck = (skuId,isChecked) => {
    return requests({
        url:`/cart/checkCart/${skuId}/${isChecked}`,
        method:'get'
    })
}

export const reqCode = (phone) => {
    return requests({
        url:`/user/passport/sendCode/${phone}`,
        method:'get'
    })
}
export const reqRegister = (phone,password,code) => {
    console.log("请求参数是，",phone,password,code)
    return requests({
        url:'/user/passport/register',
        method:'Post',
        data:{
            phone,
            password,
            code
        }
    })
}
export const reqLogin = (phone,password) => {
    return requests({
        url:'/user/passport/login',
        method:'post',
        data:{
            phone,
            password
        }
    })
}
export const reqUser = () => {
    return requests({
        url:'/user/passport/auth/getUserInfo',
        method:'get'
    })
}
export const reqLogout = () => {
    return requests({
        url:'/user/passport/logout',
        method:'get'
    })
}
// 获取用户地址信息
export const reqUserAddress = () => {
    return requests({
        url:'/user/userAddress/auth/findUserAddressList',
        method:'get'
    })
}
export const reqOrderInfo = () => {
    return requests({
        url:'/order/auth/trade',
        method:'get'
    })
}
// 提交订单
export const reqSubmitOrder = (data,tradeNo) => {
    console.log("data是",data)
    console.log("tradeNo是",tradeNo)
    return requests({
        url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
        method:'post',
        data:data
    })
}
// 获取订单支付信息
export const reqPayMentInfo = (orderId) => {
    return requests({
        url:`/payment/weixin/createNative/${orderId}`,
        method:'get'
    })
}
// 获取订单支付状态
export const reqPayStatus  = (orderId) => {
    return requests({
        url:`/payment/weixin/queryPayStatus/${orderId}`,
        method:'get'
    })
}

// 获取订单支付列表
export const reqPayList = (page,limit) => {
    console.log("请求参数是",page,limit)
    
    return requests({
        url:`/order/auth/${page}/${limit}`,
        method:'get'
    })
}