<template>
	<div class="my-card" @click="toDetail" >
	  <div class="card-head">{{need.parentNeed.name}}  {{classString}}  {{need.parentNeed.times}}次/周</div>
	  <div class="card-content" v-html="need.parentNeed.teachReq"></div>
	  <div class="card-bottom">
	    <el-tag>时薪：{{need.parentNeed.salary}}元</el-tag>
	    <el-tag type="success">时长：{{need.parentNeed.duration}}小时</el-tag>
	    <!--<el-tag type="info">标签三</el-tag>-->
	    <!--<el-tag type="warning">标签四</el-tag>-->
	    <el-tag type="danger">路程时间：{{need.parentNeed.arriveHours}}分钟</el-tag>
	  </div>
	</div>
</template>

<script>
export default {
  name: "needCard",
  data: function () {
    return {
	}
  },
  computed:{
	classString:function(){
		let classNum=this.need.parentNeed.studentClass;
		if(classNum==1){
			return "一年级";
		}else if(classNum==2){
			return "二年级";
		}else if(classNum==3){
			return "三年级";
		}else if(classNum==4){
			return "四年级";
		}else if(classNum==5){
			return "五年级";
		}else if(classNum==6){
			return "六年级";
		}else if(classNum==7){
			return "初一";
		}else if(classNum==8){
			return "初二";
		}else if(classNum==9){
			return "初三";
		}else if(classNum==10){
			return "高一";
		}else if(classNum==11){
			return "高二";
		}else if(classNum==12){
			return "高三";
		}
	}
  },
  methods: {
	toDetail:function(){
		let to;
		if(this.path==null){
			to="/need/detail"
		}else {
			to=this.path;
		}
		let routeUrl=this.$router.resolve({
			path:to,
			query:{
			  id:this.need.parentNeed.id,
			}
		})
		window.open(routeUrl.href,"_blank")
	},
  },
  props:["need",'path'],
  created(){
	this.need.parentNeed.teachReq=this.need.parentNeed.teachReq.replace(/\n/g, '<br />');
	console.log(this.need)
  }
}
</script>

<style scoped>
.my-card {
  margin-right: 30px;
  margin-left: 30px;
  height: 200px;
  width: 400px;
  /*background-color: #fafafa;*/
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
div .my-card:hover{
  background-color: #f6f6f6;
}

.card-head {
  height: 50px;
  margin-left: 20px;
  text-align: left;
  line-height: 50px;
  font-weight: bold;
  font-size: 20px;
}

.card-content {
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 8px;
  color: #8c939d;
  height: 100px;
  line-height: 20px;
  overflow: hidden;
}

.card-bottom {
  padding-left: 20px;
  padding-right: 20px;
}

.el-tag {
  margin-right: 5px;
}
</style>
