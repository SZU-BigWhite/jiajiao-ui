<template>
  <div>

    <div class="card-inline">
      <div v-for="item in this.list" class="card-item">
        <my-collection-card :volunteer="item.volunteerCollection" :count="item.count"></my-collection-card>
      </div>
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
</style>