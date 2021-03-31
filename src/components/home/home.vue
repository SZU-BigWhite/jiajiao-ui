<template>
  <div class="home_content">
    <!--头部统计内容-->
    <el-row class="head">
      <el-col style="padding:20px 0;background: #33CCCC;">
        
        <el-col :span="6">
          {{ sum.needSum }}<br>
          <span style="cursor: pointer;"  @click="toParentNeed">家长需求</span>
        </el-col>
		<el-col :span="6">
		  {{ sum.resumeSum }}<br>
		  <span style="cursor: pointer;" @click="toStudentResume">学生简历</span>
		</el-col>
        <el-col :span="6">
          {{ sum.volunteerSum }}<br>
          <span  style="cursor: pointer;"  @click="toStudentVolunteer">义工活动</span>
        </el-col>
		<el-col :span="6" style="border: none;">
		  {{ sum.helpSum }}<br>
		  <span  style="cursor: pointer;"  @click="toStudentHelp">校内求助</span>
		</el-col>
      </el-col>
    </el-row>

    <div class="card-inline bg-img">
		<div class="my-resume-btn">
		  <el-button style="position: relative" type="primary" @click="toStudentResume"><span class="logo1 el-icon-tickets"></span>学生简历库</el-button>
		  <el-button style="position: relative" type="success" @click="toParentNeed"><span class="logo1 el-icon-bell"></span>家长需求库</el-button>
		  <el-button style="position: relative"  type="warning"  @click="toStudentVolunteer"><span class="logo1 el-icon-first-aid-kit"></span>义工活动</el-button>
		  <el-button style="position: relative" type="danger"  @click="toStudentHelp" ><span class="logo1 el-icon-school"></span>校内互助</el-button>
		</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data: function () {
    return {
      sum:{
		helpSum:null,
		needSum:null,
		resumeSum:null,
		volunteerSum:null
	  },
    }
  },
  methods: {
	toParentNeed:function()	{
		this.$router.push("/teach/need/show")
	},
	toStudentResume: function()	{
		this.$router.push("/teach/resume")
	},
	toStudentHelp:function(){
		this.$router.push("/student/help/list")
	},
	toStudentVolunteer:function(){
		this.$router.push("/student/volunteer/collections")
	}
  },
  created() {
  	this.$http.get("/get/data/sum").then(res=>{
		console.log(res);
		this.sum=res.data.data;
	}).catch(err=>{
		console.log(err);
	})
  }
}
</script>

<style scoped>
.logo1 {
  position: absolute;
  top: 13px;
  left: 30px;
  font-weight: bold;
  font-size: 34px;
}

.bg-img{
	background-image: url(../../assets/img/bg1.jpg) !important;
	background-repeat: no-repeat!important; 
	background-size:100% 100%!important;
}
.home_content > .head > .el-col > .el-col {
  padding: 20px 0;
  border-right: solid 1px #fff;
}
.card-inline {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 93%;
  height: 100%;
  background-color: white;
  border-radius: 6px;
  margin: 0 auto;
  padding: 30px 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.home_content .head {
  text-align: center;
  color: #fff;
  font-size: 30px;
  margin: 0px 50px 20px 50px;
  /* margin-bottom: 20px;
  margin-right: 50px;
  margin-left: 50px; */
}
.home_content .content{
  text-align: center;
  margin-bottom: 50px;
  margin-right: 100px;
  margin-left: 100px;
  display: flex;
  justify-content: center;
}

.my-receive {
  background: #3091F2;
  padding: 40px 0;
  cursor: pointer;
}
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
</style>
