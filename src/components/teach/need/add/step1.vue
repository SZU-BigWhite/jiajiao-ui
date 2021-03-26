<template>
  <div class="step1">
    <!-- element表单组件 -->
    <el-form label-position="left" label-width="100px" :model="parentNeedDetail" :rules="parentNeedDetailRules">
      <el-form-item class="must" label="姓名" prop="name">
        <el-input class="s-name-input" v-model="parentNeedDetail.name" placeholder="称呼"></el-input>
      </el-form-item>
      <el-form-item class="must" label="微信号" prop="wechat">
        <el-input class="s-wechat-input" v-model="parentNeedDetail.wechat" placeholder="微信号或手机号"></el-input>
      </el-form-item>

      <el-form-item class="must" label="年级" prop="studentClass">
        <el-select style="width: 130px" v-model="parentNeedDetail.studentClass" placeholder="请选择年级">
          <el-option v-for="item in sAbleClass" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="must" label="位置" prop="location">
        <el-input class="s-name-input" v-model="parentNeedDetail.location" placeholder="上门家教所住位置"></el-input>
      </el-form-item>
      <el-form-item class="must" label="达到时间" prop="arriveHours">
        <el-input placeholder="到深大的时间" class="s-arriveHours-input" v-model.number="parentNeedDetail.arriveHours"></el-input> 分钟
      </el-form-item>
      <el-form-item class="must" label="家长态度" prop="showSelf">
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 100}"
            placeholder="家长对孩子学习的管教程度,平时抽出多少时间教育孩子"
            v-model="parentNeedDetail.teachBySelf">
        </el-input>
      </el-form-item>
    </el-form>

  </div>
</template>


<script>
import store from "@/store";

export default {
  name: 'step1',
  
  data: function () {
    return {
      parentNeedDetail: {
        name: '',
        wechat: '',
        studentClass:'',
        location:'',
        arriveHours:null,
        teachBySelf:''
      },
      sAbleClass: ['一年级','二年级','三年级','四年级','五年级','六年级', '初一', '初二', '初三', '高一', '高二', '高三'],
      parentNeedDetailRules: {
      },
    };
  },
  created: function () {
    Object.assign(this.parentNeedDetail, store.state.parentNeedDetail);
  },
  watch: {
    parentNeedDetail:{
      handler(){
        console.log(store.state.parentNeedDetail)
        store.commit('addParentNeedDetail',{parentNeedDetail:this.parentNeedDetail})
      },
      deep:true
    }
  },
  methods: {
  },
}
</script>
<style scoped>

.step {
  margin-bottom: 30px;
}

.step1 {
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 125, 255, .22), 0 0 6px rgba(0, 125, 255, .14);
  padding: 40px 100px 30px 100px;
  margin-right: 100px;
  margin-bottom: 25px;
  border-radius: 5px;
}

.el-input {
  /*width: white;*/
}

.el-form-item{
  width: 500px;
}
.el-form-item label {
  font-size: 18px;
}

.must label:after {
  content: " *";
  color: red;
}

.must label:before {
  content: "" !important;
}

.s-name-input {
  width: 250px !important;
  left: 0px;
  margin-right: 20px;
}
.s-arriveHours-input{
  width: 130px !important;
  left: 0px;
  margin-right: 20px;
}

.s-wechat-input {
  width: 250px !important;
}

.s-motto-input {
  width: 450px !important;
}
.input-new-tag {
  width: 90px!important;
  /*margin-left: 10px;*/
  vertical-align: bottom;
}
.el-tag  {
  margin-right: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}


.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.s-grade-input {
  width: 250px !important;
}



</style>
