
const Home = () => import('@/pages/Home/index.vue')
const Login = () => import('@/pages/Login/index.vue')
const Register = () => import('@/pages/Register/index.vue')
const Search = () => import('@/pages/Search/index.vue')
const Detail = () => import('@/pages/Detail/index.vue')
const AddCartSuccess = () => import('@/pages/AddCartSuccess/index')
const ShopCart = () => import('@/pages/ShopCart')
const Trade = () => import('@/pages/Trade')
const Pay = () => import('@/pages/Pay')
const PaySuccess = () => import('@/pages/PaySuccess')
const Center = () => import('@/pages/Center')
const CenterOrder = () => import('@/pages/Center/CenterOrder')
export default [
        
    {
        path: '/home',
        component: Home,
        meta: { showFooter: true },
        name: 'home'
    }, {
        path: '/login',
        component: Login,
        meta: { showFooter: false },
        name: 'login',
        
    },
    {
        path: '/register',
        component: Register,
        meta: { showFooter: false },
        name: 'register'
    }, {
        path: '/search/:keyword?',
        component: Search,
        meta: { showFooter: true },
        name: 'search'
    },
    {
        path: '/detail/:skuId',
        component: Detail,
        name: 'detail'
    },
    {
        path:'/addcartsuccess',
        component:AddCartSuccess,
        name:'addcartsuccess',
       
    },
    {
        path:'/shopcart',
        component:ShopCart,
        name:'shopcart',
        
    },
    {
        path:'/trade',
        component:Trade,
        name:'trade',
        beforeEnter: (to, from, next) => {
            if(from.name=='shopcart'){
                next()
            }else{
                next(false)
            }
        }
        
    },
    {
        path:'/pay',
        component:Pay,
        name:'pay',
        beforeEnter: (to, from, next) => {
            if(from.name=='trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/paysuccess',
        component:PaySuccess,
        name:'paysuccess',
        beforeEnter: (to, from, next) => {
            if(from.name=='pay'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/center',
        component:Center,
        name:'center',
        children:[
            {
                path:'centerorder',
                component:CenterOrder
            },
            {
                 path: '',
                component: CenterOrder
            }
        ]
    },
    {
        path: '*',
        redirect: '/home'
    }
]