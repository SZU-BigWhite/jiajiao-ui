<template>
  <div class="help-receive-card" v-if="show">
    <div class="card-head">微信号：{{ studentHelp.wechat }} </div>
    <div class="card-content"><span class="content-span">学习成绩</span>{{ studentHelp.condiction }}</div>
    <div class="card-content"><span class="content-span">教学方法</span>{{ studentHelp.helpMethod }}
    </div>
    <div class="card-bottom">
      <el-tag type="warning">发送时间：{{ studentHelp.createTime }}</el-tag>
	  <el-tag class="mouse" type="warning" effect="dark" @click="refuseHelp">拒绝</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: "helpReceiveCard",
  props:["studentHelp"],
  data:function(){
	  return {
		  show:true,
	  }
  },
  methods:{
	refuseHelp:function(){
		this.$http.delete("/refuse/help",{
			params:{
				id:this.studentHelp.id
			}
		}).then(res=>{
			this.$message.success("拒绝成功");
			setTimeout(()=>{
				this.show=false;
			},500)
			console.log(res);
		}).catch(err=>{
			console.log(err);
		})
	}
  }
}
</script>

<style scoped>
.help-receive-card {
  margin-right: 30px;
  margin-left: 30px;
  /*height: 200px;*/
  width: 350px;
  /*background-color: #fafafa;*/
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.mouse{
	cursor: pointer;
}
div .help-receive-card:hover {
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
.content-span {
  font-size: 16px;
  font-weight: bold;
  color: #404040;
  display: inline-block;
  margin-right: 4px;
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
  min-height: 100px;
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