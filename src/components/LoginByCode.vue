<template>
  <div class="login_container">
    <div class="login_box">
      <!--标题-->
      <div class="login_head">
        <div>深大家教</div>
        <div>login</div>
      </div>
      <!--登录表单-->
      <el-form ref="loginFormRef"
               :model="loginForm"
               class="login_form"
               :rules="loginRules">
        <!--手机号表单-->
        <el-form-item prop="phone">
          <el-input prefix-icon="el-icon-mobile-phone" placeholder="手机号" v-model="loginForm.phone"></el-input>
        </el-form-item>
        <!--验证码-->
        <el-form-item :inline="true" prop="code">
          <el-input prefix-icon="el-icon-sunset" class="form_left" placeholder="验证码"
                    v-model="loginForm.code"></el-input>
          <el-button class="form_right"
                     @click="validBtnClick"
                     :type="isAble"><span ref="validBtn">获取验证码</span></el-button>
        </el-form-item>

        <!--免登录-->
        <el-form-item>
          <el-checkbox-group v-model="loginForm.save7" class="check_login">
            <el-checkbox label="七天内免登录" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!--登录按钮-->
        <el-form-item class="login_btn">
          <el-button @click="login" type="primary"><i class="iconfont icon-log-in"> 登录</i></el-button>
        </el-form-item>
        <el-form-item class="login_other">
          <a href="javascript:void(0)" @click="loginByPwd">密码登录</a>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {checkPhone} from '../public/check.js'

export default {
  data() {
    return {
      // 手机号重置密码表单
      loginForm: {
        phone: '',
        code: '',
        save7: false
      },
      //验证码计时
      isAble: "primary",   //可用获取验证码
      timer: null,    //计时器
      time: 60,         //计时时间
      //检验规则
      loginRules: {
        //验证码
        code: [
          {required: true, message: '验证码不能为空', trigger: 'blur'},//必填
        ],
        //手机号
        phone: [
          {required: true, message: '手机号不能为空', trigger: 'blur'},//必填
          {validator: checkPhone, trigger: 'blur'}  //检验手机号
        ],
      }
    };
  },
  methods: {
    //返回登录
    loginByPwd: function () {
      this.$router.push("/login")
    },
    //登录
    login: function () {
      this.$http.post("/register", this.loginForm).then(res => {
        console.log(res);
        if (res.data.status == 200) {
          this.$message.success("登录成功")
          this.$router.push("/index")
        } else {
          this.$message.error("验证码错误");
        }
      })

    },
    //获取验证码
    validBtnClick: function () {
      if (this.isAble == "")
        return;
      //点击后转为倒计时
      this.$refs.validBtn.innerHTML = this.time + " s"

      if (this.timer == null) {
        console.log("发送验证码成功")
        this.$http.get("/get/phone/code", {
          params: {
            phone: this.loginForm.phone
          }
        }).then(res => {
          this.$message.success(res.data.msg)
        })
      }
      //按钮设置不可点击
      this.isAble = "";
      //计时开始
      this.setTimer()

    },
    //验证码定时器
    setTimer: function () {
      var timeTemp = this.time;
      this.timer = setInterval(() => {
        //更新按钮计时
        timeTemp--;
        this.$refs.validBtn.innerHTML = timeTemp + " s"

        //计时结束重置按钮
        if (timeTemp == 0) {
          clearInterval(this.timer)
          this.timer = null
          this.isAble = "primary"
          this.$refs.validBtn.innerHTML = "获取验证码"

        }
      }, 1000)
    }

  }
}
</script>

<style lang="less" scoped>

//登录容器
.login_container {
  height: 100%;
  background-color: #e8eaf2;
  background-image: url(../assets/img/bg1.jpg);
  background-repeat: no-repeat; 
  background-size:100% 100%;
}

//登录box
.login_box {
  width: 375px;
  padding: 1.25rem 1.25rem 1px;
  background: white;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 5px 5px 5px #888;
}

//登录标题
.login_head {
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
}

.login_head > div:nth-of-type(1) {
  font-size: 1.875rem;
  color: #343a40;
  letter-spacing: .0625rem;
}

.login_head > div:nth-of-type(2) {
  font-size: .875rem;
  color: #6c757d;
  letter-spacing: .0625rem;
  margin-bottom: .5rem;
}

//免登录
.check_login {
  line-height: normal;
}

//登录按钮
.login_btn {
  text-align: center;
  width: 100%;

  button {
    width: 100%;
  }

  margin-bottom: 5px;
}

//验证码样式
.form_left {
  width: 63%;
}

.form_right {
  width: 37%;
}

//返回登录
.login_other {
  text-align: center;
  line-height: normal;
  font-weight: 700;
  font-size: .875rem;
  color: #6c757d;
  margin-bottom: .5rem;
  letter-spacing: .1625rem;

  a:link {
    font-size: .875rem;
    color: #6c757d;
    margin-bottom: .5rem;
    letter-spacing: .1625rem;
    text-decoration: none;
  }

  a:visited {
    font-size: .875rem;
    color: #6c757d;
    margin-bottom: .5rem;
    letter-spacing: .1625rem;
  }
}
</style>
