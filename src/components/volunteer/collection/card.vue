<template>
  <div>
    <div class="volunteer-card"  @click="dialogFormVisible = true">
      <div class="card-head">{{ volunteer.name }} </div>
      <div class="card-content">{{ volunteer.content }}</div>
      <div class="card-bottom">
        <el-tag type="success">收到数量： {{ count }}</el-tag>
        <el-tag type="danger">结束时间： {{ volunteer.endTime }}</el-tag>
      </div>
    </div>
    <div v-if="dialogFormVisible">
      <el-dialog title="捐赠内容" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item class="must" label="微信号" :label-width="formLabelWidth">
            <el-input class="s-mini-input" v-model="form.wechat" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="must" label="上门时间" :label-width="formLabelWidth">
            <div class="block">
              <el-date-picker
                v-model="time"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item class="must" label="性格" prop="books"  :label-width="formLabelWidth">
            <el-tag
                :key="key"
                v-for="(tag,key) in books"
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
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 物品</el-button>
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
      form: {
        cId: 1,
        wechat: "",
        time:null,
      },
      books:[],
      tagValue: '',
      tagVisible: false,
      time:'',
      formLabelWidth: '120px',
      dialogFormVisible: false,
    }
  },
  props:['volunteer','count'],
  methods:{
    send: function () {
      this.dialogFormVisible = false;
      this.$http.post("/add/volunteer/things",{
        volunteerThings:{
        cId:this.form.cId,
        time:this.form.time,
        wechet:this.form.wechat
        },
        books:this.books
      }).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    },
    p(s) {
      return s < 10 ? '0' + s : s
    },
    handleInputConfirm() {
      let tagValue = this.tagValue;
      if (tagValue) {
        this.books.push(tagValue);
      }
      this.tagVisible = false;
      this.tagValue = '';
    },
    showInput() {
      this.tagVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
  },
  watch:{
    time:function () {
      const d = new Date(this.time);
      this.form.time = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate());
      this.form.cId=this.volunteer.id;
      console.log(this.form)
    }
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
  width: 220px !important;
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

.input-new-tag {
  width: 90px!important;
  /*margin-left: 10px;*/
  vertical-align: bottom;
}
</style>