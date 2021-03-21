<template>
  <div id="volunteer_add">
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
            <h1 class="help-header">义工回收</h1>

            <div class="help-content">
              <el-form label-position="left" label-width="108px" :model="studentVolunteer" :rules="studentVolunteer">

                <el-form-item class="must" label="社团名" prop="ademecy">
                  <el-input class="s-mini-input1" v-model="studentVolunteer.name"></el-input>
                </el-form-item>

                <el-form-item class="must" label="微信号" prop="subject">
                  <el-input class="s-mini-input" v-model="studentVolunteer.wechet"></el-input>
                </el-form-item>
                <el-form-item class="must" label="回收时间" prop="subject">
                  <div class="block">
                    <!--<span class="demonstration">默认</span>-->
                    <el-date-picker
                        v-model="time"
                        type="daterange"
                        range-separator="-"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                  </div>
                </el-form-item>

                <el-form-item class="must" label="回收策略" prop="showSelf">
                  <el-input
                      type="textarea"
                      :autosize="{ minRows: 5, maxRows: 100}"
                      placeholder="回收的物品范围，回收的目的"
                      v-model="studentVolunteer.content">
                  </el-input>
                </el-form-item>
              </el-form>
            </div>

            <div class="but-group">
              <el-button @click.native.prevent="handlePreview">返回</el-button>
              <el-button @click.native.prevent="handlePublish" type="primary">提交表单</el-button>
            </div>
          </div>
        </transition>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: "volunteerAdd",
  data: function () {
    return {
      headerFixed: true,
      studentVolunteer:{
        name:"",
        wechet:"",
        content:"",
        startTime:"",
        endTime:"",
      },
      time:null,
    }
  },
  methods:{
    handlePreview: function () {
      this.$router.go(-1);
    },
    handlePublish: function () {
      this.$http.post("/add/volunteer/collection",this.studentVolunteer).then(res=>{
        this.$message.success(res.data.msg);
        setTimeout(()=>{
          this.$router.go(-1)
        },2000);
      }).catch(err=>{
        console.log(err);
      });
    },
    p(s) {
      return s < 10 ? '0' + s : s
    }
  },
  watch:{
    time:function () {
      const d = new Date(this.time[0]);
      this.studentVolunteer.startTime = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate());
      const d2= new Date(this.time[1]);
      this.studentVolunteer.endTime = d2.getFullYear() + '-' + this.p((d2.getMonth() + 1)) + '-' + this.p(d2.getDate());
    }
  }
}
</script>

<style scoped>
#volunteer_add {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;

}

.s-mini-input {
  width: 250px !important;
}

.s-mini-input1 {
  width: 250px !important;
  margin-right: 100px;
}

.help-content {
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 125, 255, .22), 0 0 6px rgba(0, 125, 255, .14);
  padding: 40px 100px 30px 100px;
  margin: 30px 100px 30px 30px;
  border-radius: 5px;
}

.help-header {
  color: #409EFF;
  text-align: center;
  padding-right: 50px;
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