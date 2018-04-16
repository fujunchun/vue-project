<template>
  <div class="login">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item :label="$t('name')" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item :label="$t('password')" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">{{ $t('global.login') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

import i18n from '@lang/login'

export default {
  name: 'Login',
  i18n,
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: this.$t('global.messages.input'), trigger: 'blur' }
        ],
        password: [
          { required: true, message: this.$t('global.messages.password'), trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    ...mapActions('user', ['login']),
    submitForm () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          try {
            await this.login({
              data: {
                name: this.form.name,
                password: this.form.password
              }
            })

            this.$router.push('/')
          } catch (e) {
            console.log('登录失败:', e)
          }
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
