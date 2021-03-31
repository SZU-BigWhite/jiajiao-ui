<template>
  <div>
	<div class="card-inline-head">
		捐赠历史 
		<span class="back el-icon-back" @click="toBack" ></span>
	</div>
	
	<div class="card-inline">
	  <div v-for="item in this.list" class="card-item">
	    <thing-card :thing="item.volunteerThings" :books="item.books"></thing-card>
	  </div>
	</div>
  </div>
</template>

<script>
export default {
  name: "thingList",
  data:function (){
    return {
      list:null,
    }
  },

  methods:{
	toBack:function(){
		this.$router.go(-1);
	}

  },
  created() {
    this.$http.get("/get/volunteer/things/by/uid").then(res=>{
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
  /* background-color: white; */
  background-image: url(../../../assets/img/bg8.jpg);
  background-repeat: no-repeat; 
  background-size:100% 100%;
  border-radius: 6px;
  margin: 0 auto;
  padding-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  min-height: 600px;
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


.page-info-bg {
  background-color: #ffffff;
}
</style>