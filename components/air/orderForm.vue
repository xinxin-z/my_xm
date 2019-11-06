<template>
  <div class="order_style">
    <div class="title">
      乘机人
    </div>
    <el-form
      label-position="top"
      label-width="80px"
    >
      <div v-for="(item,index) in users" :key="index" class="order_msg">
        <p>乘车类型</p>
        <div class="msg">
          <el-select placeholder="请选择" value="成人">
            <el-option
              label="成人"
              value="成人"
            />
          </el-select>
          <el-input v-model="item.username" placeholder="姓名" />
        </div>
        <div v-if="index!=0" class="decrement" @click="headercancel">
          ❌
        </div>
        <p>证件类型</p>
        <div
          class="msg"
        >
          <el-select placeholder="请选择" value="身份证">
            <el-option
              label="身份证"
              value="身份证"
            />
          </el-select>
          <el-input v-model="item.id" placeholder="证件号码" />
        </div>
      </div>
      <div class="btn">
        <el-form-item>
          <el-button type="primary" @click="headerAdd">
            添加乘车人
          </el-button>
        </el-form-item>
      </div>
      <p>保险</p>
      <div v-for="(item,index) in ticket.insurances" :key="index+1" class="safe">
        <el-checkbox v-model="checked3" border>
          {{ item.type }}:￥{{ item.price }}/份*1最高赔付{{ item.compensation }}
        </el-checkbox>
      </div>
    </el-form>
    <div class="line">
      <p>联系人</p>
      <div class="contact_content">
        <el-form label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="contactName" />
          </el-form-item>
          <el-form-item label="手机">
            <el-input v-model="contactPhon">
              <template slot="append">
                发送验证码
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">
              立即创建
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
    }
  },
  data () {
    return {
      users: [{ username: '', id: '' }],
      checked3: true,
      insurances: [],
      // 保险id
      contactName: '',
      // 联系人名字
      contactPhon: '',
      // 联系人电话
      invoice: false,
      // 是否需要发票
      seat_xid: this.$route.query.seat_xid,
      // 座位id
      air: this.$route.query.id
      // 航班id
    }
  },
  mounted () {
    console.log(this.ticket)
  },
  methods: {
    headerAdd () {
      this.users.push({ username: '', id: '' })
    },
    headlercaptcha () {
      const tel = this.form.username
      this.$axios.post('/captchas', { tel }).then((res) => {
        console.log(res)
      })
    },
    headercancel (index) {
      this.users.splice(index, 1)
    }
  }
}
</script>

<style lang='less' socped>
.order_style{
  height: 800px;
    .title{
font-size: 22px;
    }
 .order_msg{
     position: relative;
.msg{
 display: flex;
}
 }
 .btn{
     padding-top: 15px;
      border-top: 1px dashed #ccc;
 }
     p{
         font-size: 20px;
     }
     .el-checkbox{
         margin-top:15px;
 }
 .decrement{
     position: absolute;
    width: 25px;
    height: 25px;
    background-color: #666;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
 top: 90px;
    right: 13px;
    border-radius: 50%;
    cursor: pointer;
 }
}
</style>
