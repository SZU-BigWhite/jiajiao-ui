<template>
  <div>
	<div class="card-inline-head">
		义工活动
	</div>
    <div class="card-inline">
	  <div class="inline-left">
		<div v-for="item in this.list" class="card-item">
			<collection-card :volunteer="item.volunteerCollection" :count="item.count"></collection-card>
		</div>
	  </div>
	  <div class="inline-right">
		  <div><el-button type="danger" plain  @click="toMyDonateThings">捐赠历史<i class="el-icon-medal"></i></el-button></div>
		  <div><el-button type="success"  plain @click="toGetReceive" >义工组织<i class="el-icon-wind-power"></i></el-button></div>
	  </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  data:function (){
    return {
      list:null,
    }
  },

  methods:{
	toBack:function(){
		this.$router.go(-1);
	},
	toGetReceive: function () {
	  this.$router.push("/collection/receive")
	},
	toVolunteerCollectionList:function (){
	  this.$router.push("/student/volunteer/collections")
	},
	toMyDonateThings:function () {
	  this.$router.push("/student/donate/things")
	},

  },
  created() {
    this.$http.get("/get/all/volunteer/collection").then(res=>{
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
  /* border-radius: 6px; */
  border-radius: 0px 0px 6px 6px ;
  margin: 0 auto;
  padding-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.el-button{
	/* padding: 75px 90px; */
	margin: 20px 20px 0px 20px!important;
	height: 50px;
	border-radius: 6px;
	box-shadow: 5px 5px 5px #ccc;
	font-weight: bold;
	text-align: center;
	font-size: 24px;
	display: inline-block;
	height: 131px;
	width: 100%;
}
.inline-left{
	display: flex;
	flex-wrap: wrap;
	width: 75%;
	justify-content: center;
}
.inline-right{
	text-align: center;
	width: 15%;
	margin: 0px 20px;
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

</style>