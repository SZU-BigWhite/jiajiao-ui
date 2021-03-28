<template>
  <div>
    <p class="last-modify">最后更新时间：{{ parentNeed.updateTime }}</p>
    <div id="wrapper">
      <div class="basic">
        <section>
          <h1 class="left">
            {{ parentNeed.name }}
            <small>{{ parentNeed.studentClass }}</small>
          </h1>
          <h2 class="right">
            {{ parentNeed.location }}
            <i class="el-icon-location-information"></i>
          </h2>
        </section>
        <div class="relative">
          <div class="left">
            <div class="age">
              性格 / {{ parentNeed.characterCondiction }}
            </div>
            <div class="overall">学历要求 / {{ parentNeed.education == 1 ? "本科" : "硕士以上" }}</div>
            <div class="college">最高时薪 / {{ parentNeed.salary }}</div>
          </div>
          <div class="right">
            <a href="">
              <span>到达时间 {{ parentNeed.arriveHours }} 分钟</span>
              <i class="el-icon-alarm-clock"></i>
            </a>
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
      <div>
        <div class="comment-head">发表评论</div>
        <div class="comment-add">
          <el-form>
            <el-form-item class="must" prop="showSelf">
              <el-input
                  type="textarea"
                  :autosize="{ minRows: 4, maxRows: 100}"
                  placeholder="整个家教下来后，希望达到怎样的一个目标/效果"
                  v-model="comment">
              </el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" round>发表评论</el-button>
        </div>
      </div>
      <div>
        <div class="comment-head">评论列表</div>
        <div v-for="item in 6" class="comment-content">
          <div>
            asdasdadasdadasdasdadasdad
            asdasdadasdad
            asdasdadasdadasdasdadasdadasdasdadasdad
            asdasdadasdad
            asdasdadasdad
            asdasdadasdad
            asdasdadasdad
            asdasdadasdad
            asdasdadasdad
          </div>
          <div class="left-content">2021-03-12</div>
          <div class="right-content">{{ item }}楼 </div>
          <!--</div>-->
        </div>
      </div>
    </div>

    <div class="ad">
      <div class="intro"><h5>为你推荐</h5></div>
      <el-carousel :interval="4000" type="card" height="215px">
        <el-carousel-item v-for="item in 6" :key="item">
          <parent-card></parent-card>
        </el-carousel-item>
      </el-carousel>
      <a class="pdf" @click="send">
        <i class="el-icon-s-promotion"></i> 投递
      </a>
    </div>
  </div>
</template>

<script>
import ParentCard from "@/components/parentCard";

export default {
  name: "need",
  components: {ParentCard},
  data: function () {
    return {
      parentNeed: {
        id: 1,
        uId: 1,
        name: "bigwhite",
        wechat: "wanmf9902",
        studentClass: 1,
        gradeCondiction: "语文比较差",
        characterCondiction: "12 123",
        duration: 3.0,
        times: 1,
        salary: 80.0,
        expectGoal: "天使的翅膀",
        location: "深大北门",
        arriveHours: 4.0,
        education: 1,
        teachReq: "教学要求",
        learnCondiction: "孩子学习状态",
        expectFeedback: "期望反馈",
        teachBySelf: "个人教育",
        updateTime: "2021-03-11",
      },
      subjectList: [
        {
          name: "英语"
        },
        {
          name: "语文"
        },
        {
          name: "历史"
        }
      ],
      timeList: [
        {
          freeTime: 12
        },
        {
          freeTime: 22
        }
      ],
      comment: "",
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

.comment-head {
  font-weight: bold;
  font-size: 20px;
  margin: 15px;
  color: #888;
}

.comment-add {
  position: relative;
  margin-left: 100px;
}

.comment-content {
  position: relative;
  margin-left: 100px;
  width: 700px;
  background-color: #f9f9f9;
  padding: 15px 30px 33px 30px;
  font-size: 18px;
  margin-bottom: 18px;
  border-radius: 10px;
}

.el-form {
  display: inline-block;
}

.comment-btn {
  display: flex;
  right: 80%;
}

.el-textarea {
  width: 700px;
  margin-right: 10px;
}

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