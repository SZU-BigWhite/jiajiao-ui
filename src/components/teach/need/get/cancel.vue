<template>
	<div>
		<resume-content :id="id"></resume-content>
		
		<resume-comment :id="id"></resume-comment>
		
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
		needId:null,
		id:null,
	  }
  },
  created() {
  	this.id=this.$route.query.id
	//获取自身的needId
	this.$http.get("/get/parent/need").then(res=>{
		this.needId=res.data.data[0].parentNeed.id
	}).catch(err=>{
		console.log(err);
	})
  },
  methods: {
	cancelSend:function(){
		this.$http.post("/delete/send/parent/need",{
			sResumeId:this.id,
			pNeedId:this.needId,
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
