<template>
  <div>
    <div class="help-card" @click="dialogFormVisible = true">
      <div class="card-head">{{ studentHelp.ademecy }} {{ studentHelp.subject }}</div>
      <div class="card-content"><span class="content-span">学习现状</span>{{ studentHelp.condiction }}</div>
      <div class="card-content"><span class="content-span">帮助请求</span>{{ studentHelp.helpReq }}
      </div>
      <div class="card-bottom">
        <el-tag>时薪：{{ studentHelp.salary }}</el-tag>
      </div>
    </div>
    <div v-if="dialogFormVisible">
      <el-dialog title="发送内容" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item class="must" label="微信号" :label-width="formLabelWidth">
            <el-input class="s-mini-input" v-model="form.wechat" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="must" label="学习成绩" :label-width="formLabelWidth">
            <el-input class="s-mini-input" v-model="form.condiction" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="must" label="教学方法" prop="showSelf" :label-width="formLabelWidth">
            <el-input
                class="s-mid-input"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 100}"
                placeholder="你能够给予哪方面的帮助"
                v-model="form.helpMethod">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="send">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "helpCard",
  data: function () {
    return {
      studentHelp: {
        ademecy: "计算机学院",
        subject: "高数一",
        condiction: "数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差" +
            "数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差" +
            "数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差" +
            "数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差数学很差",
        helpReq: "来个数学好的同学来个数学好的同学来个数学好的同学来个数学好的同学来个数学好的同学来个数学好的同学" +
            "来个数学好的同学来个数学好的同学来个数学好的同学来个数学好的同学来个数学好的同学来个数学好的同学" +
            "来个数学好的同学来个数学好的同学来个数学好的同学来个数学好的同学来个数学好的同学来个数学好的同学" +
            "来个数学好的同学来个数学好的同学来个数学好的同学来个数学好的同学来个数学好的同学来个数学好的同学",
        salary: 188,
      },
      form: {
        helpId: 1,
        condiction: "",
        helpMethod: "",
        wechat: ""
      },
      formLabelWidth: '120px',
      dialogFormVisible: false,
    }
  },
  methods: {
    send: function () {
      this.dialogFormVisible = false;
      //todo 发送请求
    }
  }
}
</script>

<style scoped>
.help-card {
  margin-right: 30px;
  margin-left: 30px;
  /*height: 200px;*/
  width: 400px;
  /*background-color: #fafafa;*/
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.s-mini-input {
  width: 250px !important;
}
.s-mid-input{
  width: 400px !important;
}
.content-span {
  font-size: 16px;
  font-weight: bold;
  color: #404040;
  display: inline-block;
  margin-right: 4px;
}

div .help-card:hover {
  background-color: #f6f6f6;
}
.s-mini-input {
  width: 250px !important;
}
.s-mid-input{
  width: 400px !important;
}
.card-head {
  height: 50px;
  margin-left: 20px;
  text-align: left;
  line-height: 50px;
  font-weight: bold;
  font-size: 20px;
}

.card-content {
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 8px;
  color: #8c939d;
  height: 100px;
  line-height: 20px;
  overflow: hidden;
}

.card-content:hover {
  height: 100%;
}

.card-bottom {
  padding-left: 20px;
  padding-right: 20px;
}

.el-tag {
  margin-right: 5px;
  margin-bottom: 10px;
}
</style>