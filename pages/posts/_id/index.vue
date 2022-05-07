<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">Title of the post: {{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">
          Last Updated on {{ loadedPost.updateDate | ourDate }}</div>
        <div class="post-detail">Written By {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">Content of the post: {{ loadedPost.previewText }}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "index",
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '1',
          title: 'First Post with ID: ' + context.route.params.id,
          thumbnail: 'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
          previewText: 'The most power lang',
          updateDate: new Date(),
          author: 'Omid '
        }
      })
    }, 1000)
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
