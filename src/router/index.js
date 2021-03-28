import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginByPwd from "../components/LoginByPwd.vue";
import LoginByCode from "@/components/LoginByCode";
import Index from "@/components/index";
import Home from "@/components/home/home";
import CollectionAdd from "@/components/volunteer/collection/add";
import VolunteerIndex from "@/components/volunteer/index";
import VolunteerList from "@/components/volunteer/collection/list";
import ThingList from "@/components/volunteer/things/thingList"
import MyCollection from "@/components/volunteer/collection/receive/list"
import UpdateCollection from "@/components/volunteer/collection/update";
import ReceiveThingList from "@/components/volunteer/collection/receive/thingList"

import StudentHelpIndex from "@/components/help/index"
import StudentHelpAdd from "@/components/help/add"
import StudentHelpReqList from "@/components/help/req/list"
import StudentHelpReceiveList from "@/components/help/receive/list"
import StudentHelpUpdate from "@/components/help/update"

import TeachNeed from "@/components/teach/need/index.vue"
import TeachNeedAdd from "@/components/teach/need/add/need.vue"
import TeachNeedStep1 from "@/components/teach/need/add/step1.vue"
import TeachNeedStep2 from "@/components/teach/need/add/step2.vue"
import TeachNeedStep3 from "@/components/teach/need/add/step3.vue"
import TeachNeedUpdate from "@/components/teach/need/update/need.vue"
import TeachNeedUpdateStep1 from "@/components/teach/need/update/step1.vue"
import TeachNeedUpdateStep2 from "@/components/teach/need/update/step2.vue"
import TeachNeedUpdateStep3 from "@/components/teach/need/update/step3.vue"
import TeachNeedShow from "@/components/teach/need/show"
import TeachNeedDetail from "@/components/teach/need/detail/detail"
import TeachMyNeed from "@/components/teach/need/owner/need"
import TeachNeedGet from "@/components/teach/need/get/get"
import TeachNeedGetDetail from "@/components/teach/need/get/detail"
import TeachNeedSendDetail from "@/components/teach/need/get/cancel"
import TeachNeedRecommend from "@/components/teach/need/owner/recommend"

import TeachResume from "@/components/teach/resume/index.vue"
import TeachResumeAdd from "@/components/teach/resume/add/resume.vue"
import TeachResumeStep1 from "@/components/teach/resume/add/step1.vue"
import TeachResumeStep2 from "@/components/teach/resume/add/step2.vue"
import TeachResumeStep3 from "@/components/teach/resume/add/step3.vue"
import TeachResumeUpdate from "@/components/teach/resume/update/resume.vue"
import TeachResumeUpdateStep1 from "@/components/teach/resume/update/step1.vue"
import TeachResumeUpdateStep2 from "@/components/teach/resume/update/step2.vue"
import TeachResumeUpdateStep3 from "@/components/teach/resume/update/step3.vue"
import TeachResumeShow from "@/components/teach/resume/show.vue"
import TeachResumeDetail from "@/components/teach/resume/detail/detail"
import TeachMyResume from "@/components/teach/resume/owner/resume"
import TeachResumeGet from "@/components/teach/resume/get/get"
import TeachResumeGetDetail from "@/components/teach/resume/get/detail"
import TeachResumeSendDetail from "@/components/teach/resume/get/cancel"
import TeachResumeRecommend from "@/components/teach/resume/owner/recommend"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        component: LoginByPwd,
    },
    {
        path: "/loginByCode",
        component: LoginByCode,
    },
    {
        path: "/index",
        component: Index,
        children: [
            {path: "", component: Home},
            {path: "/volunteer/index", component: VolunteerIndex},
            {path: "/student/volunteer/collections",component: VolunteerList},
            {path: "/student/donate/things",component: ThingList},
            {path: "/collection/receive" , component: MyCollection},
            {path: "/get/receive/things",component: ReceiveThingList},
            {path: "/student/help",component: StudentHelpIndex},
            {path: "/student/help/list",component: StudentHelpReqList},
            {path: "/student/help/receive",component: StudentHelpReceiveList},
			{path: "/teach/need",component: TeachNeed},
			{path: "/teach/need/show",component: TeachNeedShow},
			{path: "/teach/need/get",component: TeachNeedGet},
			{path: "/teach/need/recommend",component: TeachNeedRecommend},
			{path: "/teach/resume",component: TeachResume},
			{path: "/teach/resume/show",component: TeachResumeShow},
			{path: "/teach/resume/get",component: TeachResumeGet},
			{path: "/teach/resume/recommend",component: TeachResumeRecommend},
			
        ]
    },
    {
        path: "/update/collection",
        component: UpdateCollection
    },
    {
        path: "/teach/resume/add",
        component: TeachResumeAdd,
        children: [
            {path: '', component: TeachResumeStep1},
            {path: 'step1', component: TeachResumeStep1},
            {path: 'step2', component: TeachResumeStep2},
            {path: 'step3', component: TeachResumeStep3},
        ]
    },
	{
		path: "/teach/resume/get/detail",
		component: TeachResumeGetDetail,
	},
	{
		path: "/teach/resume/send/detail",
		component: TeachResumeSendDetail,
	},
	{
	    path: "/teach/resume/update",
	    component: TeachResumeUpdate,
	    children: [
	        {path: '', component: TeachResumeUpdateStep1},
	        {path: 'step1', component: TeachResumeUpdateStep1},
	        {path: 'step2', component: TeachResumeUpdateStep2},
	        {path: 'step3', component: TeachResumeUpdateStep3},
	    ]
	},
    {
        path: "/teach/need/add",
        component: TeachNeedAdd,
        children: [
            {path: '', component: TeachNeedStep1},
            {path: 'step1', component: TeachNeedStep1},
            {path: 'step2', component: TeachNeedStep2},
            {path: 'step3', component: TeachNeedStep3},
        ]
    },
	{
		path: "/teach/my/need",
		component: TeachMyNeed,
	},
	{
		path: "/teach/need/get/detail",
		component: TeachNeedGetDetail,
	},
	{
		path: "/teach/need/send/detail",
		component: TeachNeedSendDetail,
	},
	{
	    path: "/teach/need/update",
	    component: TeachNeedUpdate,
	    children: [
	        {path: '', component: TeachNeedUpdateStep1},
	        {path: 'step1', component: TeachNeedUpdateStep1},
	        {path: 'step2', component: TeachNeedUpdateStep2},
	        {path: 'step3', component: TeachNeedUpdateStep3},
	    ]
	},
	{
		path:"/teach/my/resume",
		component: TeachMyResume,
	},
    {
        path: "/student/help/add",
        component: StudentHelpAdd
    },
    {
        path: "/student/help/update",
        component: StudentHelpUpdate
    },
    {
        path: "/collection/add",
        component: CollectionAdd
    },
	{
		path: "/need/detail",
		component: TeachNeedDetail,
	},
	{
		path: "/resume/detail",
		component: TeachResumeDetail,
	},
]

const router = new VueRouter({
    routes
})

router.beforeEach(async (to, from, next) => {
    return next();
    //无需登录
    // if (to.path == '/register' || to.path == '/login' || to.path == '/forgetPass')
    //     return next()
    // //判断登录---获取user_session
    // var prefix="user_session="
    // let userSession = document.cookie.indexOf(prefix);
    // if (userSession != null) {   //已登录
    //     return next()
    // } else {        //未登录定向到登录页面
    //     return next('/login')
    // }
})

export default router
