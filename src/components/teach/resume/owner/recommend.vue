<template>
	<div>
		<div class="card-inline-head">
			个人简历匹配的需求
			<span class="back el-icon-back" @click="toBack" ></span>
		</div>
	
		<div class="card-inline">
			<div v-for="item in this.needDataList" class="card-item">
			  <need-card :need="item"></need-card>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "index",
  data: function () {
    return {
		id:null,
		needDataList:null,
	}
  },
  methods: {
	toBack:function(){
		this.$router.go(-1);
	},
  },
  created() {
	this.id=this.$route.query.id;
	console.log(this.id);
  	this.$http.get("/recommend/need/by/resume",{
		params:{
			sRId:this.id,
		}
	}).then(res=>{
		this.needDataList=res.data.data
		console.log(res);
	}).catch(err=>{
		console.log(err);
	})
  },
  
}
</script>

<style scoped>
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
