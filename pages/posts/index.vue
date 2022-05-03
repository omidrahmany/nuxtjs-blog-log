<template>
  <div class="posts-page">
    <PostList :posts="$store.getters.loadedPost" />
  </div>
</template>

<script>
import PostList from "../../components/posts/PostList";

export default {
  name: "index",
  components: {
    PostList
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
