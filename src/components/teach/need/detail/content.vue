<template>
	<div>
		<p class="last-modify">最后更新时间：{{ parentNeed.updateTime }}</p>
		<div id="wrapper">
			<div class="basic">
				<section>
					<h1 class="left">
						{{ parentNeed.name }}
						<small>{{ classString }}</small>
					</h1>
					<!-- <h2 class="right">
						{{ studentResume.university }}
						<small>/ {{ studentResume.academyId }}</small>
					</h2> -->
				</section>
				<div class="relative">
					<div class="left">
						<div class="left-small">每周辅导次数： {{ parentNeed.times }}</div>
						<div class="left-small">每次辅导时长：{{ parentNeed.duration }}</div>
						<div class="left-small">时薪：{{ parentNeed.salary }} 元</div>
					</div>
					<div class="right">
						<a>
							<span>{{ parentNeed.location }}</span>
							<i class="el-icon-location-information"></i>
						</a>
						<a>
							<span>路程时间 {{ parentNeed.arriveHours }} 分钟</span>
							<i class="el-icon-time"></i>
						</a>
					</div>
				</div>
			</div>
			<div class="project">
				<h5>成绩情况</h5>
				<div class="inner-content" v-html="parentNeed.gradeCondiction"></div>
				<div class="inner-content stack">
					<b>需辅导科目：</b>
					<el-tag class="my-tag" effect="dark" type="danger" v-for="item in subjectList">{{ item.name }}</el-tag>
				</div>
			</div>
			<div class="skill">
				<h5>学习状态</h5>
				<div class="inner-content" v-html="parentNeed.learnCondiction"></div>
			</div>
			
			
			<div class="project">
				<h5>辅导要求</h5>
				<div class="inner-content" v-html="parentNeed.teachReq"></div>
				<div class="inner-content stack">
					<b>空闲时间：</b>
					<el-tag class="my-tag" effect="dark" v-for="item in timeShowList">{{ item }}</el-tag>
				</div>
			</div>
			<div class="project">
				<h5>每周反馈要求</h5>
				<div class="inner-content" v-html="parentNeed.expectFeedback"></div>
			</div>
			<div class="project">
				<h5>期待效果</h5>
				<div class="inner-content" v-html="parentNeed.expectGoal"></div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
  name: "needContent",
  data: function () {
    return {
		parentNeed: {},
		subjectList: [],
		timeList: [],
		timeShowList: [],
		receiveCounts: 0,
		education: '',
	}
  },
  computed:{
	  classString:function(){
	  	let classNum=this.parentNeed.studentClass;
	  	if(classNum==1){
	  		return "一年级";
	  	}else if(classNum==2){
	  		return "二年级";
	  	}else if(classNum==3){
	  		return "三年级";
	  	}else if(classNum==4){
	  		return "四年级";
	  	}else if(classNum==5){
	  		return "五年级";
	  	}else if(classNum==6){
	  		return "六年级";
	  	}else if(classNum==7){
	  		return "初一";
	  	}else if(classNum==8){
	  		return "初二";
	  	}else if(classNum==9){
	  		return "初三";
	  	}else if(classNum==10){
	  		return "高一";
	  	}else if(classNum==11){
	  		return "高二";
	  	}else if(classNum==12){
	  		return "高三";
	  	}
	  }
  },
  props:["id"],
  created() {
  	this.getResumeDetail()

	// console.log(this.id)
  },
  methods: {
	getResumeDetail:function(){
		this.$http.get('/get/parent/nedd/by/id', {
			params: {
				id: this.id
			}
		}).then(res => {
			console.log(res);
			this.parentNeed = res.data.data.parentNeed;
			this.subjectList = res.data.data.subjectList;
			this.timeList = res.data.data.timeList;
			//处理空闲时间问题
			this.convertTime();
      this.convertNextLine();
		}).catch(err => {
			console.log(err);
		});
	},
	convertTime: function() {
		let temp;
		for (var item of this.timeList) {
			console.log(item.freeTime);
			temp = item.freeTime;
			let res = '星期';
			if (parseInt(temp / 10) == 1) {
				res = res + '一 : ';
			} else if (parseInt(temp / 10) == 2) {
				res = res + '二 : ';
			} else if (parseInt(temp / 10) == 3) {
				res = res + '三 : ';
			} else if (parseInt(temp / 10) == 4) {
				res = res + '四 : ';
			} else if (parseInt(temp / 10) == 5) {
				res = res + '五 : ';
			} else if (parseInt(temp / 10) == 6) {
				res = res + '六 : ';
			} else if (parseInt(temp / 10) == 7) {
				res = res + '日 : ';
			}
			if (temp % 10 == 1) {
				res = res + '上午';
			} else if (temp % 10 == 2) {
				res = res + '下午';
			} else if (temp % 10 == 3) {
				res = res + '晚上';
			}
			this.timeShowList.push(res);
		}
	},
  convertNextLine:function(){
    this.parentNeed.expectGoal=this.parentNeed.expectGoal.replace(/\n/g, '<br />');
    this.parentNeed.expectFeedback=this.parentNeed.expectFeedback.replace(/\n/g, '<br />');
    this.parentNeed.teachReq=this.parentNeed.teachReq.replace(/\n/g, '<br />');
    this.parentNeed.learnCondiction=this.parentNeed.learnCondiction.replace(/\n/g, '<br />');
    this.parentNeed.gradeCondiction=this.parentNeed.gradeCondiction.replace(/\n/g, '<br />');
  },
  }
}
</script>

<style lang="less" scoped>
@import '/src/assets/css/core.less';

.el-carousel__item h3 {
	color: #475669;
	font-size: 18px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}
.carousel-inner {
	margin: 0px 60px;
}
.my-tag {
	font-size: 16px;
	margin-right: 12px !important;
}
.inner-content {
	margin: 15px;
	font-size: 18px;
	line-height: 24px;
	letter-spacing: 1px;
}
.comment-head {
	font-weight: bold;
	font-size: 20px;
	margin: 15px;
	color: #888;
}
.comment-top {
	margin-top: 15px;
}
.comment-add {
	position: relative;
	margin-left: 100px;
}
.el-textarea {
	width: 700px;
	margin-right: 10px;
}
.el-form {
	display: inline-block;
}
.comment-content {
	position: relative;
	margin-left: 100px;
	width: 700px;
	border: 2px solid #aaa;
	padding: 20px 30px 45px 30px;
	font-size: 18px;
	margin-bottom: 18px;
	border-radius: 10px;
}
.left-content {
	position: absolute;
	left: 30px;
	color: #888;
	bottom: 9px;
	font-size: 16px;
}

.right-content {
	position: absolute;
	right: 30px;
	color: #888;
	bottom: 9px;
	font-size: 16px;
}
.comment-btn {
	display: flex;
	right: 80%;
}
.cursor {
	cursor: pointer;
}
.ad {
	width: 100%;
	background-color: white;
}
.el-tag {
	height: 22px;
	line-height: 22px;
	padding: 0px 7px;
	margin-right: 5px;
}
.comment-close {
  position: relative;
  display: inline-block;
}
.comment-content:hover{
	.close:before{
	  content: '✕';
	}
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
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
a {
	margin-bottom: 8px;
	font-size: 18px;
}
.left-small {
	padding-left: 15px;
	font-size: 18px;
}
</style>
