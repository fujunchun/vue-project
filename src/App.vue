<template>
  <div id="app">
    <c-header></c-header>
    <transition name="fade"  mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import CHeader from '@components/header'
export default {
  name: 'App',

  components: {
    CHeader
  }
}
</script>

<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    .fade-enter-active
    .fade-leave-active
      transition all .2s ease
    .fade-enter
    .fade-leave-active
      opacity 0
</style>
