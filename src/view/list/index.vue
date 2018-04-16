<template>
  <div class="article">
    <p v-for="(item, index) in list" :key="index">
      <router-link :to="'/article/' + index">{{ item.title }}</router-link>
    </p>
  </div>
</template>
<script>
import { list as api } from '@/api'
export default {
  name: 'List',
  data () {
    return {
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
  @import "css.styl"
</style>
