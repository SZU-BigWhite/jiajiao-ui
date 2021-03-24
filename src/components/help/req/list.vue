<template>
  <div>
    <div class="card-inline-head">
	  求助列表 
	  <span class="back el-icon-back" @click="toBack" ></span>
    </div>

    <div class="card-inline">
      <div v-for="item in this.list" class="card-item">
        <help-card :studentHelp="item.studentHelp" :count="item.count"></help-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "helpReqList",
  data:function (){
    return {
      list:null
    }
  },
  methods:{
	  toBack:function(){
	  		this.$router.go(-1);
	  	}

  },
  created() {
    this.$http.get("/get/students/helpList").then(res=>{
      this.list=res.data.data
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