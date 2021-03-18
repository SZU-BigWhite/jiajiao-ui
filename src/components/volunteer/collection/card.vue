<template>
  <div>
    <div class="volunteer-card"  @click="dialogFormVisible = true">
      <div class="card-head">{{ volunteer.name }} </div>
      <div class="card-content">{{ volunteer.content }}</div>
      <div class="card-bottom">
        <el-tag type="success">收到数量： {{ volunteerVo.count }}</el-tag>
        <el-tag type="danger">结束时间： {{ volunteer.endTime }}</el-tag>
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
import volunteer from "@/components/add/student/volunteer";

export default {
  name: "collectionCard",
  data:function (){
    return  {
      volunteer:{
        name:"计软义工",
        wechat:"wanmf0228",
        content:"回收旧书,用于发放回给新生",
        startTime:"2020-01-01",
        endTime:"2020-012-01",
        createTime:"2019-12-31"
      },
      count:null,
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
  props:['volunteerVo'],
  methods:{
    send: function () {
      this.dialogFormVisible = false;
      //todo 发送请求
    },
  },
  created() {
    this.volunteer=volunteerVo.volunteerCollection
  }
}
</script>

<style scoped>
.volunteer-card {
  margin-right: 30px;
  margin-left: 30px;
  height: 200px;
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

div .volunteer-card:hover {
  background-color: #f6f6f6;
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

.card-bottom {
  padding-left: 20px;
  padding-right: 20px;
}

.el-tag {
  margin-right: 5px;
}
</style>