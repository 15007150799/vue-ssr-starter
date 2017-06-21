<template>
  <div>
    <h1>Home</h1>
    <a href="https://github.com/liamwang/vue-ssr-starter">{{title}}</a>
  </div>
</template>
<script>
  import { TITLE } from '@root/webconfig'
  export default {
    title: `${TITLE} - A Vue.js starter kit with vue 2.0, vue-router, vuex and axios for server-side rendering.`,
    computed: {
      title: function () {
        return this.$options.title
      }
    }
  }

</script>
