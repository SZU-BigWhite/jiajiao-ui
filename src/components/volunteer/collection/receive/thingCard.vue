<template>
  <div>
    <div class="volunteer-card">
      <div class="card-head">微信号：{{thing.wechet}}</div>
      <div class="card-content">捐赠物品：<span v-for="item in books">{{ item }}</span></div>
      <div class="card-bottom">
        <el-tag type="success">处理状态： {{ status }}</el-tag>
        <el-tag type="danger">捐赠时间： {{ thing.createTime }}</el-tag>

        <el-dropdown trigger="click">
          <el-tag class="mouse" effect="dark">修改状态</el-tag>
          <el-dropdown-menu slot="dropdown" class="dropdown_menu">
            <el-dropdown-item><a @click="setStatus(0)">未回收</a></el-dropdown-item>
            <el-dropdown-item><a @click="setStatus(1)">已联系</a></el-dropdown-item>
            <el-dropdown-item><a @click="setStatus(2)">已回收</a></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "receiveThingCard",
  data:function (){
    return  {
      // status:null
    }
  },
  props:['thing','books'],
  methods:{
    setStatus:function (status){
      this.$http.get("/set/things/status",{
        params:{
          id:this.thing.id,
          status:status
        }
      }).then(res=>{
        this.thing.status=status;
        this.$message.success(res.data.msg)
      }).catch(err=>{
        console.log(err)
      })
    },
  },
  computed:{
    status:function (){
      if(this.thing.status==0){
        return "未回收";
      }else if(this.thing.status==1){
        return "已联系";
      }else if(this.thing.status==2){
        return "已回收";
      }
    }
  },

}
</script>

<style scoped>
.volunteer-card {
  margin-right: 30px;
  margin-left: 30px;
  height: 200px;
  width: 400px;
  /*background-color: #fafafa;*/
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.s-mini-input {
  width: 220px !important;
}
.s-mid-input{
  width: 400px !important;
}
.mouse{
  cursor: pointer;
}

div .volunteer-card:hover {
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

.input-new-tag {
  width: 90px!important;
  /*margin-left: 10px;*/
  vertical-align: bottom;
}
</style>