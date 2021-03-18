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
import AddParentNeed from "@/components/add/parent/need";
import pstep1 from "@/components/add/parent/step1";
import pstep2 from "@/components/add/parent/step2";
import pstep3 from "@/components/add/parent/step3";
import Need from "@/components/detail/parent/need";
import Help from "@/components/add/student/help";
import HelpCard from "@/components/helpCard";
import Volunteer from "@/components/add/student/volunteer";
import volunteerCard from "@/components/volunteerCard";
import VolunteerIndex from "@/components/volunteer/index";
import VolunteerList from "@/components/volunteer/collection/list";

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
            {path: "/show/help", component: HelpCard},
            {path: "/show/volunteer", component: volunteerCard},
            {path: "/volunteer/index", component: VolunteerIndex},
            {path: "/student/volunteer/collections",component: VolunteerList}
        ]
    },
    {
        path: "/add/student/resume",
        component: AddStudentResume,
        children: [
            {path: '', component: step1},
            {path: 'step1', component: step1},
            {path: 'step2', component: step2},
            {path: 'step3', component: step3},
        ]
    },
    {
        path: "/add/parent/need",
        component: AddParentNeed,
        children: [
            {path: '', component: pstep1},
            {path: 'step1', component: pstep1},
            {path: 'step2', component: pstep2},
            {path: 'step3', component: pstep3},
        ]
    },
    {
        path: "/student/help",
        component: Help
    },

    {
        path: "/student/volunteer",
        component: Volunteer
    },
    {
        path: "/detail/student",
        component: Resume,
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
