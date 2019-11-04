<template>
  <div class="traval_page">
    <div class="traval_Search">
      <el-input placeholder="请输入想去的地方，比如：'广州'">
        <i slot="suffix" class="el-input__icon el-icon-search" />
      </el-input>
      <span>推荐：</span>
      <span>广州</span>
      <span>上海</span>
      <span>北京</span>
      <p>推荐攻略</p>
      <div class="wirte">
        <el-form label-width="80px">
          <el-form-item>
            <el-button type="primary" class="el-icon-edit" @click="onsumit">
              写游记
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    onsumit () {
      this.$router.push('/post/create')
    }
  }

}
</script>

<style lang='less' secoped>
.traval_page {
    height: 136px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  .traval_Search {
      .active{
         color:orange;
         text-decoration: underline;
      }
    position: relative;
    p{
        width: 90px;
        color: orange;
        font-size: 20px;
        border-bottom: 2px solid orange;
        padding-bottom: 21px;
    }
    .el-input {
      border: 3px solid orange;
    }
    i {
      font-size: 25px;
      color: orange;
    }
    span {
      font-size: 10px;
      color: rgb(134, 131, 131);
    }
    .wirte{
        color: #ffffff;
      top: 74px;
      right: 0px;
        position: absolute;
  }
  }

}
</style>
