<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm/>
    </section>
  </div>
</template>

<script>
import admin from '~/layouts/admin.vue'
import axios from 'axios'

export default {
  name: "index",
  layout: 'admin',
  created() {
    this.$nuxt.$on('submitEditedPost', (postData) => {
      this.$store.dispatch("editPost", postData)
        .then(res => {
          this.$router.push("/admin");
        })
    });
    this.$nuxt.$on('submitNewPost', (newPost) => {
      this.$store.dispatch("savePost", newPost);
      this.$router.push("/admin")
    })
  }
}
</script>


<style scoped>

</style>
