<template>
  <div id="need">
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
              <el-step title="辅导要求" description=""></el-step>
              <el-step title="学生情况" description=""></el-step>
            </el-steps>

            <transition name="fade">
              <router-view class="view"></router-view>
            </transition>

            <div class="but-group">
              <el-button @click.native.prevent="handlePreview" v-show="preview">返回</el-button>
              <el-button @click.native.prevent="handlePreStep" v-show="preStep">上一步</el-button>
              <el-button @click.native.prevent="handleNextStep" v-show="nextStep" type="primary">下一步</el-button>
              <el-button @click.native.prevent="handlePublish" v-show="publish" type="primary">更新需求</el-button>
            </div>
          </div>
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
import $ from "jquery";
import store from "@/store";

export default {
  name: "need.vue",
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
	  data:null,
	  parentConditionDetail: {
	    learnCondiction:'',
	    expectFeedback:'',
	    expectGoal:'',
	    gradeCondiction:'',
	  },
	  parentReqDetail: {
	    timeList: [],      //空闲时间 周一：上午
	    salary: null,
	    duration: null,
	    times: null,
	    subjectList: [],       //科目
	    education:null,   //学历
	    teachReq:null
	  },
	  parentNeedDetail: {
	    name: '',
	    wechat: '',
	    studentClass:'',
	    location:'',
	    arriveHours:null,
	    teachBySelf:''
	  },
    }
  },
  
  methods: {
	storeParentNeedDetail:function(){
		this.parentNeedDetail.name=this.data.parentNeed.name;
		this.parentNeedDetail.wechat=this.data.parentNeed.wechat;
		this.convertClass();
		this.parentNeedDetail.location=this.data.parentNeed.location;
		this.parentNeedDetail.arriveHours=this.data.parentNeed.arriveHours;
		this.parentNeedDetail.teachBySelf=this.data.parentNeed.teachBySelf;
		store.commit('addParentNeedDetail',{parentNeedDetail:this.parentNeedDetail})
	},
	storeParentReqDetail:function(){
		this.parentReqDetail.salary=this.data.parentNeed.salary;
		this.parentReqDetail.duration=this.data.parentNeed.duration;
		this.parentReqDetail.times=this.data.parentNeed.times;
		this.parentReqDetail.education=this.data.parentNeed.education;
		this.parentReqDetail.teachReq=this.data.parentNeed.teachReq;
		store.commit('addParentReqDetail',{parentReqDetail:this.parentReqDetail})
	},
	storeParentConditionDetail:function(){
		this.parentConditionDetail.learnCondiction=this.data.parentNeed.learnCondiction;
		this.parentConditionDetail.expectFeedback=this.data.parentNeed.expectFeedback;
		this.parentConditionDetail.expectGoal=this.data.parentNeed.expectGoal;
		this.parentConditionDetail.gradeCondiction=this.data.parentNeed.gradeCondiction;
		store.commit('addParentConditionDetail',{parentConditionDetail:this.parentConditionDetail})
	},
	
	convertClass:function(){
		if(this.data.parentNeed.studentClass==1){
			this.parentNeedDetail.studentClass="一年级";
		}else if(this.data.parentNeed.studentClass==2){
			this.parentNeedDetail.studentClass="二年级";
		}else if(this.data.parentNeed.studentClass==3){
			this.parentNeedDetail.studentClass="三年级";
		}else if(this.data.parentNeed.studentClass==4){
			this.parentNeedDetail.studentClass="四年级";
		}else if(this.data.parentNeed.studentClass==5){
			this.parentNeedDetail.studentClass="五年级";
		}else if(this.data.parentNeed.studentClass==6){
			this.parentNeedDetail.studentClass="六年级";
		}else if(this.data.parentNeed.studentClass==7){
			this.parentNeedDetail.studentClass="初一";
		}else if(this.data.parentNeed.studentClass==8){
			this.parentNeedDetail.studentClass="初二";
		}else if(this.data.parentNeed.studentClass==9){
			this.parentNeedDetail.studentClass="初三";
		}else if(this.data.parentNeed.studentClass==10){
			this.parentNeedDetail.studentClass="高一";
		}else if(this.data.parentNeed.studentClass==11){
			this.parentNeedDetail.studentClass="高二";
		}else if(this.data.parentNeed.studentClass==12){
			this.parentNeedDetail.studentClass="高三";
		}
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
      this.$router.push('/teach/need/update/step' + (this.step + 1));
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
	  this.$http.post("/update/parent/need",{
		parentNeed:{
			id:this.id,
			name:store.state.parentNeedDetail.name,
			wechat:store.state.parentNeedDetail.wechat,
			location:store.state.parentNeedDetail.location,
			arriveHours:store.state.parentNeedDetail.arriveHours,
			teachBySelf:store.state.parentNeedDetail.teachBySelf,
			
			duration:store.state.parentReqDetail.duration,
			education:store.state.parentReqDetail.education,
			salary:store.state.parentReqDetail.salary,
			teachReq:store.state.parentReqDetail.teachReq,
			times:store.state.parentReqDetail.times,
			
			expectFeedback:store.state.parentConditionDetail.expectFeedback,
			expectGoal:store.state.parentConditionDetail.expectGoal,
			gradeCondiction:store.state.parentConditionDetail.gradeCondiction,
			learnCondiction:store.state.parentConditionDetail.learnCondiction,
		},
		studentClassString:store.state.parentNeedDetail.studentClass,
		subjectList:store.state.parentReqDetail.subjectList,
		timeList:store.state.parentReqDetail.timeList,
		
	  }).then(res=>{
		  console.log(res)
		  this.$message.success("需求添加成功"),
		  setTimeout(()=>{
			  this.$router.push("/teach/resume/show")
		  },500)
	  }).catch(err=>{
		  console.log(err)
	  })
      console.log(store.state.parentNeedDetail);
	  console.log(store.state.parentReqDetail);
	  console.log(store.state.parentConditionDetail);
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
  watch: {
    '$route': function (to, from) {
      this.isRouter = true;
    }
  },
  created() {
  	this.id=this.$route.query.id;
  	this.$http.get('/get/parent/nedd/by/id', {
  		params: {
  			id: this.id
  		}
  	}).then(res=>{
  		this.data=res.data.data;
  		console.log(this.data);
  		this.storeParentConditionDetail();
  		this.storeParentReqDetail();
  		this.storeParentNeedDetail();
  	}).catch(err=>{
  		console.log(err);
  	})
  },
  
}
</script>

<style scoped>
#need {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;

}
.el-steps{
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
.but-group{
  display: flex;
  justify-content: center;
  margin-right: 100px;
}
</style>