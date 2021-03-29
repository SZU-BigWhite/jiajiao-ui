<template>
  <div class="login_container">
    <!--登录块-->
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
        <!--手机号-->
        <el-form-item prop="phone">
          <el-input v-model="loginForm.phone"
                    prefix-icon="el-icon-mobile-phone"
                    placeholder="手机号"></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password"
                    prefix-icon="iconfont icon-mima"
                    placeholder="密码"
                    type="password"></el-input>
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
          <a href="javascript:void(0)" @click="loginByCode">验证码登录</a>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {checkPhone} from '../public/check.js'

export default {
  name: 'Login',
  data: function () {
    return {
      // 登录数据
      loginForm: {
        phone: "18312872509",
        password: "123456",
        save7: false
      },
      //登录数据校验
      loginRules: {
        phone: [
          {required: true, message: '手机号不能为空', trigger: 'blur'},//必填
          {validator: checkPhone, trigger: 'blur'}  //检验手机号
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},//必填
          {min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur'}//长度检验
        ],
      }
    }
  },
  methods: {
    //验证码登录
    loginByCode: function () {
      this.$router.push("/loginByCode")
    },
    //登录请求
    login: function () {
      //检验字符
      this.$refs.loginFormRef.validate(async valid => {
        //检验失败，做出提示
        if (!valid) {
          this.$message.error("账号/密码格式不对")
          return;
        }

        //post请求登录
        this.$http.post("login", this.loginForm)
            .then(res => {
              if(res.data.status==200){
                this.$message.success(res.data.msg)
                this.$router.push("/index")
              }
              else {
                this.$message.error(res.data.msg)
              }
            })
      })

    }
  }
}
</script>

<style lang="less" scoped>
//登录容器
.login_container {
  height: 100%;
  background-color: #e8eaf2;
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

//验证码登录
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
