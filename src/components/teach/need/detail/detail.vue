<template>
	<div>
		<need-content :id="id"></need-content>
		
		<need-recommend :id="id"></need-recommend>

		<need-comment :id="id"></need-comment>

		<a class="pdf cursor" @click="send">
			<i class="el-icon-s-promotion"></i>
			投递
		</a>
	</div>
</template>

<script>
export default {
	name: 'needDetail',
	data: function() {
		return {
			id:null,
			resumeId:null,
		};
	},
	created() {
		this.id=this.$route.query.id
		this.getResumeId()
	},
	methods: {
		getResumeId:function(){
			this.$http.get("/get/student/resumes").then(res=>{
				this.resumeId=res.data.data[0].studentResume.id
			}).catch(err=>{
				console.log(err);
			})
		},
		send: function() {
			if(this.resumeId==null){
				this.$confirm("你还没有简历，是否新建简历？","提示",{
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'success'
				}).then(()=>{
					let routerUrl=this.$router.resolve({
						path:"/teach/resume/add",
					})
					window.open(routerUrl.href,"_blank");
				}).catch(() => {
					this.$message.error("取消新建");
				});
			}else{
				this.$confirm('你确定简历到投递到该需求中？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'success'
				})
				.then(() => {
					this.$http.post("/send/student/resume",{
						sResumeId:this.resumeId,
						pNeedId:this.id,
					}).then(res=>{
						// console.log(res)
						this.$message.success(res.data.msg);
					}).catch(err=>{
						console.log(err);
					})
				})
				.catch(() => {
					this.$message.error("取消投递");
				});
			}
		},
	}
};
</script>

<style lang="less" scoped>
@import '/src/assets/css/core.less';

.cursor {
	cursor: pointer;
}
a {
	margin-bottom: 6px;
	font-size: 18px;
}
</style>
