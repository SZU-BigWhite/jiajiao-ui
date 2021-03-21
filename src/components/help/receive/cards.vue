<template>
  <div>
    <div class="card-inline">
      <div v-for="item in this.list" class="card-item">
        <help-receive-card :studentHelp="item"></help-receive-card>
      </div>
    </div>
    <div class="receive-bottom">
      <el-button type="primary" @click="updateHelp">修改内容</el-button>
      <el-button type="danger" @click="deleteHelp">删除</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "helpReceiveCards",
  data:function (){
    return  {
      list:null,
    }
  },
  props:["id"],
  methods:{
    updateHelp:function (){
      var that=this;
      this.$router.push({
        path: "/student/help/update",
        query: {
          id: that.id
        }
      })
    },
    deleteHelp:function (){
      this.$http.delete("/delete/student/help",{
        params:{
          id:this.id
        }
      }).then(res=>{
        this.$message.success("删除成功")
        setTimeout(()=>{
          this.$router.go(-1)
        },1000)
        console.log(res)
      }).catch(err=>{
        console.log(err);
      })
    }
  },

  created() {
    this.$http.get("/get/student/help/receive",{
      params:{
        id:this.id
      }
    }).then(res=>{
      this.list=res.data.data
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>
.card-inline {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /*width: 93%;*/
  height: 100%;
  background-color: white;
  border-radius: 6px;
  margin: 0 auto;
  padding-bottom: 30px;
  /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/
}
.receive-bottom{
  margin-left: 50px;
}
</style>