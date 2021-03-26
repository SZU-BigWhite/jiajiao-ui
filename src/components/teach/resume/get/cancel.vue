<template>
	<div>
		<need-content :id="id"></need-content>
		
		<need-comment :id="id"></need-comment>
		
		<a class="fixed-right cursor" @click="cancelSend">
			<i class="el-icon-document-delete"></i>
			取消投递
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
	  }
  },
  created() {
  	this.id=this.$route.query.id
	this.$http.get("/get/student/resumes").then(res=>{
		this.resumeId=res.data.data[0].studentResume.id
	}).catch(err=>{
		console.log(err);
	})
  },
  methods: {
	cancelSend:function(){
		this.$http.post("/delete/send/student/resume",{
			sResumeId:this.resumeId,
			pNeedId:this.id,
		}).then(res=>{
			this.$message.success("取消投递成功");
			setTimeout(()=>{
				this.$router.go(-1);
			},500);
			console.log(res);
		}).catch(err=>{
			console.log(err);
		})
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
.cursor {
	cursor: pointer;
}
</style>
