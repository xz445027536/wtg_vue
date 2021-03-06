import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//引入reset.css和iconfont.css
import './assets/style/reset.css'
import './assets/style/iconfont.css'
//引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入轮播图样式
import 'swiper/dist/css/swiper.css'
//使用轮播图插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
Vue.prototype.axios=axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
