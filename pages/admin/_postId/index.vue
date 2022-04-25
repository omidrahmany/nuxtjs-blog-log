<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "../../../components/Admin/AdminPostForm";

export default {
  name: "index",
  components: {AdminPostForm},
  data() {
    return {
      loadedPost: {
        author: "Omid",
        title: "Kelidar",
        content: 'Super amazing, thanks for that!',
        thumbnailLink: 'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?fit=bounds&format=jpg&width=960'
      }
    }
  }
}
</script>

<style scoped>
.admin-post-page {
  padding: 3%;
}
</style>
