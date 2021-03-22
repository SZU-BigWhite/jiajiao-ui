<template>
	<div class="card-inline">
		<div class="my-content" @click="toShowTeachResume">查找简历</div>
		<div @click="toAddTeachResume" class="my-content">新增简历</div>
		<div @click="toMyDonateThings" class="my-content">我的需求</div>
		<div @click="toGetReceive" class="my-content">简历推荐</div>
	</div>
</template>

<script>
export default {
  name: "index",
  data: function () {
    return {}
  },
  methods: {
	toShowTeachResume: function () {
	this.$router.push("/teach/resume/show")
	},
	toAddTeachResume:function (){
	this.$router.push("/teach/resume/add")
	},
	toVolunteerCollectionList:function (){
	this.$router.push("/student/volunteer/collections")
	},
	toMyDonateThings:function () {
	this.$router.push("/student/donate/things")
	}
  }
}
</script>

<style scoped>
.card-inline {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 93%;
	background-color: white;
	border-radius: 6px;
	margin: 0 auto;
	padding: 30px 0px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.my-content {
	background: #3091f2;
	width: 30%;
	padding: 75px 90px;
	cursor: pointer;
	margin: 20px 35px;
	border-radius: 6px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
	color: white;
	font-weight: bold;
	text-align: center;
	height: 30%;
}
.my-content:hover {
	background: #2385e5;
}
</style>
