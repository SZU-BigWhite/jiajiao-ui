<template>
  <div>
    <p class="last-modify">最后更新时间：{{ studentResume.updateTime }}</p>
    <div id="wrapper">
      <div class="basic">
        <section>
          <h1 class="left">
            {{ studentResume.name }}
            <small>bigwhite</small>
          </h1>
          <h2 class="right">
            深圳大学
            <small>/ 计算机与软件学院</small>
          </h2>
        </section>
        <div class="relative">
          <div class="left">
            <div class="age">
              {{ studentResume.sex == 0 ? '女' : '男' }} / 大二
            </div>
            <div class="overall">本科 / 软件工程</div>
            <div class="college"></div>
          </div>
          <div class="right">
            <!--<a :href="`https://www.${renderData.basic.git}`">-->
            <!--  <span>{{ renderData.basic.git }}</span>-->
            <!--  <i class="fa fa-git-square"></i>-->
            <!--</a>-->
            <!--<a :href="`https://www.${renderData.basic.homepage}`">-->
            <!--  <span>{{ renderData.basic.homepage }}</span>-->
            <!--  <i class="fa fa-h-square"></i>-->
            <!--</a>-->
            <!--<a :href="`Mailto:${renderData.basic.email}`">-->
            <!--  <span>{{ renderData.basic.email }}</span>-->
            <!--  <i class="fa fa-envelope-square"></i>-->
            <!--</a>-->
          </div>
        </div>
      </div>
      <div class="skill">
        <h5>个人简介</h5>
        <ul>
          <li>123123</li>
          <li>123123</li>
          <li>123123</li>
          <li>123123</li>
          <li>123123</li>
          <li>123123</li>
          <li>123123</li>
          <li>123123</li>
        </ul>
      </div>
      <div class="exp">
        <h5>教学安排</h5>
        <ul>
          <li>
            <div class="title">
              <span class="name">教学安排1</span>
              <a target="_blank" class="link">link</a>
            </div>
            <div class="des">
              <span>教学安排内容1</span>
              <span></span>
            </div>
            <div class="stack">
              <b>教学安排时间：</b>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
            </div>
          </li>
          <li>
            <div class="title">
              <span class="name">教学安排1</span>
              <a target="_blank" class="link">link</a>
            </div>
            <div class="des">
              <span>教学安排内容1</span>
              <span></span>
            </div>
            <div class="stack">
              <b>教学安排时间：</b>
              <el-tag>标签一</el-tag>
              <el-tag>标签一</el-tag>
            </div>
          </li>
        </ul>
      </div>
      <div class="project">
        <h5>性格名言</h5>
        <ul>
          <li>
            <a target="_blank" class="name">性格</a>
            <span>：</span>
            <span>乐观开朗</span>
          </li>
          <li>
            <a target="_blank" class="name">座右铭</a>
            <span>：</span>
            <span>好好学习，天天向上</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="ad">
      <div class="intro"><h5>为你推荐</h5></div>
      <el-carousel :interval="4000" type="card" height="215px">
        <el-carousel-item v-for="item in 6" :key="item">
          <resume-card></resume-card>
        </el-carousel-item>
      </el-carousel>
      <a class="pdf"  @click="send">
        <i class="el-icon-s-promotion"></i> 投递
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "resume",
  data: function () {
    return {
      studentResume: {
        id: 1,
        uId: 1,
        name: "万茂峰",
        sex: 1,
        wechat: "wechat123",
        academyId: 3,
        salary: 88.88,
        ableClass: 4,
        characterCondiction: "乐观开朗",
        grade: "高考数学满分",
        prepareStress: "学习方法",
        teachStress: "学习技巧",
        teachGoal: "提高20分",
        feedback: "每周反馈不足之处",
        createTime: "2021-01-27",
        updateTime: "2021-01-27",
        status: 1
      },
      subjectList: [
        {
          id: 1,
          outId: 1,
          type: 1,
          name: "数学"
        },
        {
          id: 3,
          outId: 1,
          type: 1,
          name: "语文"
        },
        {
          id: 3,
          outId: 1,
          type: 1,
          name: "政治"
        }
      ],
      timeList: [
        {
          id: 1,
          outId: 1,
          type: 1,
          weekday: 7,
          beginTime: "07:49",
          endTime: "07:49"
        },
        {
          id: 1,
          outId: 1,
          type: 1,
          weekday: 7,
          beginTime: "04:30",
          endTime: "10:30"
        },
      ],
      "receiveCounts": 3
    }
  },
  methods:{
    send:function () {
      this.$confirm('你确定需求到投递到该简历中？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'success'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '投递成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'success',
          message: '取消投递'
        });
      });

    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/core.less";

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.carousel-inner{
  margin: 0px 60px;
}
.ad{
  width: 100%;
  background-color: white;
}
.el-tag {
  height: 22px;
  line-height: 22px;
  padding: 0px 7px;
  margin-right: 5px;
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
.ad{
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
.el-carousel{
  margin-top:15px;
}
.intro{
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