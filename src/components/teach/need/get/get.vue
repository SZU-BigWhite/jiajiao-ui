<template>
	<div>
		<div class="card-inline-head">
			收到/投递
			<span class="back el-icon-back" @click="toBack" ></span>
		</div>
		<el-menu active-text-color="#0665d0"
		         background-color="#ffffff" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
		         >
		  <el-menu-item index="1" @click="getList(false)">投递的简历</el-menu-item>
		  <el-menu-item index="2" @click="getList(true)">收到的简历</el-menu-item>
		</el-menu>
		<div class="line"></div>
		<div class="card-inline">
		  <div class="line-inner" v-show="!isGet">
		  	<div v-for="item in this.resumeSendDataList" class="card-item">
		  	  <resume-card :resume="item" :path="sendPath" ></resume-card>
		  	</div>
		  </div>
		  <div class="line-inner" v-show="isGet">
		  	<div v-for="item in this.resumeReceiveDataList" class="card-item">
		  		  <resume-card :resume="item" :path="getPath" ></resume-card>
		  	</div>
		  </div>
		</div>
	</div>
	<!-- <div class="card-inline">
		<div class="card-inline-head">
			收到的简历
			<span class="back el-icon-back" @click="toBack" ></span>
		</div>
		<div class="line-inner">
			<div v-for="item in this.resumeReceiveDataList" class="card-item">
				  <resume-card :resume="item" :path="getPath" ></resume-card>
			</div>
		</div>
		<div class="card-inline-head">
			投递的简历
		</div>
		<div class="line-inner">
			<div v-for="item in this.resumeSendDataList" class="card-item">
			  <resume-card :resume="item" :path="sendPath" ></resume-card>
			</div>
		</div>
	</div> -->
</template>

<script>
export default {
  name: "needGet",
  data: function () {
    return {
		activeIndex:"1",
		isGet:false,
		needId:null,
		resumeSendDataList:[],
		resumeReceiveDataList:[],
		getPath:"/teach/need/get/detail",
		sendPath:"/teach/need/send/detail"
	}
  },
  
  created() {
  	this.needId=this.$route.query.id
	this.getNeedReceive();
	this.getNeedSend()
  },
  methods: {
	getList:function(is){
		this.isGet=is;
	},
	toBack:function(){
		this.$router.go(-1);
	},
	getNeedReceive:function(){
		this.$http.get("/get/parent/receive",{
			params:{
				id:this.needId
			}
		}).then(res=>{
			this.resumeReceiveDataList=res.data.data
			console.log(res);
		}).catch(err=>{
			console.log(err);
		})
	},
	getNeedSend:function(){
		this.$http.get("/get/parent/sent",{
			params:{
				id:this.needId
			}
		}).then(res=>{
			this.resumeSendDataList=res.data.data
			console.log(res);
		}).catch(err=>{
			console.log(err);
		})
	},
  },
  
}
</script>

<style scoped>
.card-inline {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	/* background-color: white; */
	background-image: url(../../../../assets/img/bg6.jpg);
	background-repeat: no-repeat; 
	background-size:100% 100%;
	border-radius: 6px;
	margin: 0 auto;
	padding: 0px 0px 30px 0px;
	/* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04); */
	min-height: 600px;
}
.line-inner{
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-bottom: 30px;
}
.back {
  position: absolute;
  top: 13px;
  left: 30px;
  cursor: pointer;
  font-weight: bold;
}
.card-inline-head {
  text-align: center;
  width: 100%;
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
.card-item {
  margin-top: 25px;
  
}
</style>
