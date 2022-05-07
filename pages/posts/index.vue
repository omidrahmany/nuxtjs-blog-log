<template>
  <div class="posts-page">
    <PostList :posts="getPosts"/>
  </div>
</template>

<script>

export default {
  name: "index",
  middleware: 'log',
  computed: {
    getPosts() {
      return this.$store.getters.loadedPosts;
    }
  },
  head: {
    title: "A blog post"
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
