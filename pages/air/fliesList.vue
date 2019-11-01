<template>
  <div class="flights">
    <div class="flights_main">
      <!--  筛选模块  -->
      <FlightsFilter
        :options="filtersdata.options"
        :info="filtersdata.info"
      />
      <!-- 表单的头部  -->
      <FlightsHead />
      <!-- 机票列表   -->
      <div class="air_list">
        <FlightsItem v-for="(item) in filtersdata.flights" :key="item.id" :data="item" />
      </div>
      <flightsfilter />
    </div>

    <!-- 侧边栏  -->
    <div class="flights_aside" />
  </div>
</template>
<script>
import FlightsHead from '@/components/air/FlightsHead.vue'
import FlightsItem from '@/components/air/FlightsItem.vue'
import FlightsFilter from '@/components/air/FlightsFilter.vue'
export default {
  components: {
    FlightsItem,
    FlightsHead,
    FlightsFilter
  },
  data () {
    return {
      filtersdata: {
        info: {},
        flights: [],
        options: {}
      }

    }
  },
  mounted () {
    // console.log(this.$route.query)
    const form = this.$route.query
    this.$axios.get('/airs', { params: form }).then((res) => {
      // eslint-disable-next-line no-console
      this.filtersdata = res.data
      this.filtersdata.options = res.data.options
      this.filtersdata.flights = res.data.flights
      // console.log(res)
    })
  }
}
</script>

<style lang="less" scoped>
.flights {
  width: 1000px;
  margin: 0 auto;
  display: flex;
}
.flights_main {
  flex: 5;
}
.flights_aside {
  flex: 2;
}
</style>
