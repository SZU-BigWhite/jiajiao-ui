<template>
  <div>
	<div class="card-inline-head">
		义工组织 
		<span class="back el-icon-back" @click="toBack" ></span>
	</div>
	
	<div class="card-inline">
	  <div v-for="item in this.list" class="card-item">
		<my-collection-card :volunteer="item.volunteerCollection" :count="item.count"></my-collection-card>
	  </div>
	  <el-button @click="toAddVolunteerCollection" plain><i class="el-icon-circle-plus-outline"></i>捐赠项目</el-button>
	</div>
  </div>
</template>

<script>
export default {
  name: "MyCollecionList",
  data:function (){
    return {
      list:null,
    }
  },

  methods:{
	  toBack:function(){
	  		this.$router.go(-1);
	  	},
	  toAddVolunteerCollection:function (){
	    this.$router.push("/collection/add")
	  },

  },
  created() {
    this.$http.get("/get/my/volunteer/collection").then(res=>{
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
  width: 93%;
  height: 100%;
  background-color: white;
  border-radius: 6px;
  margin: 0 auto;
  padding-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.card-inline-head {
  text-align: center;
  width: 93%;
  background-color: white;
  border-radius: 6px;
  margin: 0 auto;
  background-color: #82d45a;
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
.el-button{
	font-weight: bold;
	text-align: center;
	font-size: 24px;
	margin-right: 30px;
	margin-left: 30px;
	margin-top: 25px;
	height: 200px;
	width: 400px;
	background-color: white;
	border-radius: 15px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

</style>