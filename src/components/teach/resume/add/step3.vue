<template>
	<div class="step1">
	
	  <el-form label-position="left" label-width="120px" :model="educationDetail" :rules="educationDetailRules">
      <el-form-item class="must" label="院校" prop="wechat">
        <el-input class="s-wechat-input" v-model="educationDetail.university"></el-input>
      </el-form-item>
      <el-form-item class="must" label="学院" prop="academyId">
        <el-select style="width: 250px" v-model="educationDetail.academyId" placeholder="请选择学院">
          <el-option v-for="item in sAcademy" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="must" label="最高学历" prop="academyId">
        <el-select style="width: 250px" v-model.number="educationDetail.education" placeholder="请选择学历">
          <el-option v-for="(item,key) in sEducation" :label="item" :value="key"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item class="must" label="学习方法" prop="learnMethods">
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 100}"
            placeholder="考上大学，依靠的是怎样的一个学习方法"
            v-model="educationDetail.learnMethods">
        </el-input>
      </el-form-item>
      <el-form-item class="must" label="个人简介" prop="showSelf">
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 100}"
            placeholder="在这里，你可以总结一下自己，让自己脱颖而出！"
            v-model="educationDetail.showSelf">
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import store from "@/store";

export default {
  name: 'step3',
  data: function () {
    return {
      educationDetail: {
        university:'深圳大学',
        education:null,
        academyId: '',  //学院
        learnMethods: "",       //学习方法
        showSelf:""             //个人简介
      },
      sAcademy: ["师范学院", "人文学院", "外语学院", "数学院", "物理学院", "化学院", "计算机学院", "美术学院", "音乐舞蹈学院", "其他学院"],
      sEducation:['本科','研究生','博士生'],
      educationDetailRules: {

      }
    }
  },
  methods: {},
  watch:{
    educationDetail:{
      handler(){
        store.commit("addEducationDetail",{educationDetail:this.educationDetail})
        console.log(store.state.studentDetail)
        console.log(store.state.teachPlan)
        console.log(store.state.educationDetail)
      },
      deep:true
    }
  },
  created: function (){
    Object.assign(this.educationDetail, store.state.educationDetail);
  }
}
</script>
<style scoped>
@import "/assets/css/step-css.css";

.step1 {
  box-shadow: 0 2px 4px rgba(0, 125, 255, .22), 0 0 6px rgba(0, 125, 255, .14);
  padding: 40px 100px 30px 100px;
  margin-right: 100px;
  margin-bottom: 25px;
  border-radius: 5px;
}
.s-wechat-input {
  width: 250px !important;
}

.el-form-item {
  margin-bottom: 22px !important;
  min-width: 800px;
}


</style>
