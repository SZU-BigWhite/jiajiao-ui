<template>
  <div class="step1">
    <el-form label-position="left" label-width="100px" :model="parentConditionDetail"
             :rules="parentConditionDetailRules">
      <el-form-item class="must" label="成绩情况" prop="showSelf">
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 100}"
            placeholder="孩子现在的成绩情况，比较差的科目,以及原因"
            v-model="parentConditionDetail.gradeCondiction">
        </el-input>
      </el-form-item>

      <el-form-item class="must" label="学习状态" prop="learnMethods">
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 100}"
            placeholder="孩子的学习状态，对学习是怎样的一个态度,对新知识的接收速度等"
            v-model="parentConditionDetail.learnCondiction">
        </el-input>
      </el-form-item>
      <el-form-item class="must" label="家教反馈" prop="showSelf">
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 100}"
            placeholder="每次家教完后，希望得到家教老师反馈给家长哪些信息"
            v-model="parentConditionDetail.expectFeedback">
        </el-input>
      </el-form-item>
      <el-form-item class="must" label="目标" prop="showSelf">
        <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 100}"
            placeholder="整个家教下来后，希望达到怎样的一个目标/效果"
            v-model="parentConditionDetail.expectGoal">
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
      parentConditionDetail: {
        learnCondiction:'',
        expectFeedback:'',
        expectGoal:'',
        gradeCondiction:'',
      },
      parentConditionDetailRules: {

      }
    }
  },
  methods: {},
  watch: {
    parentConditionDetail:{
      handler(){
        console.log(store.state.parentConditionDetail)
        store.commit('addParentConditionDetail',{parentConditionDetail:this.parentConditionDetail})
      },
      deep:true
    }
  },
  created: function () {
    Object.assign(this.parentConditionDetail, store.state.parentConditionDetail);
  },
}
</script>
<style scoped>
@import "/assets/css/step-css.css";

.step1 {
  display: flex;
  justify-content: center;
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
