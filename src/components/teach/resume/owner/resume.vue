<template>
	<div>
		<div class="relative" v-if="id!=null">
			<resume-content :id="id"></resume-content>
		</div>
		<resume-comment :id="id"></resume-comment>
		<a class="fixed-right cursor" @click="updateResume">
			<i class="el-icon-edit-outline"></i>
			修改
		</a>
	</div>
</template>

<script>
export default {
  name: "index",
  data: function () {
    return {
		id:null
	}
  },
  
  created() {
  	this.id=this.$route.query.id
  },
  methods: {
	  updateResume:function(){
		this.$router.push({
			path:"/teach/resume/update",
			query:{
				id:this.id,
			}
		})
		
	  }
  }
}
</script>


<style  lang="less"  scoped>
@import '/src/assets/css/core.less';
.ad {
	position: relative;
	width: 1024px;
	margin: 50px auto 30px;
	border-radius: 5px;
	background-color: #fff;
	box-shadow: 0 0 15px #c0c0c0;
	overflow: hidden;
	transition: all 0.2s ease-in-out;
	animation: fadeUp 2s cubic-bezier(0.19, 1, 0.22, 1);
	@media screen and (max-width: 1024px) {
		margin: 0;
		box-shadow: none;
		width: auto;
		border-radius: 0;
	}
	bottom: 20px;
}

.fixed-right {
  display: inline-block;
  position: fixed;
  z-index: 10;
  bottom: 20px;
  left: 50%;
  margin-left: 520px;
  border-radius: 3px;
  color: #fff;
  background-color: #3091F2;
  transition: all 0.2s ease-in-out;
  animation: fade 1.6s;
  i {
    color: #fff;
  }
  @media screen and (max-width: 1246px) {
    left: auto;
    right: 8px;
    margin-left: 0;
  }
  text-align: center;
  padding: 8px;
  font-size: 18px;
}
.cursor {
	cursor: pointer;
}
</style>
