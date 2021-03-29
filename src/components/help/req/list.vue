<template>
  <div>
    <div class="card-inline-head">
	  求助列表 
    </div>

    <div class="card-inline">
	  <div class="inline-right">
	  		<div><el-button type="warning" plain  @click="toAddStudentHelp"><i class="el-icon-circle-plus-outline"></i>寻求帮助</el-button></div>
	  		<div><el-button type="success"  plain @click="toHelpReceiveList" ><i class="el-icon-search"></i>收到帮助</el-button></div>
	  </div>
      <div class="inline-left">
		<div v-for="item in this.list" class="card-item">
		  <help-card :studentHelp="item.studentHelp" :count="item.count"></help-card>
		</div>
	  </div>
	  
    </div>
  </div>
</template>

<script>
export default {
  name: "helpReqList",
  data:function (){
    return {
      list:null
    }
  },
  methods:{
	toBack:function(){
		this.$router.go(-1);
	},
	toAddStudentHelp:function (){
	  this.$router.push("/student/help/add")
	},
	toHelpReceiveList:function (){
	  this.$router.push("/student/help/receive")
	},

  },
  created() {
    this.$http.get("/get/students/helpList").then(res=>{
      this.list=res.data.data
    })
  }
}
</script>

<style scoped>
.card-inline {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 93%;
  height: 100%;
  background-color: white;
  border-radius: 6px;
  margin: 0 auto;
  padding-bottom: 30px;
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

.inline-left{
	display: flex;
	flex-wrap: wrap;
	width: 75%;
	justify-content: center;
}
.inline-right{
	text-align: center;
	width: 15%;
	margin: 0px 20px;
}
.el-button{
	/* padding: 75px 90px; */
	margin: 20px 0px 20px 0px!important;
	height: 50px;
	border-radius: 6px;
	box-shadow: 5px 5px 5px #ccc;
	color: white;
	font-weight: bold;
	text-align: center;
	font-size: 24px;
	display: inline-block;
	height: 131px;
	width: 100%;
}
</style>