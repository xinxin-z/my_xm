<template>
  <div class="loginForm">
    <el-form ref="form" :rules="rules" :model="form" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="username" label="昵称">
        <el-input v-model="form.username" placeholder="请输入昵称" />
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="form.password" placeholder="请输入密码" />
      </el-form-item>
      <el-button type="primary" style="width:100%;" @click="headlerLogin">
        登录
      </el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        username: '13813813813',
        password: '12'
      },
      rules: {
        username: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
        // eslint-disable-next-line standard/object-curly-even-spacing
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    headlerLogin () {
      // eslint-disable-next-line no-undef
      this.$store.dispatch('user/setUserInfo', this.form).then(() => {
        this.$message.success('登录成功')
        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.loginForm {
  padding: 20px;
}
</style>
