<template>
  <div>
    <div class="card-inline">
      <el-collapse v-model="activeNames">

        <el-collapse-item v-for="(item,key) in list">
          <template slot="title">
            <h1 class="receive-h1">{{ item.studentHelp.subject }}</h1><el-tag type="success">收到的数量：{{ item.count }}</el-tag>
          </template>
          <help-receive-cards :id="item.studentHelp.id"></help-receive-cards>
        </el-collapse-item>

      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "helpReceiveList",
  data:function (){
    return{
      activeNames: ['1'],
      list:null,
    }
  },
  created() {
    this.$http.get("/get/student/helpList").then(res=>{
      console.log(res)
      this.list=res.data.data;
      console.log(this.list)
    }).catch(err=>{
      console.log(err);
    })
  },
  methods: {
  },

}
</script>

<style scoped>
.card-inline {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 93%;
  height: 100%;
  min-height: 400px;
  background-color: white;
  border-radius: 6px;
  margin: 0 auto;
  padding-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.receive-h1{
  margin-right: 50px;
  width: 100%;
  height: 50px;
  margin-left: 20px;
  text-align: left;
  line-height: 50px;
  font-weight: bold;
  font-size: 20px;
}
.el-collapse {
  width: 90%;
}
</style>