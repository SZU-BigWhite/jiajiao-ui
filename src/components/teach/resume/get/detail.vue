<template>
	<div>
		<need-content :id="id"></need-content>
		
		<need-comment :id="id"></need-comment>
		
		<a class="fixed-left cursor" @click="deleteReceive">
			<i class="el-icon-remove"></i>
			拒绝
		</a>
		<a class="fixed-right cursor" @click="getWechat">
			<i class="el-icon-chat-round"></i>
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
	this.$http.get("/get/student/resumes").then(res=>{
		this.resumeId=res.data.data[0].studentResume.id
	}).catch(err=>{
		console.log(err);
	})
	this.$http.get('/get/parent/nedd/by/id', {
		params: {
			id: this.id
		}
	}).then(res => {
		this.wechat=res.data.data.parentNeed.wechat;
		console.log(res);
	}).catch(err => {
		console.log(err);
	});
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
  text-align: center;
  padding: 8px;
  font-size: 18px;
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
	background-color: #999;
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
	text-align: center;
	padding: 8px;
	font-size: 18px;
}
.cursor {
	cursor: pointer;
}
</style>
