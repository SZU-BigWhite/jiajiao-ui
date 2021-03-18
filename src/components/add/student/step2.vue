<template>
  <div class="step2">

    <el-form label-position="left" label-width="120px" :model="teachPlan" :rules="teachPlanRules">

      <el-form-item label="空闲时间" prop="timeList">
        <el-tag
            :key="tag"
            v-for="tag in teachPlan.timeList"
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
      <el-form-item class="must" label="期望时薪" prop="salary">
        <el-input class="s-salary-input" v-model.number="teachPlan.salary"></el-input>
        元/小时
      </el-form-item>
      <el-form-item class="must" label="可辅导年级" prop="academyId">
        <el-select style="width: 130px" v-model="teachPlan.ableClass" placeholder="请选择年级">
          <el-option v-for="item in sAbleClass" :label="item" :value="item"></el-option>
        </el-select>
        及以下
      </el-form-item>

      <el-form-item label="可辅导科目" prop="wechat">
        <div>
          <el-checkbox-group v-model="teachPlan.subjectList" size="small">
            <el-checkbox-button v-for="subject in sSubject" :label="subject" :key="subject">{{ subject }}
            </el-checkbox-button>
          </el-checkbox-group>
        </div>
      </el-form-item>

      <el-form-item class="must" label="教学目标" prop="salary">
        <el-input
            type="textarea"
            autosize
            placeholder="能够学生带来怎样的提升"
            v-model="teachPlan.teachGoal">
        </el-input>
      </el-form-item>
      <el-form-item class="must" label="教学重点" prop="salary">
        <el-input
            type="textarea"
            autosize
            placeholder="教学的时候着重思维，还是方法，还是其他的"
            v-model="teachPlan.teachStress">
        </el-input>
      </el-form-item>
      <el-form-item class="must" label="教学反馈" prop="salary">
        <el-input
            type="textarea"
            autosize
            placeholder="每次家教完后，会跟家长沟通什么内容呢"
            v-model="teachPlan.feedback">
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
      teachPlan: {
        timeList: [],      //空闲时间 周一：上午
        salary: null,
        ableClass: "",   //小学，初/高一-三
        subjectList: [],       //科目
        teachGoal: '',
        teachStress: '',
        feedback: '',
      },
      sSubject: ['作业辅导', '语文', '数学', '英语', '历史', '地理', '生物', '政治', '物理', '化学', '音乐', '美术', '舞蹈', '计算机', '体育'],
      sAbleClass: ['小学', '初一', '初二', '初三', '高一', '高二', '高三'],
      dialogFormVisible: false,
      date: {
        week: '',
        time: '',
      },
      teachPlanRules: {}
    }
  },
  watch: {
    teachPlan: {
      handler: function () {
        store.commit('addTeachPlan', {teachPlan:this.teachPlan});
      },
      deep: true
    }
  },

  methods: {
    handleClose(tag) {
      this.teachPlan.timeList.splice(this.teachPlan.timeList.indexOf(tag), 1);
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
      this.teachPlan.timeList.push(this.date.week + " : " + this.date.time);
      this.date.week = "";
      this.date.time = "";
    },

  },
  created: function () {
    Object.assign(this.teachPlan, store.state.teachPlan);
  }
}
</script>
<style scoped>
@import "../../../assets/css/step-css.css";

.step2 {
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
  width: 130px !important;
}
</style>
