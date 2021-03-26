<template>
  <div>
	<div class="card-inline-head">
		收到的帮助 
		<span class="back el-icon-back" @click="toBack" ></span>
	</div>
    <div class="card-inline">
		
      <el-collapse v-model="activeNames">

        <el-collapse-item v-for="(item,key) in list">
          <template slot="title">
            <h1 class="receive-h1">{{ item.studentHelp.subject }}</h1>
			<el-button type="primary" @click="updateHelp(item.studentHelp.id)">修改内容</el-button>
			<el-button type="danger" @click="deleteHelp(item.studentHelp.id)">删除</el-button>
			<el-tag type="success">收到的数量：{{ item.count }}</el-tag>
          </template>
          <help-receive-cards :id="item.studentHelp.id" ></help-receive-cards>
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
	toBack:function(){
		this.$router.go(-1);
	},
	updateHelp:function (id){
	  this.$router.push({
	    path: "/student/help/update",
	    query: {
	      id: id
	    }
	  })
	},
	deleteHelp:function (id){
	  this.$http.delete("/delete/student/help",{
	    params:{
	      id:id
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
  /* padding-bottom: 30px; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding-top: 15px;
}
.card-inline-head {
  text-align: center;
  width: 93%;
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
  border-top: 0px;
  border-bottom: 0px;
}
.el-button{
	margin-right: 10px;
	margin-left: 0px!important;
}
.el-tag{
	margin-right: 10px;
}
</style>