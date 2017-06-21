<template>
  <header class="header">
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
  </header>
</template>

<style scoped>
  header {
    position: relative;
    height: 52px;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }

  header>img {
    float: left;
    height: 100%;
    margin-right: 30px;
    border: 2px solid #FF8B3F;
    border-radius: 3px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul>li {
    float: left;
  }

  ul>li>a {
    display: block;
    line-height: 32px;
    padding: 0 15px;
  }

  .router-link-active {
    color: #FF6600;
  }
</style>
