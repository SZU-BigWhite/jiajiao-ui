<template>
  <div class="volunteer-card" @click="dialogFormVisible = true">
    <div class="card-head">{{ volunteer.name }}</div>
    <div class="card-content">{{ volunteer.content }}</div>
    <div class="card-bottom">
      <el-tag type="success">收到数量： {{ count }}</el-tag>
      <el-tag type="danger">审核状态： {{ status }}</el-tag>
      <el-tag class="mouse" type="warning" effect="dark" @click="changeCollection">修改</el-tag>
      <el-tag class="mouse" effect="dark" @click="getReceiveThings">查看捐赠</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCollectionCard",
  data: function () {
    return {
      status: null
    }
  },
  props: ['volunteer', 'count'],
  methods: {
    getReceiveThings: function () {
      if(this.count==0){
        this.$message.warning("暂时没有收到任何捐赠")
        return;
      }
      var that=this
      this.$router.push({
        path:"/get/receive/things",
        query: {
          id: that.volunteer.id
        }
      })
    },
    changeCollection: function () {
      var that=this
      this.$router.push({
        path: "/update/collection",
        query: {
          id: that.volunteer.id
        }
      })
    }
  },

  created() {
    console.log(this.volunteer)
    if (this.volunteer.status == 0) {
      this.status = "未审核"
    } else if (this.volunteer.status == 1) {
      this.status = "审核通过"
    } else if (this.volunteer.status == 2) {
      this.status = "已过期"
    } else if (this.volunteer.status == 3) {
      this.status = "审核未通过"
    }
  }
}
</script>

<style scoped>
.volunteer-card {
  margin-right: 30px;
  margin-left: 30px;
  height: 200px;
  width: 400px;
  /*background-color: #fafafa;*/
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.s-mini-input {
  width: 220px !important;
}

.s-mid-input {
  width: 400px !important;
}

div .volunteer-card:hover {
  background-color: #f6f6f6;
}

.mouse {
  cursor: pointer;
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

.input-new-tag {
  width: 90px !important;
  /*margin-left: 10px;*/
  vertical-align: bottom;
}
</style>