<template>
  <div class="volunteer">
    <div class="content">
      <div class="my-content" @click="toVolunteerCollectionList">
        捐赠项目
      </div>
      <div @click="toAddVolunteerCollection" class="my-content">
        新增捐赠项目
      </div>
    </div>
    <div class="content">
      <div @click.native="toGetReceive" class="my-content">
        捐赠的物品
      </div>
      <div @click.native="toGetReceive" class="my-content">
        我的捐赠项目
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data: function () {
    return {}
  },
  methods: {
    toGetReceive: function () {
      this.$message.success("目前接收到的投递数量为" + this.totalActiveNum)
    },
    toAddVolunteerCollection:function (){
      console.log(123)
      this.$router.push("/student/volunteer")
    },
    toVolunteerCollectionList:function (){
      this.$router.push("/student/volunteer/collections")
    }
  }
}
</script>

<style scoped>
.volunteer {
  padding-top: 60px;
}

.home_content > .head > .el-col > .el-col {
  padding: 20px 0;
  border-right: solid 1px #fff;
}

.home_content .head {
  text-align: center;
  color: #fff;
  font-size: 30px;
  margin-bottom: 50px;
  margin-right: 50px;
  margin-left: 50px;
}

.home_content .content {
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

.my-content {
  background: #3091F2;
  width: 300px;
  padding: 60px 90px;
  cursor: pointer;
  margin: 0px 35px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  color: white;
  font-weight: bold;
}

.my-content:hover {
  background: #2385e5;
}
</style>