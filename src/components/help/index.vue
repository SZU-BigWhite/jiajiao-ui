<template>
	<div>
		<div class="card-inline-head">
			校内互助
			<span class="back el-icon-back" @click="toBack" ></span>
		</div>
		<div class="card-inline">
		  <div class="my-content" @click="toStudentHelpList">
		    求助列表 
		  </div>
		  <div @click="toAddStudentHelp" class="my-content">
		    请求他人帮助
		  </div>
		  <div @click="toHelpReceiveList" class="my-content">
		    收到的帮助
		  </div>
		  <div @click="" class="my-content">
		    心理咨询（未完待续）
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

.my-content {
  background: #3091F2;
  width: 30%;
  padding: 75px 90px;
  cursor: pointer;
  margin: 20px 35px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  color: white;
  font-weight: bold;
  text-align: center;
  height: 30%;
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
.my-content:hover {
  background: #2385e5;
}
</style>