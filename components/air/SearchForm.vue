<template>
  <div class="search_form">
    <div class="search_title">
      <div
        v-for="(item,index) in ['单程','往返']"
        :key="index"
        :class="currentIndex==index?'active':''"
        class="title_item"
      >
        {{ item }}
      </div>
    </div>
    <div class="search_content">
      <el-form ref="city" :model="city" label-width="100px">
        <el-form-item label="出发城市">
          <el-autocomplete
            v-model="city.departCity"
            :fetch-suggestions="querySearchAsync"
            @select="handleSelect"
          />
        </el-form-item>
        <div class="city_change" @click="change">
          换
        </div>
        <el-form-item label="到达城市">
          <el-autocomplete
            v-model="city.destCity"
            :fetch-suggestions="querySearchAsync"
            @select="Select"
          />
        </el-form-item>
        <el-form-item label="选择日期">
          <el-col>
            <el-date-picker v-model="city.departDate" type="date" style="width: 100%;" />
          </el-col>
        </el-form-item>
        <el-button type="primary" style="width:100%;" @click="headerSearch">
          搜索
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0,
      city: {
        // 出发城市
        departCity: '',
        // 出发城市代码
        departCode: '',
        // 目标城市
        destCity: '',
        // 目标城市代码
        destCode: '',
        // 日期
        departDate: ''
      }
    }
  },
  methods: {
    // 输入框改变的时候被调用
    querySearchAsync (queryString, cb) {
      console.log(queryString)
      // queryString当前输入框的值
      if (queryString) {
        this.$axios.get('/airs/city', { params: { name: queryString } })
          .then((res) => {
            console.log(res)
            const cityArr = res.data.data
            cityArr.forEach((v) => {
              // 去掉'市'
              v.name = v.name.replace('市', '')
              v.value = v.name
            })
            console.log(cityArr)

            cb(cityArr)
          })
      }
    },
    // 点击出发的城市
    handleSelect (item) {
      this.city.departCode = item.sort
    },
    // 到达城市
    Select (item) {
      this.city.destCode = item.sort
    },
    // 换
    change () {
      // this.city.departCity = this.city.destCity
      // this.city.destCity = this.city.departCity
      // this.city.departCode = this.city.destCode
      // this.city.destCode = this.city.departCode
      [this.city.departCity, this.city.destCity, this.city.departCode, this.city.destCode] = [
        this.city.destCity, this.city.departCity, this.city.destCode, this.city.departCode
      ]
    },
    headerSearch () {
      this.$router.push({ path: 'air/fliesList', query: this.city })
    }
  }
}
</script>

<style lang="less" scoped>
.search_form {
  border: 1px solid #eee;
}

.search_title {
  height: 50px;
  background-color: #fff;
  display: flex;
  .title_item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
  }
  .active {
    background-color: #fff;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      top: 0;
      left: 0;
      background-color: orange;
    }
  }
}
.search_content {
  padding: 20px 50px 20px 25px;
  position: relative;
  .city_change {
    position: absolute;
    background-color: #666;
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 13px;
    right: 11px;
    top: 59px;
    cursor: pointer;
    &::before {
      content: "";
      width: 30px;
      height: 19px;
      border: 1px solid #ccc;
      border-left: none;
      border-bottom: none;
      position: absolute;
      top: -20px;
      left: -20px;
    }
    &::after {
      content: "";
      width: 30px;
      height: 19px;
      border: 1px solid #ccc;
      border-left: none;
      border-top: none;
      position: absolute;
      bottom: -20px;
      left: -20px;
    }
  }
}
</style>
