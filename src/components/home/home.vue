<template>
  <div class="home_content">
    <!--头部统计内容-->
    <el-row class="head">
      <el-col :span="18" style="padding:20px 0;background: #33CCCC;">
        <el-col :span="8">
          {{ totalActiveNum }}<br>
          <span>学生简历</span>
        </el-col>
        <el-col :span="8">
          {{ totalActiveNum }}<br>
          <span>家长需求</span>
        </el-col>
        <el-col :span="8" style="border: none;">
          {{ auditNum }}<br>
          <span>匹配成功</span>
        </el-col>
      </el-col>
      <el-col :span="5" @click.native="toGetReceive" :offset="1" class="my-receive">
        {{ totalActiveNum }}<br>
        <span>收到投递</span>
      </el-col>
    </el-row>

    <div class="card-inline">
      <div @click="toStudentResume"  class="my-content">
          学生简历库
      </div >
      <div   @click="toParentNeed" class="my-content">
        家长需求库
      </div>
      <div @click="toGetReceive"  class="my-content">
        我的简历
      </div >
      <div  @click="toGetReceive" class="my-content">
        个人信息
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data: function () {
    return {
      //标签数值
      totalActiveNum: 3,
      totalSignUp: 204,
      auditNum: 15,
      activeNum: 0,
    }
  },
  methods: {
    toGetReceive: function () {
      this.$message.success("目前接收到的投递数量为"+this.totalActiveNum)
    },
	toParentNeed:function()	{
		this.$router.push("/teach/need")
	},
	toStudentResume: function()	{
		this.$router.push("/teach/resume")
	}
  }
}
</script>

<style scoped>
.home_content > .head > .el-col > .el-col {
  padding: 20px 0;
  border-right: solid 1px #fff;
}
.card-inline {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 93%;
  height: 100%;
  background-color: white;
  border-radius: 6px;
  margin: 0 auto;
  padding: 30px 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.home_content .head {
  text-align: center;
  color: #fff;
  font-size: 30px;
  margin-bottom: 50px;
  margin-right: 50px;
  margin-left: 50px;
}
.home_content .content{
  text-align: center;
  margin-bottom: 50px;
  margin-right: 100px;
  margin-left: 100px;
  display: flex;
  justify-content: center;
}

.my-receive {
  background: #3091F2;
  padding: 40px 0;
  cursor: pointer;
}
.my-content{
  background: #3091F2;
  width: 30%;
  padding: 75px 90px;
  cursor: pointer;
  margin: 20px 35px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  color: white;
  font-weight: bold;
  text-align: center;
}
.my-content:hover{
  background: #2385e5;
}
</style>
