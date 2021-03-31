<template>
	<div class="flex-div">
		<div class="inline-left">
			<div class="content-card1">
				<!-- 筛选条件 -->
				<div class="select-class">
				  <span>可辅导最高年级 </span>
				  <div @click="selectClass(i)" class="s-class-span" :class="{'s-active':i==selectedClass}"
					   v-for="(item,i) in sClass">{{ item }}
				  </div>
				</div>
				<div class="select-academy">
				  <span>最多可辅导次数 </span>
				  <div @click="selectTimes(i)" class="s-class-span" :class="{'s-active':i==selectedTimes}"
					   v-for="(item,i) in sTimes">{{ item }}
				  </div>
				</div>
				
				<div class="select-subject">
				  <el-checkbox-group v-model="selectedSubject" size="small" @change="selectSubject">
					<el-checkbox-button  v-for="subject in sSubject" :label="subject" :key="subject">{{subject}}</el-checkbox-button>
				  </el-checkbox-group>
				</div>
				
				<div class="select-time">
				  <el-tag
					  :key="tag"
					  v-for="tag in selectedTime"
					  closable
					  :disable-transitions="false"
					  @close="handleCloseTag(tag)">
					{{ tag }}
				  </el-tag>
				  <el-button class="button-new-tag" size="small" @click="dialogFormVisible = true">+ 添加时间</el-button>
				
				  <div v-if="dialogFormVisible">
					<el-dialog title="选择时间" :visible.sync="dialogFormVisible" >
					  <el-form :model="form">
						<el-form-item label="星期" :label-width="formLabelWidth">
						  <el-select v-model="form.week" placeholder="选择星期">
							<el-option label="星期一" value="星期一"></el-option>
							<el-option label="星期二" value="星期二"></el-option>
							<el-option label="星期三" value="星期三"></el-option>
							<el-option label="星期四" value="星期四"></el-option>
							<el-option label="星期五" value="星期五"></el-option>
							<el-option label="星期六" value="星期六"></el-option>
							<el-option label="星期日" value="星期日"></el-option>
						  </el-select>
						</el-form-item>
						<el-form-item label="时间" :label-width="formLabelWidth">
						  <el-select v-model="form.time" placeholder="请选择时间">
							<el-option label="上午" value="上午"></el-option>
							<el-option label="下午" value="下午"></el-option>
							<el-option label="晚上" value="晚上"></el-option>
						  </el-select>
						</el-form-item>
					  </el-form>
					  <div slot="footer" class="dialog-footer">
						<el-button @click="dialogFormVisible = false">取 消</el-button>
						<el-button type="primary" @click="confirmTime">确 定</el-button>
					  </div>
					</el-dialog>
				  </div>
				</div>
				
				<el-menu active-text-color="#0665d0"
						 background-color="#ffffff" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
						 >
				  <el-menu-item index="1" @click="orderBySalary">{{salaryText[filter.salary]}}</el-menu-item>
				  <el-menu-item index="2" @click="orderByUpdateTime">{{updateTimeText[filter.updateTime]}}</el-menu-item>
				</el-menu>
				<!-- <div class="line"></div> -->
				<!-- 列表+页面 -->
				<div class="card-inline">
				  <div v-for="item in this.needDataList" class="card-item">
					<need-card :need="item"></need-card>
				  </div>
				</div>
				<div v-if="needTotal>filter.pageSize" class="page-info-bg">
				  <el-pagination
					  background
					  layout="prev, pager, next"
					  :current-page.sync="filter.pageNum"
					  @current-change="handleCurrentChange"
					  :page-size="filter.pageSize"
					  :total="needTotal">
				  </el-pagination>
				</div>
				
			</div>
		</div>
		<div class="inline-right">
			<div class="right-head">我的简历</div>
			<div class="right-content">
				<el-button class="btn-div1" type="primary" @click="toAddTeachResume" plain><i class="el-icon-edit"></i>{{text}}简历</el-button>
				<el-button class="btn-div" type="danger" @click="toResumeRecommend" plain><i class="el-icon-cloudy"></i>个性匹配</el-button>
				<el-button class="btn-div" type="success" @click="toMyResume" plain><i class="el-icon-document"></i>我的简历</el-button>
				<el-button class="btn-div" type="primary" @click="toResumeGet" plain><i class="el-icon-circle-check"></i>收到/投递</el-button>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
  name: "needShow",
  data: function () {
    return {
		activeIndex: '1',
		sClass: ['全部', '一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三','高一', '高二', '高三'],
		sSubject:['作业辅导','语文','数学','英语','历史','地理','生物','政治','物理','化学','音乐','美术','舞蹈','计算机','体育'],
		sTimes:['全部','一次','二次','三次','四次','五次'],
		selectedTimes:0,
		selectedClass: 0,
		selectedSubject: [],
		selectedTime: [],
		salaryText:['按时薪',"时薪降序",'时薪升序'],
		updateTimeText:['按更新时间',"最近更新","最早发布"],
		form: {
		  week: '',
		  time: '',
		},
		dialogFormVisible: false,
		formLabelWidth: '120px',
		needDataList:[],
		needTotal:100,
		filter:{
			pageNum:1,
			pageSize:4,
			salary:0,
			updateTime:0,
			times:0,
			ableClass:0,
			name:[],
			freeTimeString:[],
		},
		//个人需求
		resumeId:null,
		data:[],
		text:"新增"
	}
  },
  methods: {
	toAddTeachResume:function(){
		//跳转增加
		if(this.resumeId==null){
			this.$router.push("/teach/resume/add");
		}else{		//更新
			this.$router.push({
				path:"/teach/resume/update",
				query:{
					id:this.resumeId,
				}
			})
		}
	},
	toResumeRecommend:function(){
		if(this.resumeId==null){
			this.$message.error("你还无简历，请先新建自己的简历");
			return ;
		}
		this.$router.push({
			path:"/teach/resume/recommend",
			query:{
				id:this.resumeId
			}
		})
	},
	toMyResume:function(){
		if(this.data.length==0){
			this.$message.error("你还无简历，请先新建自己的简历")
			return ;
		}
		let routerUrl=this.$router.resolve({
			path:"/teach/my/resume",
			query:{
				id:this.resumeId
			}
		})
		window.open(routerUrl.href,"_blank");
	},
	toResumeGet:function(){
		if(this.data.length==0){
			this.$message.error("你还未拥有需求，请先新建需求");
			return ;
		}
		this.$router.push({
			path:"/teach/resume/get",
			query:{
				id:this.resumeId,
			}
		})
	},
	selectClass: function (i) {
	  this.selectedClass = i;
	  this.filter.ableClass=this.selectedClass;
	  this.getList();
	},
	selectTimes:function(i){
		this.selectedTimes=i;
		this.filter.times=this.selectedTimes;
		this.getList()
	},
	selectSubject: function (i) {
	  this.filter.name=this.selectedSubject
	  this.getList()
	},
	orderBySalary:function(){
		this.filter.updateTime=0;
		this.filter.salary++;
		if(this.filter.salary>=3){
			this.filter.salary=0;
		}
		this.getList()
	},
	orderByUpdateTime:function(){
		this.filter.salary=0;
		this.filter.updateTime++;
		if(this.filter.updateTime>=3){
			this.filter.updateTime=0;
		}
		this.getList()
	},
	handleCurrentChange:function ()	{
		this.getListByCurrentPageNum()
	},
	handleCloseTag(tag) {
	  this.selectedTime.splice(this.selectedTime.indexOf(tag), 1);
	  this.filter.freeTimeString=this.selectedTime;
	  this.getList()
	},
	confirmTime:function (){
	  if(this.form.week=="") {
	    this.$message.error('请选择星期');
	    return;
	  }
	  if(this.form.time==""){
	    this.$message.error('请选择时间');
	    return;
	  }
	  this.dialogFormVisible = false;
	  this.selectedTime.push(this.form.week+" : "+this.form.time);
	  this.filter.freeTimeString=this.selectedTime;
	  this.form.week="";
	  this.form.time="";
	  this.getList()
	},
	getListByCurrentPageNum:function(){
		this.$http.post("/get/parents/needlist/order",{
			pageNum:this.filter.pageNum,
			pageSize:this.filter.pageSize,
			times:this.filter.times,
			salary:this.filter.salary,
			updateTime:this.filter.updateTime,
			ableClass:this.filter.ableClass,
			freeTimeString:this.filter.freeTimeString,
			name:this.filter.name,
		}).then(res=>{
			console.log(res.data);
		  this.needTotal=parseInt(res.data.msg);
		  this.needDataList=res.data.data.list;
		})
	},
	getList(){
		this.filter.pageNum=1;
		this.getListByCurrentPageNum();
	},
	
  },
  created() {
  	this.getList();
	this.$http.get("/get/student/resumes").then(res=>{
		this.data=res.data.data;
		this.resumeId=this.data[0].studentResume.id;
		if(this.resumeId!=null){
			this.text="修改"
		}
	}).catch(err=>{
		console.log(err);
	})
  }
}
</script>

<style scoped>

.flex-div{
	display: flex;
	width: 93%;
	height: 100%;
	/* background-color: white; */
	background-image: url(../../../assets/img/bg2.jpg);
	background-repeat: no-repeat; 
	background-size:100% 100%;
	border-radius: 6px;
	margin: 0 auto;
	box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.button-new-tag {
  /* margin-left: 10px; */
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.select-time .el-tag{
  background-color: #3091F2;
  color: white;
  margin-right: 12px;
  font-size: 14px;
}
.select-time .el-button{
  font-size: 14px;
}
.select-time{
  /*padding-top: 20px;*/
  margin-left: 15px;
}

.content-card {
  /* 未使用 */
  width: 93%;
  height: 100%;
  background-color: white;
  border-radius: 6px;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.content-card1{
	height: 100%;
	/* border: 2px solid rgba(0, 0, 0, .12); */
	/* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
}

.el-pagination {
  text-align: center;
  padding: 25px 0px !important;
}

.s-class-span {
  display: inline-block;
  cursor: pointer;
  padding: 3px 9px;
  border-radius: 3px;
}

.s-active {
  background-color: #409EFF;
  color: white;
}

.select-class,.select-academy {
  padding-top: 20px;
  margin-left: 15px;
  font-size: 14px;
}

.select-subject {
  padding-top: 20px;
  margin-left: 15px;
  font-size: 14px;
  padding-bottom: 15px;
  /*border-bottom: #f0f0f0 dashed 1px;*/
}

.select-academy span, .select-class span {
  color: #999999;
}

.page-info-bg {
	background-color:transparent;
}

.card-inline {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 30px;
  min-height: 400px;
}

.card-item {
  margin-top: 25px;
}

.el-pagination {
  background-color:transparent;
}

.inline-left{
	/* display: flex; */
	/* flex-wrap: wrap; */
	width: 80%;
	/* justify-content: center; */
}
.inline-right{
	text-align: center;
	width: 20%;
	border-left: 1px solid #ccc;
}
.right-head{
	width: 100%;
	/* background-color: #409EFF; */
	background-color:transparent;
	color: white;
	height: 50px;
	font-size: 24px;
	font-weight: bold;
	line-height: 50px;
}
.right-content{
	width: 100%;
	text-align: center;
}
.btn-div{
	width: 80%;
	margin: 10px 0px!important;
	height: 75px;
	font-size: 24px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.btn-div1{
  width: 80%;
  margin-top: 20px!important;
  margin-bottom: 10px;
  height: 75px;
  font-size: 24px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>
