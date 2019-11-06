<template>
  <div class="traval_page">
    <!-- 搜索框 -->
    <div class="traval_Search">
      <el-input v-model="city" placeholder="请输入想去的地方，比如：'广州'">
        <i slot="suffix" class="el-input__icon el-icon-search" @click="headerseach" />
      </el-input>
      <span>推荐：</span>
      <span @click="city=&quot;广州&quot;">广州</span>
      <span @click="city=&quot;上海&quot;">上海</span>
      <span @click="city=&quot;北京&quot;">北京</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      city: '',
      cityList: []
    }
  },
  methods: {
    headerseach () {
      this.$axios.get('/posts').then((res) => {
        const cityArr = res.data.data
        cityArr.forEach((v) => {
          if (this.city === v.cityName.replace('市', '')) {
            this.cityList.push(v)
          }
          console.log(this.cityList)
        })
      })
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
    .active {
      color: orange;
      text-decoration: underline;
    }
    .el-input {
      border: 3px solid orange;
       i {
      font-size: 25px;
      color: orange;
    }
    }
    span {
      font-size: 10px;
      color: rgb(134, 131, 131);
    }
    span:hover{
      cursor: pointer;
      text-decoration: underline;
      color: orange;
    }
  }
}
</style>
