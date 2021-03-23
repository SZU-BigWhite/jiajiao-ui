<template>
  <div class="my-card" @click="toDetail">
    <div class="card-head">{{resume.studentResume.name}} {{resume.studentResume.academyId}} {{education}}</div>
    <div class="card-content">{{resume.studentResume.teachStress}}</div>
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
		education:null,
    }
  },
  name: "resumeCard",
  methods:{
	  toDetail:function(){
		  var that=this
		  this.$router.push({
			  path:"/resume/detail",
			  query:{
				  id:that.resume.studentResume.id
			  }
		  })
		  location.reload()
	  }
  },
  created:function(){
  	//转换学历
	if (this.resume.studentResume.education == 1) {
		this.education = '本科';
	} else if (this.resume.studentResume.education == 2) {
		this.education = '研究生';
	} else if (this.resume.studentResume.education == 3) {
		this.education = '博士生';
	}
  },
  props:['resume']

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