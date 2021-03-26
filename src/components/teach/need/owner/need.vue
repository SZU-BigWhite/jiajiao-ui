<template>
	<div>
		<div class="relative" v-if="id!=null">
			<need-content :id="id"></need-content>
		</div>
		<need-comment :id="id"></need-comment>
		<a class="fixed-right cursor" @click="updateNeed">
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
  methods: {
	updateNeed:function(){
			this.$router.push({
				path:"/teach/need/update",
				query:{
					id:this.id,
				}
			})
	}
  },
  created() {
  	this.id=this.$route.query.id
  },
}
</script>

<style scoped>

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
