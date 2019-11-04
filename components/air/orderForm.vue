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
      <div class="safe">
        <p>保险</p>
        <el-checkbox v-model="checked3" label="航空意外险：￥30/份*1 最高赔付260万" border />
        <el-checkbox v-model="checked4" label="航空延误险：￥30/份*1 最高赔付300万" border />
      </div>
    </el-form>
    <div class="line">
      <p>联系人</p>
      <el-form
        ref="users"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="nickname" label="姓名">
          <el-input v-model="users.nickname" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item prop="captcha" label="手机号">
          <el-input v-model="users.captcha">
            <template slot="append">
              <div @click="headlercaptcha">
                验证码
              </div>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="username" label="验证码">
          <el-input v-model="users.username" placeholder="请输入手机号" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      props: {
        ticket: {
          type: Object,
          default: {}
        }
      },
      users: [{
        username: '',
        // 昵称
        nickname: '',
        // 手机验证码
        captcha: ''
        // 密码
      }],
      checked3: true,
      checked4: false
    }
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
