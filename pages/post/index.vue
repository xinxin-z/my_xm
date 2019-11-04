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
          <Strategy />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import cityNavigation from '../../components/post/cityNavigation'
import Strategy from '../../components/post/Strategy'

export default {
  components: { cityNavigation, Strategy }
}
</script>

<style lang='less' secoped>
.post {
  width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
}
</style>
