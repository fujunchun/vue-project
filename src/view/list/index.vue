<template>
  <div class="article">
    <h2> {{ msg }} </h2>
    <div v-for="(item, index) in list" :key="index">
      <router-link :to="'/article/' + index" >{{ item.title }}</router-link>
    </div>
  </div>
</template>
<script>
import { list as api } from '@/api'
export default {
  data () {
    return {
      msg: '我是列表页',
      list: []
    }
  },

  async mounted () {
    try {
      let response = await api.getList()
      console.log('response:', response)
      this.list = response.data.list
    } catch (e) {
      console.error('获取列表失败：', e)
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
