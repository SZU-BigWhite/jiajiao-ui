<template>
  <div>
	<div class="card-inline-head">
		收到的捐赠物 
		<span class="back el-icon-back" @click="toBack" ></span>
	</div>

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
	toBack:function(){
		this.$router.go(-1);
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
  /* background-color: white; */
  background-image: url(../../../../assets/img/bg6.jpg);
  background-repeat: no-repeat;
  background-size:100% 100%;
  border-radius: 6px;
  margin: 0 auto;
  padding-bottom: 30px;
  min-height: 600px;
}
.page-info-bg {
  background-color: #ffffff;
}
.card-inline-head {
  text-align: center;
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

</style>