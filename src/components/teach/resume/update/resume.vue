<template>
  <div id="resume">
    <!-- 头部导航 -->
    <header class="header" :class="{ 'header-fixed' : headerFixed }">
      <el-row>
        <el-col :span="24">
        </el-col>
      </el-row>
    </header>
    <div v-show="headerFixed" style="position: relative;height: 60px;width: 100%;"></div>

    <main>
      <!-- 左侧导航 -->
      <div class="main-left">
      </div>

      <!-- 右侧主内容区 -->
      <div class="main-right">
        <transition name="fade">
          <div class="activePublic ">
            <el-steps :space="200" :active="step" class="step">
              <el-step title="基本信息" description=""></el-step>
              <el-step title="辅导安排" description=""></el-step>
              <el-step title="个人简历" description=""></el-step>
            </el-steps>

            <transition name="fade">
              <router-view class="view"></router-view>
            </transition>

            <div class="but-group">
              <el-button @click.native.prevent="handlePreview" v-show="preview">返回</el-button>
              <el-button @click.native.prevent="handlePreStep" v-show="preStep">上一步</el-button>
              <el-button @click.native.prevent="handleNextStep" v-show="nextStep" type="primary">下一步</el-button>
              <el-button @click.native.prevent="handlePublish" v-show="publish" type="primary">更新简历</el-button>
            </div>
          </div>
        </transition>
      </div>
    </main>
  </div>


</template>

<script>
import $ from "jquery"
import store from "@/store";

export default {
  name: 'activePublic',
  data: function () {
    return {
      headerFixed: true,
      isRouter: false,
      preview: true,
      preStep: false,
      nextStep: true,
      publish: false,
      step: 1,
	  id:null,
	  studentDetail: {
	    grade: null,
	    name: '',
	    sex: null,
	    wechat: '',
	    motto: '',     //座右铭
	    tags: [],       //性格
	    hobby: [],      //爱好
	  },
	  teachPlan: {
	    timeList: [],      //空闲时间 周一：上午
	    salary: null,
	    ableClass: "",   //小学，初/高一-三
	    subjectList: [],       //科目
	    teachGoal: '',
	    teachStress: '',
	    feedback: '',
	  },
	  educationDetail: {
	    university:'深圳大学',
	    education:null,
	    academyId: '',  //学院
	    learnMethods: "",       //学习方法
	    showSelf:""             //个人简介
	  },
	  data:null,
    }
  },
  methods: {
	storeEducationDetail(){
		this.educationDetail.university=this.data.studentResume.university;
		this.educationDetail.education=this.data.studentResume.education;
		this.educationDetail.academyId=this.data.studentResume.academyId;
		this.educationDetail.learnMethods=this.data.studentResume.learnMethods;
		this.educationDetail.showSelf=this.data.studentResume.showSelf;
		store.commit("addEducationDetail",{educationDetail:this.educationDetail})
	},
	storeTeachPlan:function(){
		this.teachPlan.salary=this.data.studentResume.salary;
		this.convertAbleClass();
		this.teachPlan.teachGoal=this.data.studentResume.teachGoal;
		this.teachPlan.teachStress=this.data.studentResume.teachGoal;
		this.teachPlan.feedback=this.data.studentResume.feedback;
		store.commit('addTeachPlan', {teachPlan:this.teachPlan});
	},
	convertAbleClass:function(){
		if(this.data.studentResume.ableClass==6){
			this.teachPlan.ableClass="小学";
		}else if(this.data.studentResume.ableClass==7){
			this.teachPlan.ableClass="初一";
		}else if(this.data.studentResume.ableClass==8){
			this.teachPlan.ableClass="初二";
		}else if(this.data.studentResume.ableClass==9){
			this.teachPlan.ableClass="初三";
		}else if(this.data.studentResume.ableClass==10){
			this.teachPlan.ableClass="高一";
		}else if(this.data.studentResume.ableClass==11){
			this.teachPlan.ableClass="高二";
		}else if(this.data.studentResume.ableClass==12){
			this.teachPlan.ableClass="高三";
		}
	},
	storeStudentDetail:function(){
		this.studentDetail.grade=this.data.studentResume.grade;
		this.studentDetail.name=this.data.studentResume.name;
		this.studentDetail.sex=this.data.studentResume.sex;
		this.studentDetail.wechat=this.data.studentResume.wechat;
		this.studentDetail.motto=this.data.studentResume.motto;
		store.commit('addStudentDetail',{studentDetail:this.studentDetail})
	},
    handlePreview: function () {
      this.$router.go(-1);
    },
    handlePreStep: function () {
      this.$router.go(-1);
      this.step--;
      this.goStep(this.step);
      $('html,body').animate({scrollTop: 0}, 500);
    },
    handleNextStep: function () {
      this.$router.push({
		path:'/teach/resume/update/step' + (this.step + 1),
		query:{
			id:this.$route.query.id
		}
	  });
      var _this = this;
      setTimeout(function () {
        if (_this.isRouter) {
          _this.step++;
          _this.goStep(_this.step);
        }
      })
      $('html,body').animate({scrollTop: 0}, 500);
    },
    handlePublish: function () {
      this.$http.post("/update/student/resume", {
        studentResume: {
		  id:this.id,
          name: store.state.studentDetail.name,
          sex: store.state.studentDetail.sex,
          wechat: store.state.studentDetail.wechat,
          academyId: store.state.educationDetail.academyId,
          salary: store.state.teachPlan.salary,
          grade: store.state.studentDetail.grade,
          teachStress: store.state.teachPlan.teachStress,
          teachGoal: store.state.teachPlan.teachGoal,
          feedback: store.state.teachPlan.feedback,
          university: store.state.educationDetail.university,
          education: store.state.educationDetail.education+1,
          learnMethods: store.state.educationDetail.learnMethods,
          showSelf: store.state.educationDetail.showSelf,
          motto: store.state.studentDetail.motto
        },
        subjectList: store.state.teachPlan.subjectList,
        timeList: store.state.teachPlan.timeList,
        tags: store.state.studentDetail.tags,
        hobby: store.state.studentDetail.hobby,
        ableClassString: store.state.teachPlan.ableClass
      })
	  this.$message.success("更新简历成功")
	  setTimeout(()=>{
		  this.$router.push("/teach/need/show")
	  },500)
    },
    goStep: function (n) {
      switch (n) {
        case 1 :
          this.preview = true;
          this.preStep = false;
          this.nextStep = true;
          this.publish = false;
          break;
        case 2 :
          this.preview = false;
          this.preStep = true;
          this.nextStep = true;
          this.publish = false;
          break;
        case 3 :
          this.preview = false;
          this.preStep = true;
          this.nextStep = false;
          this.publish = true;
          break;
      }
    }
  },
  created() {
	this.id=this.$route.query.id;
  	this.$http.get('/get/student/resume/by/id', {
  		params: {
  			id: this.id
  		}
  	}).then(res=>{
  		this.data=res.data.data;
  		this.storeEducationDetail();
		this.storeStudentDetail();
		this.storeTeachPlan();
  	}).catch(err=>{
  		console.log(err);
  	})
  },
  watch: {
    '$route': function (to, from) {
      this.isRouter = true;
    }
  },
}

</script>

<style scoped>
#resume {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;

}

.el-steps {
  justify-content: center;
}

/* 头部导航 */
header {
  z-index: 1000;
  min-width: 1200px;
  transition: all 0.5s ease;
  border-top: solid 4px #3091F2;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
}

header.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

header .el-menu-demo {
  padding-left: 300px !important;
}

/* 主内容区 */
main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 800px;
  border: solid 40px #E9ECF1;
  background-color: #fff;
}

main .main-left {
  text-align: center;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 200px;
  flex: 0 0 200px;
}

main .main-right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #fff;
  padding: 50px 70px;
}

main .el-menu {
  background-color: transparent !important;
}

/*  */
.router-link {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #475669;
  text-decoration: none;
}

.is-active .router-link {
  color: #20a0ff;
}

/* 单选框 */
.el-form-item .el-radio + .el-radio {
  margin-left: 30px !important;
}

/* 路由切换动效 */
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}

/* 导航栏菜单选中效果 */
.isActive {
  color: #20a0ff !important;
}

#app main .aside .is-active {
  color: #475669;
}

/* 卡片 */
.el-card {
  overflow: visible !important;
}

.activePublic .router-link {
  color: #fff;
}

.activePublic .but-group .el-button {
  margin-right: 20px;
}

.but-group {
  display: flex;
  justify-content: center;
  margin-right: 100px;
}
</style>