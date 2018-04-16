<template>
  <header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <router-link to="/">{{ $t('home') }}</router-link>
      </el-menu-item>
      <el-submenu index="2" @select="changeLanguage">
        <template slot="title">{{ $t('language') }}</template>
        <el-menu-item index="2-1" @click="changeLanguage('zh-CN')">中文</el-menu-item>
        <el-menu-item index="2-2" @click="changeLanguage('en')">English</el-menu-item>
      </el-submenu>
      <el-menu-item v-show="!isLoggedIn" index="3">
        <router-link to="/login">{{ $t('global.login') }}</router-link>
      </el-menu-item>
      <el-menu-item v-show="isLoggedIn" index="3" @click="handleLogout">
        {{ $t('logout') }}
      </el-menu-item>
    </el-menu>
  </header>
</template>
<script>
import i18n from '@lang/header'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  i18n,
  data () {
    return {
      activeIndex: '1'
    }
  },

  computed: {
    ...mapGetters('user', ['isLoggedIn'])
  },

  methods: {
    ...mapActions('user', ['logout']),
    ...mapActions('config', ['changeLang']),
    changeLanguage (lang) {
      this.changeLang({
        lang
      })

      this.$router.go(0)
    },
    async handleLogout () {
      try {
        await this.logout()
        this.$router.push('/')
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  header
    width 1000px
    margin 0 auto 40px
    a
      text-decoration none
</style>
