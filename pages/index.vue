<template>
  <div class="xyly_index">
    <div class="index_carousel">
      <el-carousel height="700px">
        <el-carousel-item
          v-for="(item,index) in swiperImg"
          :key="index"
        >
          <div :style="`background:url(${$axios.defaults.baseURL+item.url}) center center  ;height:700px;`" />
        </el-carousel-item>
      </el-carousel>

      <!--  tabs栏 开始 -->
      <div class="index_tabs">
        <Tab />
      </div>
    </div>
  </div>
</template>
<script>
import Tab from '@/components/index/Tab.vue'
export default {
  components: {
    Tab
  },
  data () {
    return {
      swiperImg: []
    }
  },
  mounted () {
    this.$axios.get('/scenics/banners').then((res) => {
      this.swiperImg = res.data.data
    })
  }

}
</script>

<style  lang="less" scoped  >
.xyly_index{
  min-width: 1000px;
}
.index_carousel {
  position: relative;
  .index_tabs {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }
}
</style>
