<template>
  <div style="background-color: red;">
	<el-container class="home_container">
	  <!--头部-->
	  <el-header class="home_header">
	    <div class="head_mid">
	      高校家教及校内互助系统
	    </div>
	    <div class="head_right">
	      <!--用户头像相关-->
	      <el-dropdown trigger="click">
	        <!--图标-->
	        <i class="el-icon-user"></i>
	        <!--下拉框-->
	        <el-dropdown-menu slot="dropdown" class="dropdown_menu">
	          <el-dropdown-item>个人中心</el-dropdown-item>
	          <el-dropdown-item @click.native="logout"><a>安全退出</a></el-dropdown-item>
	        </el-dropdown-menu>
	      </el-dropdown>
	    </div>
	  </el-header>
	
	  <!--导航栏+内容-->
	  <el-container>
	    <!--导航栏-->
	    <el-aside width="200px" class="home_left" v-show="isShow">
	      <el-menu class="el-menu-vertical-demo" router>
	        <el-menu-item index="/index">
	          <i class="el-icon-house"></i>
	          <span slot="title">主页</span>
	        </el-menu-item>
			  <el-menu-item index="/teach/resume">
			    <i class="el-icon-tickets"></i>
			    <span slot="title">学生简历库</span>
			  </el-menu-item>
			  <el-menu-item index="/teach/need/show">
			    <i class="el-icon-bell"></i>
			    <span slot="title">家长需求库</span>
			  </el-menu-item>
	        <el-menu-item index="/student/volunteer/collections">
	          <i class="el-icon-first-aid-kit"></i>
	          <span slot="title">义工回收</span>
	        </el-menu-item>
	        <el-menu-item index="/student/help/list">
	          <i class="el-icon-school"></i>
	          <span slot="title">校内互助</span>
	        </el-menu-item>
	        <!-- <el-submenu index="1">
	          <template slot="title">
	            <i class="el-icon-location"></i>
	            <span>家教</span>
	          </template>
	          <el-menu-item index="/add/student/resume">成为老师</el-menu-item>
	          <el-menu-item index="/add/parent/need">成为家长</el-menu-item>
	        </el-submenu> -->
	
	      </el-menu>
	    </el-aside>
	
	    <!-- 内容 -->
	    <el-container class="home_content">
	      <!-- 主内容 -->
	      <el-main>
	        <router-view></router-view>
	      </el-main>
	
	    </el-container>
	  </el-container>
	</el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    //登出
    logout: function () {
      this.$http.get("/logout").then(res => {
        if (res.data.status == 200) {
          this.$message.success("退出成功")
          this.$router.push("/login");
        } else {
          this.$message.error("你还未登录")
        }
      }).catch(err => {
        this.$message.error("你还未登录")
      })
    },
  }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables";

.home_container {
  height: 100%;
  background-color: #F8F8F8;
  
}

.home_content {
  background-color: #F8F8F8;
}


//-----头部样式
.home_header {
  background-color: @color;
  position: relative;
  color: white !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  margin-bottom: 20px;
}

//头左
.head_left {
  float: left;
  display: block;
  line-height: 60px;
}

//头中
.head_mid {
  position: absolute;
  left: 50%;
  height: 100%;
  line-height: 60px;
  color: white;
  font-size: 28px;
  font-weight: bold;
  transform: translate(-50%, 0%);
}

//头右
.head_right {
  float: right;
  display: block;
  line-height: 60px;
}

.el-popper {
  margin-top: 0px !important;
}

//红点
.red-point {
  position: relative;
}

.red-point::before {
  content: " ";
  border: 3px solid #ff0000; /*设置红色*/
  border-radius: 50%; /*设置圆角*/
  position: absolute;
  z-index: 1000;
  right: 0%;
  margin-right: -5px;
  margin-top: -5px;
}

//------左部
.home_left {
  background-color: white;
}

//底部
.home_footer {
  background-color: #F7F7F7;
}

.el-main {
  padding-top: 0px !important;
}

.el-dropdown {
  position: relative;
  font-size: 30px;
  color: white;
  font-weight: bold;
  line-height: 60px;
  right: 150%;
  cursor: pointer;
}
.back {
  cursor: pointer;
  display: inline-block;
  position: fixed;
  z-index: 10;
  bottom: 6px;
  right: 5%;
  padding: 0 8px;
  border-radius: 3px;
  font-size: 12px;
  line-height: 26px;
  color: #fff;
  background-color: @color;
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
  bottom: 20px;
}


</style>
