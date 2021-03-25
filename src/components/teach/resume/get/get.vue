<template>
	<div>
		<div class="card-inline-head">
			收到的需求
		</div>
		<div class="card-inline">
			<div v-for="item in this.needReceiveDataList" class="card-item">
				  <need-card :need="item" :path="myPath" ></need-card>
			</div>
		</div>
		<div class="card-inline-head">
			投递的需求
		</div>
		<div class="card-inline">
			<div v-for="item in this.needSendDataList" class="card-item">
			  <need-card :need="item"></need-card>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "resumeGet",
  data: function () {
    return {
		resumeId:null,
		needSendDataList:[],
		needReceiveDataList:[],
		myPath:"/teach/resume/get/detail"
	}
  },
  created() {
  	this.resumeId=this.$route.query.id
	this.getResumeReceive();
	this.getReusmeSend()
  },
  methods: {
	getResumeReceive:function(){
		this.$http.get("/get/student/receive",{
			params:{
				id:this.resumeId
			}
		}).then(res=>{
			this.needReceiveDataList=res.data.data
			console.log(res);
		}).catch(err=>{
			console.log(err);
		})
	},
	getReusmeSend:function(){
		this.$http.get("/get/student/sent",{
			params:{
				id:this.resumeId
			}
		}).then(res=>{
			this.needSendDataList=res.data.data
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
	width: 93%;
	background-color: white;
	border-radius: 6px;
	margin: 0 auto;
	padding: 0px 0px 30px 0px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
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
.card-item {
  margin-top: 25px;
  
}
</style>
