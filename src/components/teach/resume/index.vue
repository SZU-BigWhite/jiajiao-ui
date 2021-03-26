<template>
	<div>
		<div class="card-inline-head">
			学生简历库
			<span class="back el-icon-back" @click="toBack" ></span>
		</div>

		<div class="card-inline">
			<div class="my-resume-btn">
			  <el-button type="primary" @click="toShowTeachResume">查找简历</el-button>
			  <el-button type="success" @click="toAddTeachResume">{{text}}</el-button>
			  <el-button type="warning"  @click="toMyResume">我的简历</el-button>
			  <el-button type="danger"  @click="toResumeGet" >收到/投递</el-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "index",
  data: function () {
    return {
		data:[],
		text:"新增简历",
	}
  },
  methods: {
	toBack:function(){
		this.$router.go(-1);
	},
	toShowTeachResume: function () {
		this.$router.push("/teach/resume/show")
	},
	toAddTeachResume:function (){
		if(this.data.length==0){
			this.$router.push("/teach/resume/add")
		}else {
			this.$router.push({
				path:"/teach/resume/recommend",
				query:{
					id:this.resumeId
				}
			})
		}
	},
	toResumeGet:function () {
		if(this.data.length==0){
			this.$message.error("你还未拥有简历，请先新建简历");
			return ;
		}
		this.$router.push({
			path:"/teach/resume/get",
			query:{
				id:this.resumeId,
			}
		})
		
	},
	toMyResume:function () {
		if(this.data.length==0){
			this.$message.error("你还无简历，请先新建自己的简历")
			return ;
		}
		let routerUrl=this.$router.resolve({
			path:"/teach/my/resume",
			query:{
				id:this.resumeId
			}
		})
		window.open(routerUrl.href,"_blank");
	}
  },
  created() {
  	this.$http.get("/get/student/resumes").then(res=>{
		this.data=res.data.data;
		this.resumeId=this.data[0].studentResume.id
		this.text="简历匹配";
  	}).catch(err=>{
  		console.log(err);
  	})
  }
}
</script>

<style scoped>
.my-resume-btn{
	margin: 20px 0px;
	text-align: center;
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
	font-size: 24px;
}
.card-inline-head {
  text-align: center;
  width: 93%;
  background-color: white;
  border-radius: 6px;
  margin: 0 auto;
  background-color: #3091F2;
  color: white;
  font-size: 24px;
  line-height: 50px;
  height: 50px;
  position: relative;
}

.back {
  position: absolute;
  top: 13px;
  left: 30px;
  cursor: pointer;
  font-weight: bold;
}


.card-inline {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 93%;
	background-color: white;
	border-radius: 6px;
	margin: 0 auto;
	padding: 30px 0px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

</style>
