<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      title="My First Post"
      preview-text="this is my first Post"
      thumbnail="https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?fit=bounds&format=jpg&width=960"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      title="Hello there!"
      preview-text="this is my second Post"
      thumbnail="https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?fit=bounds&format=jpg&width=960"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      title="Hi!"
      preview-text="this is my third Post"
      thumbnail="https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?fit=bounds&format=jpg&width=960"
    />
  </section>

</template>

<script>
import PostPreview from "./PostPreview";

export default {
  name: "PostList",
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
}
</style>
