<template>
  <div class="article">
    <p> {{ content }} </p>
  </div>
</template>
<script>
import { article as api } from '@/api'

export default {
  name: 'Article',
  data () {
    return {
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
  .article
    p
      width 400px
      margin 100px auto
      text-indent 2rem
      text-align left
</style>
