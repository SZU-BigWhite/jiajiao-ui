<template>
  <div>
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

  methods:function (){

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