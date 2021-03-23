import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ResumeCard from "@/components/teach/resume/card"
import VolunteerCollectionCard from "@/components/volunteer/collection/card"
import ThingCard from "@/components/volunteer/things/thingCard"
import MyCollectionCard from "@/components/volunteer/collection/receive/card"
import ReceiveThingCard from "@/components/volunteer/collection/receive/thingCard"
import HelpCard from "@/components/help/req/helpCard"
import HelpReceiveCard from "@/components/help/receive/card"
import HelpReceiveCards from "@/components/help/receive/cards"


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
Vue.component(ResumeCard.name,ResumeCard)
Vue.component(VolunteerCollectionCard.name,VolunteerCollectionCard)
Vue.component(ThingCard.name,ThingCard)
Vue.component(MyCollectionCard.name,MyCollectionCard)
Vue.component(ReceiveThingCard.name,ReceiveThingCard)
Vue.component(HelpCard.name,HelpCard)
Vue.component(HelpReceiveCard.name,HelpReceiveCard)
Vue.component(HelpReceiveCards.name,HelpReceiveCards)




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
