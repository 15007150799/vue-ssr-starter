<template>
  <header :class="$style.header">
    <img src="~@public/logo.png" />
    <ul>
      <li>
        <router-link to="/" exact>Home</router-link>
      </li>
      <li>
        <router-link to="/posts">Posts</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
    <div class="buttons">
      <icon name="bell" />
      <icon name="webpack" />
    </div>
  </header>
</template>

<style lang="stylus" module>
.header
  position: relative
  height: 52px
  line-height: 32px
  padding: 10px 0
  border-bottom: 1px solid #eee

  img
    float: left
    height: 100%
    margin-right: 30px
    border: 2px solid #FF8B3F
    border-radius: 3px

  ul
    margin: 0
    padding: 0
    list-style: none

  li
    float: left

    > a
      display: block
      padding: 0 15px

  :global
  
    .buttons
      float right
      display block
      padding 4px

      > .icon
        width 25px
        height 25px
        cursor pointer

    .icon-bell
      fill rgba(0,0,0,.5)

    .icon-webpack
      fill #8ED6FB
      margin-left 15px
    
</style>
