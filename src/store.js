import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    studentDetail: {},
    teachPlan:{},
    educationDetail:{},
    test: 9096,
	parentNeedDetail:{},
	parentReqDetail:{},
	parentConditionDetail:{},
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
    },
	addParentNeedDetail(state,payload){
	    state.parentNeedDetail=payload.parentNeedDetail;
	},
	addParentReqDetail(state,payload){
	    state.parentReqDetail=payload.parentReqDetail;
	},
	addParentConditionDetail(state,payload){
	    state.parentConditionDetail=payload.parentConditionDetail;
	},
}

export default new Vuex.Store({
    state,
    mutations
})
