<template>
  <div class="flights_filter">
    <div class="filter_main">
      <div class="main_path">
        单程：{{ info.departCity }}-{{ info.destCity }}/{{ info.departDate }}
        <div class="main_selects">
          <div class="select_item">
            <el-select placeholder="起飞机场" />
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </div>
          <div class="select_item">
            <el-select placeholder="起飞时间" />
          </div>
          <div class="select_item">
            <el-select placeholder="航空公司" />
          </div>
          <div class="select_item">
            <el-select placeholder="机型" />
          </div>
        </div>
      </div>
    </div>
    <div class="filters_btns">
      筛选: <el-button type="primary" round size="mini">
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
  mounted () {
    console.log(this.info)
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
