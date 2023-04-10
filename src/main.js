import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Carsouel from './components/Carsouel'
import TypeNav from '../src/components/TypeNav'
import Pagination from '../src/components/Pagination'
import store from './store/index'
import * as API from '@/api'
import '@/mock/mockServer'
import "swiper/css/swiper.min.css";
import { Button, Select, MessageBox, Message } from 'element-ui';
import VueLazyload from 'vue-lazyload'
import '@/plugins/validate.js'


// or with options
const loadimage = require('@/assets/loading.gif')

Vue.use(VueLazyload, {
  loading: loadimage,
})
Vue.component('Carsouel',Carsouel)
Vue.component('TypeNav',TypeNav)
Vue.component('Pagination',Pagination)
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$message = Message
new Vue({
  beforeCreate(){
    // 全局事件总线
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  render: h => h(App),
  router,
  store
  // 组件身上就有$store属性
}).$mount('#app')
