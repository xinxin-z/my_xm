<template>
  <div class="order_style">
    <div class="title">
      乘机人
    </div>
    <el-form
      label-position="top"
      label-width="80px"
    >
      <div class="order_msg">
        <p>乘车类型</p>
        <div class="msg">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in ticket"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-input v-model="input" placeholder="姓名" />
        </div>
      </div>
      <div class="order_msg">
        <p>证件类型</p>
        <div class="msg">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-input v-model="input" placeholder="证件号码" />
        </div>
      </div>
      <div class="btn">
        <el-form-item>
          <el-button type="primary">
            添加乘车人
          </el-button>
        </el-form-item>
      </div>
      <div class="safe">
        <p>保险</p>
        <el-checkbox v-model="checked3" label="航空意外险：￥30/份*1 最高赔付260万" border />
        <el-checkbox v-model="checked4" label="航空延误险：￥30/份*1 最高赔付300万" border />
      </div>
    </el-form>
    <div class="line">
      <p>联系人</p>
      <el-form
        ref="form"
        :model="form"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="nickname" label="姓名">
          <el-input v-model="form.nickname" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item prop="captcha" label="手机号">
          <el-input v-model="form.captcha">
            <template slot="append">
              <div @click="headlercaptcha">
                验证码
              </div>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="username" label="验证码">
          <el-input v-model="form.username" placeholder="请输入手机号" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '13813813813',
        // 昵称
        nickname: '',
        // 手机验证码
        captcha: ''
        // 密码
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }],
      input: '',
      checked3: true,
      checked4: false
    }
  },
  methods: {
    headlercaptcha () {
      // eslint-disable-next-line no-console
      console.log(1)

      const tel = this.form.username
      this.$axios.post('/captchas', { tel }).then((res) => {
        console.log(res)
      })
    }
  }

}
</script>

<style lang='less' socped>
.order_style{
    .title{
font-size: 22px;
    }
 .order_msg{
.msg{
 display: flex;
}
 }
 .btn{
     padding-top: 15px;
      border-top: 1px dashed #ccc;
 }
 .safe{
     border-top: 1px dashed #ccc;
    border-bottom: 1px dashed #ccc;
     p{
         font-size: 20px;
     }
     height: 210px;
     .el-checkbox{
         margin-top:15px;
     }

 }
}
</style>
