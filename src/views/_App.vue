<template>
  <div id="app">
    <v-header />
    <transition name="fade" mode="out-in">
      <router-view class="view" />
    </transition>
  </div>
</template>

<script>
import vHeader from './components/Header'
export default {
  components: {
    vHeader
  }
}
</script>

<style lang="stylus">
*
  box-sizing border-box

body
  margin 0
  font-size 14px
a
  color #828282
  text-decoration none

  &:hover
    color: #FF6600

#app
  max-width 1000px
  padding 0 30px
  margin 0 auto

.view
  padding 15px 0

.view>h1
  margin-left 3px

.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter,  .fade-leave-active
  opacity 0

.router-link-active
  color #FF6600
</style>
