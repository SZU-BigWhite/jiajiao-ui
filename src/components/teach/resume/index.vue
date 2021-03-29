<template>
	<div>
		<div class="card-inline-head">
			学生简历库
			<span class="back el-icon-back" @click="toBack" ></span>
		</div>

		<div class="card-inline bg-img">
			<div class="my-resume-btn">
			  <el-button style="position: relative" type="primary" @click="toShowTeachResume">
          <span class="left-top">查找简历</span>
          <div class="left-bottom">
            <span>Searching</span>
            <div style="width: 150px" class="right-bottom"></div>
          </div>
          <i class="right-top el-icon-search"></i>
        </el-button>
			  <el-button style="position: relative" type="success" @click="toAddTeachNeed">
          <span class="left-top">{{text}}</span>
          <div class="left-bottom">
            <span>Matching</span>
            <div style="width: 150px" class="right-bottom"></div>
          </div>
          <i class="right-top el-icon-cloudy"></i>
        </el-button>
			  <el-button style="position: relative" type="warning"  @click="toMyNeed">
          <span class="left-top">我的需求</span>
          <div class="left-bottom">
            <span>Needs</span>
            <div style="width: 150px" class="right-bottom"></div>
          </div>
          <i class="right-top el-icon-tickets"></i>
        </el-button>
			  <el-button style="position: relative" type="danger"  @click="toNeedGet" >
          <span class="left-top">收到/投递</span>
          <div class="left-bottom">
            <span>Receive</span>
            <div style="width: 150px" class="right-bottom"></div>
          </div>
          <i class="right-top el-icon-position"></i>
        </el-button>
			  <!-- <el-button type="success" @click="toAddTeachResume">{{text}}</el-button>
			  <el-button type="warning"  @click="toMyResume">我的简历</el-button>
			  <el-button type="danger"  @click="toResumeGet" >收到/投递</el-button> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "index",
  data: function () {
    return {
		text:"新建需求",
		needId:null,
		data:[],
	}
  },
  methods: {
	toBack:function(){
		this.$router.go(-1);
	},
	toShowTeachResume: function () {
		this.$router.push("/teach/resume/show")
	},
	toAddTeachNeed:function (){
		if(this.data.length==0){
			this.$router.push("/teach/need/add")
		}else {
			this.$router.push({
				path:"/teach/need/recommend",
				query:{
					id:this.needId
				}
			})
		}
	  
	},
	toNeedGet:function(){
		if(this.data.length==0){
			this.$message.error("你还未拥有需求，请先新建需求");
			return ;
		}
		this.$router.push({
			path:"/teach/need/get",
			query:{
				id:this.needId,
			}
		})
	},
	toMyNeed:function(){
		if(this.data.length==0){
			this.$message.error("你还无需求，请先新建自己的需求")
			return ;
		}
		let routerUrl=this.$router.resolve({
			path:"/teach/my/need",
			query:{
				id:this.needId
			}
		})
		window.open(routerUrl.href,"_blank");
	}
	// toAddTeachResume:function (){
	// 	if(this.data.length==0){
	// 		this.$router.push("/teach/resume/add")
	// 	}else {
	// 		this.$router.push({
	// 			path:"/teach/resume/recommend",
	// 			query:{
	// 				id:this.resumeId
	// 			}
	// 		})
	// 	}
	// },
	// toResumeGet:function () {
	// 	if(this.data.length==0){
	// 		this.$message.error("你还未拥有简历，请先新建简历");
	// 		return ;
	// 	}
	// 	this.$router.push({
	// 		path:"/teach/resume/get",
	// 		query:{
	// 			id:this.resumeId,
	// 		}
	// 	})
		
	// },
	// toMyResume:function () {
	// 	if(this.data.length==0){
	// 		this.$message.error("你还无简历，请先新建自己的简历")
	// 		return ;
	// 	}
	// 	let routerUrl=this.$router.resolve({
	// 		path:"/teach/my/resume",
	// 		query:{
	// 			id:this.resumeId
	// 		}
	// 	})
	// 	window.open(routerUrl.href,"_blank");
	// }
  },
  created() {
  	this.$http.get("/get/parent/need").then(res=>{
  		console.log(res);
  		this.data=res.data.data;
  		this.needId=res.data.data[0].parentNeed.id
  		this.text="个性匹配";
  	}).catch(err=>{
  		console.log(err);
  	})
  }
}
</script>

<style scoped>
.bg-img{
	background-image: url(../../../assets/img/bg2.jpg) !important;
	background-repeat: no-repeat!important; 
	background-size:100% 100%!important;
}
.my-resume-btn{
	margin: 20px 0px;
	text-align: center;
}
.el-button{
  padding: 100px 120px;
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
.left-top {
  position: absolute;
  top: 50px;
  left: 40px;
  cursor: pointer;
  font-size: 32px;
}
.right-top {
  position: absolute;
  top: 40px;
  right: 36px;
  cursor: pointer;
  font-size: 50px;
}
.right-bottom {
  border-bottom: 2px solid white;
}
.left-bottom {
  position: absolute;
  bottom: 30px;
  left: 110px;
  cursor: pointer;
  font-weight: 200;
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
