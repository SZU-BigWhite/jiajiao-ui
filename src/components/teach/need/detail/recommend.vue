<template>
	<div class="ad">
		<div class="intro"><h5>为你推荐</h5></div>
		<el-carousel :interval="4000" type="card" height="215px">
			<el-carousel-item v-for="(item, key) in recommend" :key="key"><need-card :need="item"></need-card></el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
export default {
  name: "needRecommend",
  data: function () {
    return {
		recommend:[]
	}
  },
  props:["id"],
  created() {
  	this.getRecommendResume();
  },
  methods: {
	getRecommendResume:function(){
		this.$http.get("/recommend/need/by/need",{
			params:{
				pNId:this.id,
			}
		}).then(res=>{
			this.recommend=res.data.data;
			console.log(this.recommend)
		}).catch(err=>{
			console.log(err)
		})
	},
  }
}
</script>

<style  lang="less"  scoped>
@import '/src/assets/css/core.less';

.el-carousel__item h3 {
	color: #475669;
	font-size: 18px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}
.last-modify {
	position: absolute;
	top: 30px;
	left: 50%;
	width: 1000px;
	transform: translateX(-50%);
	text-align: right;
	font-size: 16px;
	color: #666;
	transition: all 0.2s ease-in-out;
	animation: fade 1.6s;
	@media screen and (max-width: 1024px) {
		display: none;
	}
}
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
.el-carousel {
	margin-top: 15px;
}
.intro {
	padding: 10px 30px;
	background-color: @color;
	h5 {
		font-size: 22px;
		color: white;
		line-height: 40px;
		height: 40px;
	}
}

</style>
