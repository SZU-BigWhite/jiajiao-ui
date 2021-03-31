<template>
  <div>
    <div class="volunteer-card" v-if="show" >
      <div class="card-head">{{ name }} </div>
      <div class="card-content">捐赠物品：<span v-for="item in books">{{item}}</span></div>
      <div class="card-bottom">
        <el-tag type="success">处理状态： {{ thing.status==0?"未处理":"已处理" }}</el-tag>
        <el-tag type="danger">捐赠时间： {{ thing.createTime }}</el-tag>
		<el-tag class="mouse" type="warning" effect="dark" @click="deleteThing">删除</el-tag>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "thingCard",
  data:function (){
    return  {
      name:"",
	  show:true
    }
  },
  props:['thing','books'],
  methods:{
    deleteThing:function(){
		this.$http.delete("/delete/volunteer/things",{
			params:{
				id:this.thing.id
			}
		}).then(res=>{
			console.log(res);
			this.$message.success("取消捐赠成功");
			setTimeout(()=>{
				this.show=false;
			},500)
			
		}).catch(err=>{
			console.log(err);
		})
	}
  },
  created() {
	console.log(this.thing);
    this.$http.get("/get/volunteer/collection/by/id",{
      params:{
        id:this.thing.cId
      }
    }).then(res=>{
      this.name=res.data.data.volunteerCollection.name
      console.log(res);
    })
  }
}
</script>

<style scoped>
.volunteer-card {
  margin-right: 30px;
  margin-left: 30px;
  height: 200px;
  width: 400px;
  /*background-color: #fafafa;*/
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.s-mini-input {
  width: 220px !important;
}
.s-mid-input{
  width: 400px !important;
}

div .volunteer-card:hover {
  background-color: #f6f6f6;
}

.card-head {
  height: 50px;
  margin-left: 20px;
  text-align: left;
  line-height: 50px;
  font-weight: bold;
  font-size: 20px;
}

.card-content {
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 8px;
  color: #8c939d;
  height: 100px;
  line-height: 20px;
  overflow: hidden;
}

.card-bottom {
  padding-left: 20px;
  padding-right: 20px;
}

.el-tag {
  margin-right: 5px;
}

.input-new-tag {
  width: 90px!important;
  /*margin-left: 10px;*/
  vertical-align: bottom;
}
</style>