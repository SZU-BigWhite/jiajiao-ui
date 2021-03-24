<template>
	<div class="ad">
		<div class="intro"><h5>评论</h5></div>
		<div class="comment-top">
			<div v-for="(item,key) in comment" class="comment-content comment-close">
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
</template>

<script>
export default {
  name: "needComment",
  data: function () {
    return {
		comment:null,
		inputComment:""
	}
  },
  created() {
  	this.getComment();
  },
  props:['id'],
  methods: {
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
				outId: this.id,
				type: 0,
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
	getComment:function(){
		this.$http.get("/get/comments",{
			params:{
				outId:this.id,
				type:0
			}
		}).then(res=>{
			this.comment=res.data.data
			console.log(res)
		}).catch(err=>{
			console.log(err)
		})
	},
  }
}
</script>

<style lang="less" scoped>
@import '/src/assets/css/core.less';
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
