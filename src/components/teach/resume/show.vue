<template>
  <div class="content-card">
    
	<div class="select-class">
      <span>选择年级 </span>
      <div @click="selectClass(i)" class="s-class-span" :class="{'s-active':i==selectedClass}"
           v-for="(item,i) in sClass">{{ item }}
      </div>
    </div>
    <div class="select-academy">
      <span>选择学院 </span>
      <div @click="selectAcademy(i)" class="s-class-span" :class="{'s-active':i==selectedAcademy}"
           v-for="(item,i) in sAcademy">{{ item }}{{ i >= 1 ? "学院" : "" }}
      </div>
    </div>
	<div class="select-academy">
	  <span>选择性别 </span>
	  <div @click="selectSex(i)" class="s-class-span" :class="{'s-active':i==selectedSex}"
	       v-for="(item,i) in sSex">{{ item }}
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
	  <el-menu-item index="3" @click="orderByEducation">{{educationText[filter.education]}}</el-menu-item>
    </el-menu>
    <div class="line"></div>

    <div class="card-inline">
      <div v-for="item in this.resumeDataList" class="card-item">
        <resume-card :resume="item"></resume-card>
      </div>
    </div>
    <div v-if="resumeTotal>filter.pageSize" class="page-info-bg">
      <el-pagination
          background
          layout="prev, pager, next"
		  :current-page.sync="filter.pageNum"
		  @current-change="handleCurrentChange"
          :page-size="filter.pageSize"
          :total="resumeTotal">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resumeShow',
  data: function () {
    return {
      activeIndex: '1',
      sClass: ['全部', '一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三','高一', '高二', '高三'],
      sAcademy:["全部","师范","人文","外语","数","物理","化","计算机","美术","音乐舞蹈","其他"],
      sSubject:['作业辅导','语文','数学','英语','历史','地理','生物','政治','物理','化学','音乐','美术','舞蹈','计算机','体育'],
	  sSex:['全部','男','女'],
	  selectedSex:0,
      selectedClass: 0,
      selectedAcademy: 0,
      selectedSubject: [],
      selectedTime: [],
	  salaryText:['按价格',"价格降序",'价格升序'],
	  updateTimeText:['按更新时间',"最近更新","最早发布"],
	  educationText:['按学历排序',"本科优先",'高学历优先'],
      form: {
        week: '',
        time: '',
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      resumeDataList:[],
      resumeTotal:100,
	  filter:{
		pageNum:1,
		pageSize:4,
		sex:0,
		salary:0,
		updateTime:0,
		ableClass:0,
		academyId:null,
		freeTimeString:[],
		name:[],
		education:0,
	  }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    selectClass: function (i) {
      this.selectedClass = i;
	  this.filter.ableClass=this.selectedClass;
	  this.getList();
    },
    selectAcademy: function (i) {
      this.selectedAcademy = i;
	  if(this.selectedAcademy==0){
		  this.filter.academyId=null;
	  }else {
		  this.filter.academyId=this.sAcademy[this.selectedAcademy];
	  }
	  
	  this.getList()
    },
    selectSubject: function (i) {
	  this.filter.name=this.selectedSubject
	  this.getList()
    },
	selectSex:function (i) {
      this.selectedSex = i;
	  this.filter.sex=this.selectedSex;
	  this.getList()
    },
	orderBySalary:function(){
		this.filter.updateTime=0;
		this.filter.education=0;
		this.filter.salary++;
		if(this.filter.salary>=3){
			this.filter.salary=0;
		}
		this.getList()
	},
	orderByUpdateTime:function(){
		this.filter.salary=0;
		this.filter.education=0;
		this.filter.updateTime++;
		if(this.filter.updateTime>=3){
			this.filter.updateTime=0;
		}
		this.getList()
	},
	orderByEducation:function(){
		this.filter.salary=0;
		this.filter.updateTime=0;
		this.filter.education++;
		if(this.filter.education>=3){
			this.filter.education=0;
		}
		this.getList();
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
	handleCurrentChange:function ()	{
		this.getListByCurrentPageNum()
	},
	getListByCurrentPageNum:function(){
		this.$http.post("/get/students/resumelist/order",{
			pageNum:this.filter.pageNum,
			pageSize:this.filter.pageSize,
			sex:this.filter.sex,
			salary:this.filter.salary,
			updateTime:this.filter.updateTime,
			ableClass:this.filter.ableClass,
			academyId:this.filter.academyId,
			freeTimeString:this.filter.freeTimeString,
			name:this.filter.name,
			education:this.filter.education,
		}).then(res=>{
		  this.resumeTotal=parseInt(res.data.msg);
		  this.resumeDataList=res.data.data.list;
		})
	},
	getList(){
		this.filter.pageNum=1;
		this.getListByCurrentPageNum();
	}

  }
}
</script>

<style>

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
  width: 93%;
  height: 100%;
  /* background-color: white; */
  background-image: url(../../../assets/img/bg3.jpg);
  background-repeat: no-repeat;
  background-size:100% 100%;
  border-radius: 6px;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
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
  background-color: transparent;
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
  background-color: transparent;
}

</style>
