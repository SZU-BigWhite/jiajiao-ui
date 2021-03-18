<template>
  <div class="step1">
    <!-- element表单组件 -->
    <el-form label-position="left" label-width="98px" :model="studentDetail" :rules="studentDetailRules">
      <el-form-item class="must" label="姓名" prop="name">
        <el-input class="s-name-input" v-model="studentDetail.name"></el-input>
        <el-select style="width: 80px" v-model.number="sexTemp" placeholder="性别">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item class="must" label="微信号" prop="wechat">
        <el-input class="s-wechat-input" v-model="studentDetail.wechat"></el-input>
      </el-form-item>
      <el-form-item class="must" label="高考总分" prop="grade">
        <el-input  class="s-grade-input" v-model.number="studentDetail.grade"></el-input>
      </el-form-item>
      <el-form-item class="must" label="座右铭" prop="motto">
        <el-input class="s-motto-input" v-model="studentDetail.motto"></el-input>
      </el-form-item>
      <el-form-item class="must" label="性格" prop="tags">
        <el-tag
            :key="key"
            v-for="(tag,key) in studentDetail.tags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
          {{ tag }}
        </el-tag>
        <el-input
            class="input-new-tag"
            v-if="tagVisible"
            v-model="tagValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 性格</el-button>
      </el-form-item>
      <el-form-item class="must" label="爱好"  prop="hobby">
        <el-tag
            :key="key"
            v-for="(tag,key) in studentDetail.hobby"
            closable
            :disable-transitions="false"
            @close="handleCloseHobby(tag)">
          {{ tag }}
        </el-tag>
        <el-input
            class="input-new-tag"
            v-if="hobbyVisible"
            v-model="hobbyValue"
            ref="saveHobbyInput"
            size="small"
            @keyup.enter.native="handleHobbyInputConfirm"
            @blur="handleHobbyInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showHobbyInput">+ 爱好</el-button>
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
        grade: null,
        name: '',
        sex: null,
        wechat: '',
        motto: '',     //座右铭
        tags: [],       //性格
        hobby: [],      //爱好
      },
      sexTemp:null,
      tagValue: '',
      tagVisible: false,
      hobbyValue: '',
      hobbyVisible: false,
      studentDetailRules: {
        name: [
          {required: true, message: '请输入姓名', trigger: 'blur'}
        ],
        sex: [
          {required: true, message: '请选择性别', trigger: 'blur'}
        ],
        wechat: [
          {required: true, message: '请输入微信号/手机号', trigger: 'blur'}
        ],
        academyId: [
          {required: true, message: '请选择学院', trigger: 'blur'}
        ],
        motto: [
          {required: true, message: '请输入座右铭', trigger: 'blur'}
        ],
        hobby:[
          {required: true, message: '请添加爱好', trigger: 'blur'}
        ],
        tags:[
          {required: true, message: '请添加性格', trigger: 'blur'}
        ]
      },
    };
  },
  watch: {
    studentDetail: {
      handler(){
        console.log(store.state.studentDetail)
        store.commit('addStudentDetail',{studentDetail:this.studentDetail})
      },
      deep:true
    },
    sexTemp:function (){
      if (this.sexTemp == "男") {
        this.studentDetail.sex=1;
      }else {
        this.studentDetail.sex=2;
      }
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
  created: function () {
    Object.assign(this.studentDetail, store.state.studentDetail);
  },
  beforeRouteLeave: function (to, from, next) {
    if (to.path == '/activePublic/step2') {
      var _this = this;
      this.isAddressTrue = true;
      this.tagsValid = (this.ruleForm.tags.length ? false : true);
      this.$refs.ruleForm.validate(function (valid) {
        (!_this.tagsValid && valid) ? next() : next(false);
      });
    } else {
      next();
    }
  }
}
</script>
<style>
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
  width: 150px !important;
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
