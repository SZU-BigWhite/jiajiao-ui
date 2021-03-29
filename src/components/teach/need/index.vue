<template>
	<div>
		<div class="card-inline-head">
			家长需求库
			<span class="back el-icon-back" @click="toBack" ></span>
		</div>
		<div class="card-inline">
			<div class="my-resume-btn">
			  <el-button type="primary" @click="toNeedShow">查找需求</el-button>
			  <el-button type="success" @click="toAddTeachNeed">{{text}}</el-button>
			  <el-button type="warning"  @click="toMyNeed">我的需求</el-button>
			  <el-button type="danger"  @click="toNeedGet" >收到/投递</el-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'index',
	data: function() {
		return {
			text:"新增需求",
			data:[],
			needId:null,
		};
	},
	methods: {
		toBack:function(){
			this.$router.go(-1);
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
		toNeedShow:function (){
			this.$router.push("/teach/need/show")
			
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
	},
	created() {
		this.$http.get("/get/parent/need").then(res=>{
			console.log(res);
			this.data=res.data.data;
			this.needId=res.data.data[0].parentNeed.id
			this.text="需求匹配";
		}).catch(err=>{
			console.log(err);
		})
	}
};
</script>

<style scoped>
.my-resume-btn{
	margin: 20px 0px;
	text-align: center;
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
