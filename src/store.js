import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    studentDetail: {},
    teachPlan:{},
    educationDetail:{},
    test: 9096,
}

const mutations = {
    add(state){
        state.test++;
    },
    addStudentDetail(state,payload){
        state.studentDetail=payload.studentDetail;
    },
    addTeachPlan(state,payload){
        state.teachPlan=payload.teachPlan;
    },
    addEducationDetail(state,payload){
        state.educationDetail=payload.educationDetail;
    }
}

export default new Vuex.Store({
    state,
    mutations
})
