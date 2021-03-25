<template>
	<div>
		<div class="relative" v-if="id!=null">
			<resume-content :id="id"></resume-content>
		</div>
		<resume-comment :id="id"></resume-comment>
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
</style>
