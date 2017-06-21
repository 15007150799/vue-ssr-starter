<template>
  <div id="app">
    <v-header/>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
  import vHeader from '@src/components/Header'
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
    color: #828282;
    text-decoration: none;
  }

  a:hover {
    color: #FF6600;
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

  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
