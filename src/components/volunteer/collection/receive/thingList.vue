<template>
  <div>
    <el-menu active-text-color="#0665d0"
             background-color="#ffffff" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
             @select="handleSelect">
      <el-menu-item index="1" @click="getList(-1)">全部</el-menu-item>
      <el-menu-item index="2" @click="getList(0)">未回收</el-menu-item>
      <el-menu-item index="3" @click="getList(1)">已联系</el-menu-item>
      <el-menu-item index="4" @click="getList(2)">已回收</el-menu-item>
    </el-menu>
    <div class="line"></div>
    <div class="card-inline">
      <div v-for="item in this.list" class="card-item">
        <receive-thing-card :thing="item.volunteerThings" :books="item.books"></receive-thing-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "receiveThings",
  data:function (){
    return {
      list:null,
      activeIndex: '1',
    }
  },

  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getList:function (status){
      var temp=null;
      if(status!=-1){
        temp=status;
      }
      this.$http.get("/get/volunteer/things/by/cid",{
        params:{
          cId:this.$route.query.id,
          status:temp,
        }
      }).then(res=>{
        this.list=res.data.data;
        console.log(this.list)
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  created() {
    this.$http.get("/get/volunteer/things/by/cid",{
      params:{
        cId:this.$route.query.id
      }
    }).then(res=>{
      this.list=res.data.data;
      console.log(this.list)
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style scoped>
.card-inline {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  background-color: white;
  border-radius: 6px;
  margin: 0 auto;
  padding-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.page-info-bg {
  background-color: #ffffff;
}
</style>