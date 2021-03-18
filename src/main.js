import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Card from "@/components/card";
import VolunteerCollectionCard from "@/components/volunteer/collection/card"

import './plugins/element.js'
// 添加全局样式
import './assets/css/global.css'
// 添加iconFont
import './assets/font/iconfont.css'
import './assets/css/common.less';
import "font-awesome/css/font-awesome.css";

//导入axios
import axios from 'axios'
//挂在axios
Vue.prototype.$http  = axios.create({
  baseURL:  "http://localhost:8888/",
  withCredentials:  true,
  timeout:  5000,
});

//加入存储数据
import store from "@/store";

Vue.config.productionTip = false
Vue.component(Card.name,Card)
Vue.component(VolunteerCollectionCard.name,VolunteerCollectionCard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
