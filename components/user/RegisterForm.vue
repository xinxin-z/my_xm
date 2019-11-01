<template>
  <div class="RegisterForm">
    <el-form
      ref="form"
      :rules="rules"
      :model="form"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item prop="username" label="手机号">
        <el-input v-model="form.username" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item prop="captcha" label="验证码">
        <el-input v-model="form.captcha">
          <template slot="append">
            <div @click="headlercaptcha">
              验证码
            </div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="nickname" label="昵称">
        <el-input v-model="form.nickname" placeholder="请输入昵称" />
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="form.password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item prop="password2" label="确认密码">
        <el-input v-model="form.password2" placeholder="请再次输入密码" />
      </el-form-item>
      <el-button type="primary" style="width:100%;" @click="submitForm">
        注册
      </el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        // 手机号码
        username: '13813813813',
        // 昵称
        nickname: '',
        // 手机验证码
        captcha: '',
        // 密码
        password: '',
        password2: ''

      },
      // 验证规则
      rules: {
        username: [{ required: true, message: '请输入手机号', trigger: 'blur' },
          { required: true, message: '请输入合法手机号', trigger: 'blur', pattern: /^1\d{10}$/ }],
        nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
        captcha: [{ required: true, message: '验证码', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        password2: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  // 表单注册
  methods: {
    submitForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // eslint-disable-next-line no-console
          console.log(valid)
          const { password2, ...resForm } = this.form
          this.$axios.post('/accounts/register', resForm).then((res) => {
            // eslint-disable-next-line no-console
            console.log(res)
            this.$router.push('/user/login/0')
          })
        } else {
          return false
        }
      })
    },
    // 手机验证码
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
<style lang="less" scoped>
.RegisterForm {
  padding: 20px;
}
</style>
