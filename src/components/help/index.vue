<template>
	<div>
		<div class="card-inline-head">
			校内互助
			<span class="back el-icon-back" @click="toBack" ></span>
		</div>
		<div class="card-inline">
			<div class="my-resume-btn">
			  <el-button type="primary" @click="toStudentHelpList">求助列表</el-button>
			  <el-button type="success" @click="toAddStudentHelp">请求他人帮助</el-button>
			  <el-button type="warning"  @click="toHelpReceiveList">收到的帮助</el-button>
			  <el-button type="danger"  @click="" >心理咨询（未完待续）</el-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "index",
  methods:{
    toAddStudentHelp:function (){
      this.$router.push("/student/help/add")
    },
    toStudentHelpList:function (){
      this.$router.push("/student/help/list")
    },
    toHelpReceiveList:function (){
      this.$router.push("/student/help/receive")
    },
	toBack:function(){
		this.$router.go(-1);
	}
  }
}
</script>

<style scoped>
.card-inline {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 93%;
  background-color: white;
  border-radius: 6px;
  margin: 0 auto;
  padding: 30px 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
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