<template>
  <div class="my-card">
    <div class="card-head">{{ parentNeed.name }} {{ parentNeed.studentClass }}</div>
    <div class="card-content">{{ parentNeed.expectFeedback }}</div>
    <div class="card-bottom">
      <el-tag>时薪：{{ parentNeed.salary }}</el-tag>
      <el-tag type="success">学历：{{ parentNeed.education==1?"本科":"研究生" }}</el-tag>
      <el-tag type="info">路程时间：{{ parentNeed.arriveHours }}分钟</el-tag>
      <!--<el-tag type="warning">标签四</el-tag>-->
      <!--<el-tag type="danger">标签五</el-tag>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "parentCard",
  data:function () {
    return {
      parentNeed: {
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
        expectFeedback: "期望反馈期望反馈期望反馈期望反馈期" +
                        "望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反" +
                        "馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期" +
                        "望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反" +
                        "馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈" +
                        "期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期" +
                        "望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈" +
                        "期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期" +
                        "望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期" +
                        "望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈期望反馈",
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
    }

  }
}
</script>

<style scoped>
.my-card {
  margin-right: 30px;
  margin-left: 30px;
  height: 200px;
  width: 400px;
  /*background-color: #fafafa;*/
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
div .my-card:hover{
  background-color: #f6f6f6;
}

.card-head {
  height: 50px;
  margin-left: 20px;
  text-align: left;
  line-height: 50px;
  font-weight: bold;
  font-size: 20px;
}

.card-content {
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 8px;
  color: #8c939d;
  height: 100px;
  line-height: 20px;
  overflow: hidden;
}

.card-bottom {
  padding-left: 20px;
  padding-right: 20px;
}

.el-tag {
  margin-right: 5px;
}
</style>