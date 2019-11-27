import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./router"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import { Swipe, SwipeItem } from 'vant'
import "vant/lib/index.css"
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min'
import { PullRefresh } from 'vant';
// import { Loading } from 'vant';
import axios from 'axios';
import { ContactCard, ContactList, ContactEdit } from 'vant';
Vue.use(ContactCard);
Vue.use(ContactList);
Vue.use(ContactEdit);

// 全局注册
Vue.use(PullRefresh);
// import gg from'../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Swipe).use(SwipeItem)
Vue.prototype.$axios=axios;
Vue.config.productionTip = false
let bus = new Vue()
Vue.prototype.$bus = bus
new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
