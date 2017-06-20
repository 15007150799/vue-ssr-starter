<template>
  <div id="app">
    <v-header/>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
  import vHeader from '@/components/Header'
  export default {
    components: {
      vHeader
    }
  }

</script>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  a {
    color: #35495E;
    text-decoration: none;
  }



  #app {
    max-width: 1000px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .view {
    padding: 15px 0;
  }

  .view>h1 {
    margin-left: 3px;
  }
</style>
