<template>
  <div class="step3">
    <el-form label-position="left" label-width="100px" :model="educationDetail"
             :rules="educationDetailRules">
      <el-form-item class="must" label="成绩情况" prop="showSelf">
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 100}"
            placeholder="孩子现在的成绩情况，薄弱科等"
            v-model="educationDetail.gradeCondiction">
        </el-input>
      </el-form-item>

      <el-form-item class="must" label="学习状态" prop="learnMethods">
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 100}"
            placeholder="孩子现在的学习状态，对学习是怎样的一个态度"
            v-model="educationDetail.learnCondiction">
        </el-input>
      </el-form-item>
      <el-form-item class="must" label="家教反馈" prop="showSelf">
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 100}"
            placeholder="每次家教完后，希望得到家教老师怎样的一个反馈"
            v-model="educationDetail.expectFeedback">
        </el-input>
      </el-form-item>
      <el-form-item class="must" label="目标" prop="showSelf">
        <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 100}"
            placeholder="整个家教下来后，希望达到怎样的一个目标/效果"
            v-model="educationDetail.expectGoal">
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
        learnCondiction:'',
        expectFeedback:'',
        expectGoal:'',
        gradeCondiction:'',
      },
      educationDetailRules: {

      }
    }
  },
  methods: {},
}
</script>
<style>
@import "../../../assets/css/step-css.css";

.step3 {
  box-shadow: 0 2px 4px rgba(0, 125, 255, .22), 0 0 6px rgba(0, 125, 255, .14);
  padding: 40px 100px 30px 100px;
  margin-right: 100px;
  margin-bottom: 25px;
  border-radius: 5px;
}
.s-wechat-input {
  width: 250px !important;
}



</style>
