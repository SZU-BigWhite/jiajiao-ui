<template>
  <div class="my-card" @click="toDetail">
    <div class="card-head">{{resume.studentResume.name}} {{resume.studentResume.academyId}} {{education}}</div>
    <div class="card-content" v-html="resume.studentResume.teachStress"></div>
    <div class="card-bottom">
      <el-tag>时薪：{{resume.studentResume.salary}}</el-tag>
      <el-tag type="success">{{resume.studentResume.characterCondiction}}</el-tag>
      <!--<el-tag type="info">标签三</el-tag>-->
      <!--<el-tag type="warning">标签四</el-tag>-->
      <el-tag type="danger">高考分：{{resume.studentResume.grade}}</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  name: "resumeCard",
  methods:{
	  toDetail:function(){
		  let  to;
		  if(this.path==null){
			  to="/resume/detail"
		  }else{
			  to=this.path
		  }
		  
		  let routerUrl=this.$router.resolve({
			  path:to,
			  query:{
				  id:this.resume.studentResume.id,
			  }
		  })
		  window.open(routerUrl.href,"_blank");
	  }
  },
  computed:{
	  education:function(){
		  if (this.resume.studentResume.education == 1) {
		  	return '本科';
		  } else if (this.resume.studentResume.education == 2) {
		  	return '研究生';
		  } else if (this.resume.studentResume.education == 3) {
		  	return '博士生';
		  }
	  }
  },
  created:function(){
	  this.resume.studentResume.teachStress=this.resume.studentResume.teachStress.replace(/\n/g, '<br />');
	  console.log(this.resume)
  },
  props:['resume','path']

}
</script>

<style scoped>
.my-card {
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
div .my-card:hover{
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
</style>