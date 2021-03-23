<template>
	<div>
		<p class="last-modify">最后更新时间：{{ studentResume.updateTime }}</p>
		<div id="wrapper">
			<div class="basic">
				<section>
					<h1 class="left">
						{{ studentResume.name }}
						<small>{{ education }}</small>
					</h1>
					<h2 class="right">
						{{ studentResume.university }}
						<small>/ {{ studentResume.academyId }}</small>
					</h2>
				</section>
				<div class="relative">
					<div class="left">
						<div class="left-small">座右铭： {{ studentResume.motto }}</div>
						<div class="left-small">高考总分：{{ studentResume.grade }}</div>
						<div class="left-small">时薪：{{ studentResume.salary }} 元</div>
					</div>
					<div class="right">
						<a>
							<span>{{ studentResume.hobby }}</span>
							<i class="el-icon-basketball"></i>
						</a>
						<a>
							<span>{{ studentResume.characterCondiction }}</span>
							<i class="el-icon-sunny"></i>
						</a>
					</div>
				</div>
			</div>
			<div class="skill">
				<h5>个人简介</h5>
				<div class="inner-content">{{ studentResume.showSelf }}</div>
			</div>
			<div class="project">
				<h5>学习方法</h5>
				<div class="inner-content">{{ studentResume.learnMethods }}</div>
				<div class="inner-content stack">
					<b>可辅导科目：</b>
					<el-tag class="my-tag" effect="dark" type="danger" v-for="item in subjectList">{{ item.name }}</el-tag>
				</div>
			</div>
			<div class="project">
				<h5>教学重点</h5>
				<div class="inner-content">{{ studentResume.teachStress }}</div>
			</div>
			<div class="project">
				<h5>教学目标</h5>
				<div class="inner-content">{{ studentResume.teachGoal }}</div>
				<div class="inner-content stack">
					<b>空闲时间：</b>
					<el-tag class="my-tag" effect="dark" v-for="item in timeShowList">{{ item }}</el-tag>
				</div>
			</div>
			<div class="project">
				<h5>家教反馈</h5>
				<div class="inner-content">{{ studentResume.feedback }}</div>
			</div>
		</div>

		<div class="ad">
			<div class="intro"><h5>为你推荐</h5></div>
			<el-carousel :interval="4000" type="card" height="215px">
				<el-carousel-item v-for="(item, key) in recommend" :key="key"><resume-card :resume="item"></resume-card></el-carousel-item>
			</el-carousel>
		</div>

		<div class="ad">
			<div class="intro"><h5>评论</h5></div>
			<div class="comment-top">
				<div v-for="(item,key) in comment" class="comment-content comment-close">
					<!--//todo 未解决-->
					<div>{{item.content}}</div>
					<div class="left-content">{{item.createTime}}</div>
					<div class="right-content">{{ key+1 }}楼</div>
					<span class="close" @click="deleteComment(item.id)"></span>
				</div>
			</div>

			<div class="comment-add">
				<el-form>
					<el-form-item >
						<el-input type="textarea" :autosize="{ minRows: 4, maxRows: 100 }" placeholder="你对这份简历的评价" v-model="inputComment"></el-input>
					</el-form-item>
				</el-form>
				<el-button type="primary" round @click="sendComment">发表评价</el-button>
			</div>
		</div>

		<a class="pdf cursor" @click="send">
			<i class="el-icon-s-promotion"></i>
			投递
		</a>
	</div>
</template>

<script>
export default {
	name: 'resume',
	data: function() {
		return {
			studentResume: {},
			subjectList: [],
			timeList: [],
			timeShowList: [],
			receiveCounts: 0,
			education: '',
			recommend:[],
			inputComment:"",
			comment:[],
		};
	},
	created() {
		//获取简历信息
		this.getResumeDetail();		
		//获取简历相似推荐
		this.getRecommendResume();
		//获取简历评价
		this.getComment();
	},
	methods: {
		getResumeDetail:function(){
			this.$http.get('/get/student/resume/by/id', {
				params: {
					id: this.$route.query.id
				}
			}).then(res => {
				console.log(res);
				this.studentResume = res.data.data.studentResume;
				this.subjectList = res.data.data.subjectList;
				this.timeList = res.data.data.timeList;
				//处理学历问题
				this.convertSubject();
				//处理空闲时间问题
				this.convertTime();
			}).catch(err => {
				console.log(err);
			});
		},
		getComment:function(){
			this.$http.get("/get/comments",{
				params:{
					outId:this.$route.query.id,
				}
			}).then(res=>{
				this.comment=res.data.data
				console.log(res)
			}).catch(err=>{
				console.log(err)
			})
		},
		getRecommendResume:function(){
			this.$http.get("/recommend/resume/by/resume",{
				params:{
					sRId:this.$route.query.id,
				}
			}).then(res=>{
				this.recommend=res.data.data;
				console.log(this.recommend)
			}).catch(err=>{
				console.log(err)
			})
		},
		send: function() {
			this.$confirm('你确定需求到投递到该简历中？', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'success'
			})
			.then(() => {
				this.$message.success("成功投递");
				//todo 调用投递接口
			})
			.catch(() => {
				this.$message.error("取消投递");
			});
		},
		deleteComment: function(id){
			this.$http.delete("/delete/comment",{
				params:{
					id:id
				}
			}).then(res=>{
				if(res.data.status==400){
					this.$message.error(res.data.msg)
				}else if(res.data.status==200){
					this.$message.success(res.data.msg)
				}
				this.getComment()
			})
		},
		sendComment: function() {
			this.$http.post("/add/comment",{
				comment:{
					outId: this.$route.query.id,
					type: 1,
					content: this.inputComment
				}
			}).then(res=>{
				this.$message.success("评价成功")
				this.getComment();
				this.inputComment=""
				console.log(res);
			}).catch(err=>{
				console.log(err);
			})
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
		convertSubject: function() {
			if (this.studentResume.education == 1) {
				this.education = '本科';
			} else if (this.studentResume.education == 2) {
				this.education = '研究生';
			} else if (this.studentResume.education == 3) {
				this.education = '博士生';
			}
		}
	}
};
</script>

<style lang="less" scoped>
@import '../../../assets/css/core.less';

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
	margin-bottom: 6px;
	font-size: 18px;
}
.left-small {
	padding-left: 15px;
	font-size: 18px;
}
</style>
