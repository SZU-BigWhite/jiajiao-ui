<template>
  <div class="my-card">
    <div class="card-head">{{resume.studentResume.name}} 计算机学院 大二</div>
    <div class="card-content">{{resume.studentResume.prepareStress}}</div>
    <div class="card-bottom">
      <el-tag>时薪：{{resume.studentResume.salary}}</el-tag>
      <el-tag type="success">{{resume.studentResume.characterCondiction}}</el-tag>
      <!--<el-tag type="info">标签三</el-tag>-->
      <!--<el-tag type="warning">标签四</el-tag>-->
      <el-tag type="danger">标签五</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      studentResume: {
        id: 1,
        uId: 1,
        name: "bigwhite",
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
          id: 16,
          outId: 1,
          type: 1,
          name: "政治"
        }
      ],
      "timeList": [
        {
          id: 1,
          outId: 1,
          type: 1,
          weekday: 7,
          beginTime: "07:49",
          endTime: "07:49"
        },
        {
          id: 3,
          outId: 1,
          type: 1,
          weekday: 7,
          beginTime: "04:30",
          endTime: "10:30"
        },
      ],
      receiveCounts: 3
    }
  },
  name: "card",
  methods:{

  },
  props:['resume']

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