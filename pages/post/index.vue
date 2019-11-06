<template>
  <!-- 旅游攻略 -->
  <div class="post">
    <el-row :gutter="20">
      <!-- 城市导航 -->
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <cityNavigation />
        </div>
      </el-col>

      <!-- 文章详情 -->
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <div class="deatil">
            <Strategy />
            <div class="suggest">
              推荐攻略
            </div>
            <div class="wirte">
              <posts />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import cityNavigation from '../../components/post/cityNavigation'
// 首页搜索框
import Strategy from '../../components/post/Strategy'
// 写游记
import posts from '../../components/post/posts'
export default {
  components: { cityNavigation, Strategy, posts }
}
</script>

<style lang='less' secoped>
.post {
  width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
}
.deatil {
    position: relative;
.suggest{
     width: 90px;
    color: orange;
    font-size: 20px;
    border-bottom: 2px solid orange;
    padding-bottom: 21px;
  top: 88px;
    left : 0px;
    position: absolute;
}
  .wirte {
    color: #ffffff;
    top: 40px;
    right: 0px;
    position: absolute;
    .el-button {
      span {
        color: #ffffff;
      }
    }
  }
}
</style>
