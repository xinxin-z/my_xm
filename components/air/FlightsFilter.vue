<template>
  <div class="flights_filter">
    <div class="filter_main">
      <div class="main_path">
        单程：{{ info.departCity }}-{{ info.destCity }}/{{ info.departDate }}
        <div class="main_selects">
          <div class="select_item">
            <el-select v-model="airport" placeholder="起飞机场" @change="headerchange">
              <el-option
                v-for="item in filtersoptions.airport"
                :key="item.id"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="select_item">
            <el-select v-model="flightTimes" placeholder="起飞时间" @change="headerchange">
              <el-option
                v-for="item in filtersoptions.flightTimes"
                :key="item.id"
                :label="item.label"
                :value="item.value"
                @change="headerchange"
              />
            </el-select>
          </div>
          <div class="select_item">
            <el-select v-model="company" placeholder="航空公司" @change="headerchange">
              <el-option
                v-for="item in filtersoptions.company"
                :key="item.id"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="select_item">
            <el-select v-model="sizes" placeholder="机型" @change="headerchange">
              <el-option
                v-for="item in filtersoptions.sizes"
                :key="item.id"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
      </div>
    </div>
    <div class="filters_btns">
      筛选: <el-button type="primary" round size="mini" @click="headercancle">
        撤销
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: {
    info: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
    },
    options: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
    }
  },
  data () {
    return {
      // 起飞机场
      airport: '',
      // 起飞时间
      flightTimes: '',
      // 航空公司
      company: '',
      // 机型
      sizes: ''
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    filtersoptions () {
    // 飞机起飞机场
      const airport = []
      this.options.airport.forEach((v) => {
        // eslint-disable-next-line no-undef
        v && airport.push({ value: v, label: v })
      })

      // 起飞时间
      // eslint-disable-next-line no-unreachable
      const flightTimes = this.options.flightTimes.map(v => ({
        value: v.from + '|' + v.to, label: `${v.from}:00 - ${v.to}:00`
      })
      )
      // 航空公司
      const company = this.options.company.map((v) => {
        return { value: v, label: v }
      })
      // 机型
      // eslint-disable-next-line no-unused-vars
      const sizes = [
        { value: 'L', label: '大' },
        { value: 'M', label: '中' },
        { value: 'S', label: '小' }
      ]

      return { airport, flightTimes, company, sizes }
    }

  },
  methods: {
    // 下拉选框事件
    headerchange () {
    // 发送父组件事件
      // eslint-disable-next-line no-use-before-define
      const flightsobj = {
        airport: this.airport,
        flightTimes: this.flightTimes,
        company: this.company,
        sizes: this.sizes
      }
      console.log(flightsobj)
      this.$emit('headerchange', flightsobj)
    },
    headercancle () {
      console.log(this.airport, this.flightTimes, this.company, this.sizes)
    }
  }

}

</script>

<style lang="less" scoped>
.flights_filter {
  .filter_main {
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .main_path {
      height: 5;
      font-size: 13px;
    }
    .main_selects {
      display: flex;

      .select_item {
        width: 120px;
        margin-left: 5px;
      }
    }
  }
  .filters_btns {
    padding: 10px 0;
  }
}
</style>
