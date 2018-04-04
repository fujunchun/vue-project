<template>
  <div class="login">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    ...mapActions('user', ['login']),
    submitForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.login({
            data: {
              name: this.form.name,
              password: this.form.password
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .login
    width 400px
    margin 0 auto
</style>
