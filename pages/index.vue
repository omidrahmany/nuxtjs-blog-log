<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="$store.getters.loadedPost"/>
  </div>
</template>

<script >
import PostList from "~/components/posts/PostList.vue";
import {Context} from "@nuxt/types";
import axios from "axios";

export default {
  name: 'IndexPage',
  components: {
    PostList
  },

  data: () => {
    return {};
  },

  fetch(ctx) {
    return axios.get("http://localhost:9090/core/get-posts")
      .then(response => {
        console.log(`response:`);
        console.log(response);
        ctx.store.commit("setPosts", response.data);
      })
  }

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
  /*  fetch(ctx) {
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
        ctx.store.commit("setPosts", response.loadedPosts)
      })
      .catch(err => ctx.error(err));
  }*/
  /*created() {
    this.$store.dispatch('setPosts', this.loadedPosts);
  },*/
}
</script>

<style scoped>

.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url('~assets/images/projImg.jpg');
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
}


</style>
