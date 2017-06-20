<template>
  <div class="posts">
    <div v-for="post in posts" class="post">
      <h3>{{post.id}}. {{post.title}}</h3>
      <summary>
        {{post.body}}
      </summary>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    title: 'Posts',
    asyncData({ store }) {
      return store.dispatch('getPosts')
    },
    computed: {
      ...mapGetters({
        posts: 'posts'
      })
    }
  }

</script>

<style scoped>
  h3 {
    margin: 20px 0 15px;
  }

  .posts {
    max-width: 600px;
  }

  .post {
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
  }
</style>
