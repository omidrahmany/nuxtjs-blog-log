<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList isAdmin :posts="$store.getters.loadedPosts"/>
    </section>
  </div>
</template>

<script>
import admin from '~/layouts/admin.vue'


export default {
  layout: 'admin',
  name: "admin-index",
  /*asyncData(ctx) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
            loadedPosts: [
              {
                id: '1',
                title: 'Java',
                thumbnail: 'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
                previewText: 'The most power lang'
              },
              {
                id: '2',
                title: 'Java',
                thumbnail: 'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
                previewText: 'The most power lang'
              },
              {
                id: '3',
                title: 'Java',
                thumbnail: 'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
                previewText: 'The most power lang'
              }
            ]
          }
        );
      }, 1500);
    })
      .then(response => {
        return response;
      })
      .catch(err => ctx.error(err));
  },*/

}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
