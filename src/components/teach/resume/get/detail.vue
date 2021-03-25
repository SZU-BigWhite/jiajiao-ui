<template>
	<div>
		<need-content :id="id"></need-content>
		
		<need-comment :id="id"></need-comment>
		
		<a class="fixed-left cursor" @click="deleteReceive">
			<i class="el-icon-delete"></i>
			拒绝
		</a>
		<a class="fixed-right cursor" @click="getWechat">
			<i class="el-icon-message"></i>
			微信
		</a>
	</div>
</template>

<script>
export default {
  name: "index",
  data:function(){
	  return{
		resumeId:null,
		id:null,
		wechat:null,
	  }
  },
  created() {
  	this.id=this.$route.query.id
	this.wechat=this.$route.query.wechat
	this.$http.get("/get/student/resumes").then(res=>{
		this.resumeId=res.data.data[0].studentResume.id
	}).catch(err=>{
		console.log(err);
	})
  },
  methods: {
	deleteReceive:function(){
		
		this.$http.post("/delete/send/parent/need",{
			pNeedId:this.id,
			sResumeId:this.resumeId,
		}).then(res=>{
			this.$message.success("拒绝成功")
			setTimeout(()=>{
				this.$router.go(-1);
			},500)
			console.log(res)
		}).catch(err=>{
			console.log(err);
		})
	},
	getWechat:function(){
		this.$notify({
		  title: '微信号',
		  message: this.wechat,
		  duration: 0,
		  type: 'success'
		});
	}
  }
}
</script>

<style scoped>
.fixed-right {
  display: inline-block;
  position: fixed;
  z-index: 10;
  bottom: 20px;
  left: 50%;
  margin-left: 520px;
  border-radius: 3px;
  color: #fff;
  background-color: #3091F2;
  transition: all 0.2s ease-in-out;
  animation: fade 1.6s;
  i {
    color: #fff;
  }
  @media screen and (max-width: 1246px) {
    left: auto;
    right: 8px;
    margin-left: 0;
  }
  height: 56px;
  font-size: 22px;
  line-height: 40px;
  width: 130px;
  text-align: center;
  padding: 8px;
  
}
.fixed-left{
	display: inline-block;
	position: fixed;
	z-index: 10;
	bottom: 20px;
	right: 50%;
	margin-right: 520px;
	border-radius: 3px;
	color: #fff;
	background-color: #f56c6c;
	transition: all 0.2s ease-in-out;
	animation: fade 1.6s;
	i {
	  color: #fff;
	}
	@media screen and (max-width: 1246px) {
	  left: auto;
	  right: 8px;
	  margin-left: 0;
	}
	height: 56px;
	font-size: 22px;
	line-height: 40px;
	width: 130px;
	text-align: center;
	padding: 8px;
}
.cursor {
	cursor: pointer;
}
</style>
