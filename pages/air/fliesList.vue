<template>
  <div class="flights">
    <div class="flights_main">
      <!--  筛选模块  -->
      <FlightsFilter
        v-if="filtersdata.flights.length"
        :options="filtersdata.options"
        :info="filtersdata.info"
        @headerchange="headerchange"
      />
      <!-- 表单的头部  -->
      <FlightsHead />
      <!-- 机票列表   -->
      <div class="air_list">
        <FlightsItem v-for="(item) in currentpages" :key="item.id" :data="item" />
      </div>
      <div>
        <!-- 分页 -->
        <div class="block">
          <span class="demonstration" />
          <el-pagination
            :current-page="page.currentpage"
            :page-sizes="page.pagesizes"
            :page-size="page.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="page.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>

    <!-- 侧边栏  -->
    <div class="flights_aside">
      <div class="history">
        <div class="history_title">
          历史查询
        </div>
        <div class="history_content">
          <div
            v-for="(item,index) in historyList"
            :key="index"
            class="history_row"
          >
            <div class="his_left">
              <p>{{ item.departCity }}-{{ item.destCity }} </p>
              <p>{{ item.departDate }}</p>
            </div>
            <div class="his_right">
              <el-button
                size="mini"
                type="warning"
              >
                选择
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
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

      },
      // 筛选后的数据源
      flightsList: [],
      // 分页后的数组
      currentpages: [],
      // 历史记录
      historyList: [],
      page: {
        currentpage: 1,
        // 页容量数组
        pagesizes: [10, 20, 30, 40, 100],
        // 页容量
        pagesize: 5,
        // 总条数
        total: 50
      }

    }
  },
  mounted () {
    console.log(this.$route.query)
    this.historyList = JSON.parse(localStorage.getItem('city'))
    this.init(true)
  },
  methods: {
    // 第一次刷新，获取所有数据
    init (isFirst) {
      if (isFirst) {
        const form = this.$route.query
        this.$axios.get('/airs', { params: form }).then((res) => {
          // eslint-disable-next-line no-console
          // 所有数据源
          this.filtersdata = res.data
          console.log(res.data)
          // 获取所有数据
          this.filtersdata.flights = res.data.flights
          this.filtersdata.options = res.data.options
          this.filtersdata.info = res.data.info
          // 过滤后的数据源
          this.flightsList = this.filtersdata.flights
          console.log(this.flightsList)
          // 定义总条数
          this.page.total = this.flightsList.length

          this.currentpages = this.flightsList.slice(
            (this.page.currentpage - 1) * this.page.pagesize, this.page.currentpage * this.page.pagesize
          )

        // this.filtersdata.info = res.data.info
        // console.log(this.currentpages)
        })
      } else {
        this.page.total = this.flightsList.length

        this.currentpages = this.flightsList.slice(
          (this.page.currentpage - 1) * this.page.pagesize, this.page.currentpage * this.page.pagesize
        )
      }
    },
    handleSizeChange (value) {
      this.page.pagesize = value
      this.init()
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (value) {
      this.page.currentpage = value
      this.init()

      // console.log(`当前页: ${val}`)
    },
    headerchange (flightsobj) {
      console.log(flightsobj)
      // 航空公司
      const flightsList = this.filtersdata.flights.filter((v) => {
        const obj1 = flightsobj.company === '' || v.airline_name === flightsobj.company
        // 筛选起飞机场
        const obj2 = flightsobj.airport === '' || v.org_airport_name === flightsobj.airport
        // 筛选机型
        const obj3 = flightsobj.sizes === '' || v.plane_size === flightsobj.sizes
        // 筛选起飞时间
        const obj4 = flightsobj.flightTimes === '' || v.airline_name === flightsobj.flightTimes
        // 起飞时间的处理dep_time
        return obj1 && obj2 && obj3 && obj4
        // eslint-disable-next-line no-unreachable
      })

      this.flightsList = flightsList
      this.init()
    }
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
.history {
  border: 1px solid #ccc;
  padding: 20px;
  .history_title {
    font-size: 26px;
    padding: 20px 0;
  }

  .history_content {
    .history_row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
      .his_left {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        p:nth-child(1) {
          font-size: 18px;
        }
        p:nth-child(2) {
          color: #666;
          font-size: 13px;
        }

      }

      .his_right {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
