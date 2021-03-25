<template>
	<div>
		<resume-content :id="id"></resume-content>
		
		<resume-recommend :id="id"></resume-recommend>

		<resume-comment :id="id"></resume-comment>

		<a class="pdf cursor" @click="send">
			<i class="el-icon-s-promotion"></i>
			投递
		</a>
	</div>
</template>

<script>
export default {
	name: 'resumeDetail',
	data: function() {
		return {
			id:null,
			needId:null,
		};
	},
	created() {
		this.id=this.$route.query.id
		this.getNeedId();
	},
	methods: {
		getNeedId:function(){
			this.$http.get("/get/parent/need").then(res=>{
				this.needId=res.data.data[0].parentNeed.id
			}).catch(err=>{
				console.log(err);
			})
		},
		send: function() {
			this.$confirm('你确定需求到投递到该简历中？', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'success'
			})
			.then(() => {
				this.$http.post("/send/parent/need",{
					sResumeId:this.id,
					pNeedId:this.needId,
				}).then(res=>{
					this.$message.success(res.data.msg);
				}).catch(err=>{
					console.log(err);
				})
			})
			.catch(() => {
				this.$message.error("取消投递");
			});
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
