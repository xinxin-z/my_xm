<template>
  <div class="loginForm">
    <el-form ref="form" :rules="rules" :model="form" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="nickname" label="昵称">
        <el-input v-model="form.nickname" placeholder="请输入昵称" />
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="form.password" placeholder="请输入密码" />
      </el-form-item>
      <el-button type="primary" style="width:100%;" @click="headlerLogin">登录</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        nickname: '',
        password: ''
      },
      rules: {
        nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
        // eslint-disable-next-line standard/object-curly-even-spacing
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    headlerLogin (token) {
      this.$axios.post('/accounts/login', token).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
</style>
