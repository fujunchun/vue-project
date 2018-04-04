<template>
  <div class="article">
    <h2> {{ msg }} </h2>
    <p> {{ content }} </p>
  </div>
</template>
<script>
import { article as api } from '@/api'
export default {
  data () {
    return {
      msg: '我是文章页',
      content: ''
    }
  },

  async created () {
    try {
      let response = await api.getArticle({
        params: {
          id: this.$route.params.id
        }
      })

      this.content = response.data.content
    } catch (e) {
      console.error('获取文章出错：', e)
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
