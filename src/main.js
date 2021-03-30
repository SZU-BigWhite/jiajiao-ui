import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VolunteerCollectionCard from "@/components/volunteer/collection/card"
import ThingCard from "@/components/volunteer/things/thingCard"
import MyCollectionCard from "@/components/volunteer/collection/receive/card"
import ReceiveThingCard from "@/components/volunteer/collection/receive/thingCard"
import HelpCard from "@/components/help/req/helpCard"
import HelpReceiveCard from "@/components/help/receive/card"
import HelpReceiveCards from "@/components/help/receive/cards"

import ResumeCard from "@/components/teach/resume/card"
import ResumeComment from "@/components/teach/resume/detail/comment"
import ResumeRecommend from "@/components/teach/resume/detail/recommend"
import ResumeContent from "@/components/teach/resume/detail/content"

import NeedCard from "@/components/teach/need/card"
import NeedComment from "@/components/teach/need/detail/comment"
import NeedRecommend from "@/components/teach/need/detail/recommend"
import NeedContent from "@/components/teach/need/detail/content"

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

//todo 上线该成http://42.193.177.25:8888/
Vue.prototype.$http  = axios.create({
  baseURL:  "http://42.193.177.25:8888/",
  withCredentials:  true,
  timeout:  50000,
});

//加入存储数据
import store from "@/store";

Vue.config.productionTip = false
Vue.component(VolunteerCollectionCard.name,VolunteerCollectionCard)
Vue.component(ThingCard.name,ThingCard)
Vue.component(MyCollectionCard.name,MyCollectionCard)
Vue.component(ReceiveThingCard.name,ReceiveThingCard)
Vue.component(HelpCard.name,HelpCard)
Vue.component(HelpReceiveCard.name,HelpReceiveCard)
Vue.component(HelpReceiveCards.name,HelpReceiveCards)
Vue.component(ResumeCard.name,ResumeCard)
Vue.component(ResumeComment.name,ResumeComment)
Vue.component(ResumeRecommend.name,ResumeRecommend)
Vue.component(ResumeContent.name,ResumeContent)
Vue.component(NeedCard.name,NeedCard)
Vue.component(NeedComment.name,NeedComment)
Vue.component(NeedRecommend.name,NeedRecommend)
Vue.component(NeedContent.name,NeedContent)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
