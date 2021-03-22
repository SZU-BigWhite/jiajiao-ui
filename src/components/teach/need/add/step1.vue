<template>
  <div class="step1">
    <!-- element表单组件 -->
    <el-form label-position="left" label-width="100px" :model="parentDetail" :rules="parentDetailRules">
      <el-form-item class="must" label="姓名" prop="name">
        <el-input class="s-name-input" v-model="parentDetail.name"></el-input>
      </el-form-item>
      <el-form-item class="must" label="微信号" prop="wechat">
        <el-input class="s-wechat-input" v-model="parentDetail.wechat"></el-input>
      </el-form-item>

      <el-form-item class="must" label="年级" prop="studentClass">
        <el-select style="width: 130px" v-model="parentDetail.studentClass" placeholder="请选择年级">
          <el-option v-for="item in sAbleClass" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="must" label="位置" prop="location">
        <el-input class="s-name-input" v-model="parentDetail.location"></el-input>
      </el-form-item>
      <el-form-item class="must" label="达到时间" prop="arriveHours">
        <el-input placeholder="到深大的时间" class="s-arriveHours-input" v-model="parentDetail.arriveHours"></el-input> 分钟
      </el-form-item>
      <el-form-item class="must" label="家长态度" prop="showSelf">
        <el-input
            type="textarea"
            autosize
            placeholder="家长对孩子的态度和管教程度"
            v-model="parentDetail.teachBySelf">
        </el-input>
      </el-form-item>
    </el-form>

  </div>
</template>


<script>
import store from "@/store";

export default {
  name: 'step1',
  components: {
    // 'address-select' : addressSelect
  },
  data: function () {
    return {
      studentDetail: {
        grade: 0,
        name: '',
        sex: null,
        wechat: '',
        motto: '',     //座右铭
        tags: [],       //性格
        hobby: [],      //爱好
      },
      parentDetail: {
        name: '',
        wechat: '',
        studentClass:'',
        location:'',
        arriveHours:null,
        teachBySelf:''
      },
      sAbleClass: ['一年级','二年级','三年级','四年级','五年级','六年级', '初一', '初二', '初三', '高一', '高二', '高三'],
      parentDetailRules: {
      },
    };
  },
  watch: {
    studentDetail: function (){
      store.commit('setStudentDetail',this.studentDetail)
    }
  },
  methods: {
    handleClose(tag) {
      this.studentDetail.tags.splice(this.studentDetail.tags.indexOf(tag), 1);
    },
    handleCloseHobby(tag){
      this.studentDetail.hobby.splice(this.studentDetail.hobby.indexOf(tag), 1);
    },

    showInput() {
      if(this.studentDetail.tags.length>=4){
        this.$message.warning("最多设置4个标签")
        return ;
      }
      this.tagVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    showHobbyInput() {
      if(this.studentDetail.hobby.length>=4){
        this.$message.warning("最多设置4个标签")
        return ;
      }
      this.hobbyVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveHobbyInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let tagValue = this.tagValue;
      if (tagValue) {
        this.studentDetail.tags.push(tagValue);
      }
      this.tagVisible = false;
      this.tagValue = '';
    },
    handleHobbyInputConfirm() {
      let tagValue = this.hobbyValue;
      if (tagValue) {
        this.studentDetail.hobby.push(tagValue);
      }
      this.hobbyVisible = false;
      this.hobbyValue = '';
    },

  },
}
</script>
<style scoped>
.step {
  margin-bottom: 30px;
}

.step1 {
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

.input-new-tag {
  width: 90px!important;
  /*margin-left: 10px;*/
  vertical-align: bottom;
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
