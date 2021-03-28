<template>
  <div class="step1">

    <el-form label-position="left" label-width="100px" :model="parentReqDetail" :rules="parentReqDetailRules">

      <el-form-item label="空闲时间" prop="timeList">
        <el-tag
            :key="tag"
            v-for="tag in parentReqDetail.timeList"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
          {{ tag }}
        </el-tag>
        <el-button class="button-new-tag" size="small" @click="dialogFormVisible = true">+ 添加时间</el-button>

        <div v-if="dialogFormVisible">
          <el-dialog title="选择时间" :visible.sync="dialogFormVisible">
            <el-form :model="date">
              <el-form-item label="星期" label-width="120px">
                <el-select v-model="date.week" placeholder="选择星期">
                  <el-option label="星期一" value="星期一"></el-option>
                  <el-option label="星期二" value="星期二"></el-option>
                  <el-option label="星期三" value="星期三"></el-option>
                  <el-option label="星期四" value="星期四"></el-option>
                  <el-option label="星期五" value="星期五"></el-option>
                  <el-option label="星期六" value="星期六"></el-option>
                  <el-option label="星期日" value="星期日"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="时间" label-width="120px">
                <el-select v-model="date.time" placeholder="请选择时间">
                  <el-option label="上午" value="上午"></el-option>
                  <el-option label="下午" value="下午"></el-option>
                  <el-option label="晚上" value="晚上"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="confirmTime">确 定</el-button>
            </div>
          </el-dialog>
        </div>
      </el-form-item>


      <el-form-item class="must" label="时薪" prop="salary">
        <el-input placeholder="能接收的最高时薪" class="s-salary-input" v-model.number="parentReqDetail.salary"></el-input>
        元/小时
      </el-form-item>

      <el-form-item class="must" label="辅导次数" prop="salary">
        <el-input placeholder="每周希望辅导次数" class="s-salary-input" v-model.number="parentReqDetail.times"></el-input>
        次
      </el-form-item>
      <el-form-item class="must" label="平均时长" prop="salary">
        <el-input placeholder="每次辅导时长" class="s-salary-input" v-model.number="parentReqDetail.duration"></el-input>
        小时
      </el-form-item>
      <el-form-item class="must" label="学历要求" prop="education">
        <el-select style="width: 250px" v-model.number="parentReqDetail.education" placeholder="要求最低学历">
          <el-option v-for="(item,key) in sEducation" :label="item" :value="key"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="辅导科目" prop="wechat">
        <div>
          <el-checkbox-group v-model="parentReqDetail.subjectList" size="small">
            <el-checkbox-button v-for="subject in sSubject" :label="subject" :key="subject">{{ subject }}
            </el-checkbox-button>
          </el-checkbox-group>
        </div>
      </el-form-item>

      <el-form-item class="must" label="辅导要求" prop="salary">
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 100}"
            placeholder="对老师的要求,希望老师在讲课的时候,应该以什么样的态度,怎样的一个方式去教孩子"
            v-model="parentReqDetail.teachReq">
        </el-input>
      </el-form-item>
    </el-form>


  </div>
</template>
<script>
import store from "@/store";

export default {
  name: 'step2',
  data: function () {
    return {
      parentReqDetail: {
        timeList: [],      //空闲时间 周一：上午
        salary: null,
        duration: null,
        times: null,
        subjectList: [],       //科目
        education: null,   //学历
        teachReq: null
      },
      sEducation: ['本科', '研究生', '博士生'],
      sSubject: ['作业辅导', '语文', '数学', '英语', '历史', '地理', '生物', '政治', '物理', '化学', '音乐', '美术', '舞蹈', '计算机', '体育'],
      sAbleClass: ['小学', '初一', '初二', '初三', '高一', '高二', '高三'],
      dialogFormVisible: false,
      date: {
        week: '',
        time: '',
      },
      parentReqDetailRules: {}
    }
  },
  watch: {
    parentReqDetail: {
      handler() {
        console.log(store.state.parentReqDetail)
        store.commit('addParentReqDetail', {parentReqDetail: this.parentReqDetail})
      },
      deep: true
    }
  },

  methods: {
    handleClose(tag) {
      this.parentReqDetail.timeList.splice(this.parentReqDetail.timeList.indexOf(tag), 1);
    },
    confirmTime: function () {

      if (this.date.week == "") {
        this.$message.error('请选择星期');
        return;
      }
      if (this.date.time == "") {
        this.$message.error('请选择时间');
        return;
      }

      this.dialogFormVisible = false;
      this.parentReqDetail.timeList.push(this.date.week + " : " + this.date.time);
      this.date.week = "";
      this.date.time = "";
    },

  },
  created: function () {
    Object.assign(this.parentReqDetail, store.state.parentReqDetail);
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

.el-form-item {
  margin-bottom: 22px !important;
}

.s-salary-input {
  width: 180px !important;
}
.must label:after {
  content: " *";
  color: red;
}

.must label:before {
  content: "" !important;
}

.el-tag {
  margin-right: 10px !important;
}

.button-new-tag {
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px !important;
  /*margin-left: 10px;*/
  vertical-align: bottom;
}
</style>
