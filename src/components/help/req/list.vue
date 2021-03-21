<template>
  <div>
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
</style>