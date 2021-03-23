import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginByPwd from "../components/LoginByPwd.vue";
import LoginByCode from "@/components/LoginByCode";
import Show from "@/components/home/show"
import AddStudentResume from "@/components/add/student/resume";
import step1 from "@/components/add/student/step1";
import step2 from "@/components/add/student/step2";
import step3 from "@/components/add/student/step3";
import Index from "@/components/index";
import Home from "@/components/home/home";
import Resume from "@/components/detail/student/resume";
import Need from "@/components/detail/parent/need";
import CollectionAdd from "@/components/volunteer/collection/add";
import volunteerCard from "@/components/volunteerCard";
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

import TeachResume from "@/components/teach/resume/index.vue"
import TeachResumeAdd from "@/components/teach/resume/add/resume.vue"
import TeachResumeStep1 from "@/components/teach/resume/add/step1.vue"
import TeachResumeStep2 from "@/components/teach/resume/add/step2.vue"
import TeachResumeStep3 from "@/components/teach/resume/add/step3.vue"
import TeachResumeShow from "@/components/teach/resume/show.vue"
import TeachResumeDetail from "@/components/teach/resume/detail"


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
            {path: "/show", component: Show},
            {path: "/show/volunteer", component: volunteerCard},
            {path: "/volunteer/index", component: VolunteerIndex},
            {path: "/student/volunteer/collections",component: VolunteerList},
            {path: "/student/donate/things",component: ThingList},
            {path: "/collection/receive" , component: MyCollection},
            {path: "/get/receive/things",component: ReceiveThingList},
            {path: "/student/help",component: StudentHelpIndex},
            {path: "/student/help/list",component: StudentHelpReqList},
            {path: "/student/help/receive",component: StudentHelpReceiveList},
			{path: "/teach/need",component: TeachNeed},
			{path: "/teach/resume",component: TeachResume},
			{path: "/teach/resume/show",component: TeachResumeShow}
			
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
        path: "/detail/student",
        component: Resume,
    },
	{
		path: "/resume/detail",
		component: TeachResumeDetail,
	},
    {
        path: "/detail/parent",
        component: Need,
    }
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
