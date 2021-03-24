<template>
	<div>
		<div class="card-inline-head">
			义工活动 
			<span class="back el-icon-back" @click="toBack" ></span>
		</div>
		
		<div class="card-inline">
		    <div class="my-content" @click="toVolunteerCollectionList">
		      捐赠项目
		    </div>
		    <div @click="toAddVolunteerCollection" class="my-content">
		      新增捐赠项目
		    </div>
		    <div @click="toMyDonateThings" class="my-content">
		      捐赠的物品
		    </div>
		    <div @click="toGetReceive" class="my-content">
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
      this.$router.push("/collection/receive")
    },
    toAddVolunteerCollection:function (){
      this.$router.push("/collection/add")
    },
    toVolunteerCollectionList:function (){
      this.$router.push("/student/volunteer/collections")
    },
    toMyDonateThings:function () {
      this.$router.push("/student/donate/things")
    },
	toBack:function(){
		this.$router.go(-1);
	}

  }
}
</script>

<style scoped>
.card-inline {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 93%;
  background-color: white;
  border-radius: 6px;
  margin: 0 auto;
  padding: 30px 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
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
  height: 30%;
}
.my-content:hover{
  background: #2385e5;
}
</style>