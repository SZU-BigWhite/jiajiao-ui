<template>
	<div>
		<div class="ad">
			<div class="my-resume-btn">
			  <el-button type="primary">收到的需求</el-button>
			  <el-button type="success">我的投递</el-button>
			  <el-button type="warning" @click="">修改</el-button>
			  <el-button type="danger" @click="deleteResume" >删除</el-button>
			</div>
		</div>
		<div class="relative" v-if="id!=null">
			<resume-content :id="id"></resume-content>
		</div>
	</div>
</template>

<script>
export default {
  name: "index",
  data: function () {
    return {
		id:null
	}
  },
  
  created() {
  	this.id=this.$route.query.id
  },
  methods: {
	deleteResume:function(){
		this.$http.delete("/delete/student/resume",{
			params:{
				id:this.id
			}
		}).then(res=>{
			console.log(res);
		}).catch(err=>{
			console.log(err);
		})
	}
  }
}
</script>


<style  lang="less"  scoped>
@import '/src/assets/css/core.less';

.ad {
	position: relative;
	width: 1024px;
	margin: 50px auto 30px;
	border-radius: 5px;
	background-color: #fefefe;
	box-shadow: 0 0 15px #c0c0c0;
	overflow: hidden;
	transition: all 0.2s ease-in-out;
	animation: fadeUp 2s cubic-bezier(0.19, 1, 0.22, 1);
	@media screen and (max-width: 1024px) {
		margin: 0;
		box-shadow: none;
		width: auto;
		border-radius: 0;
	}
	// bottom: 20px;
}
.my-resume-btn{
	margin: 20px 0px;
	text-align: center;
}
.relative{
	position: relative;
}
.el-button{
	padding: 75px 90px;
	width: 30%;
	margin: 20px 35px!important;
	border-radius: 6px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
	color: white;
	font-weight: bold;
	text-align: center;
	height: 30%;
	font-size: 24px;
}
</style>
