<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm  :post="$store.getters.selectedPostByAdmin"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "../../../components/Admin/AdminPostForm";
import admin from '~/layouts/admin.vue'
import axios from "axios";

export default {
  name: "index",
  layout: 'admin',
  components: {AdminPostForm},
  data() {
    return {
    }
  },
  fetch(ctx) {
    return axios.get(`http://localhost:9090/core/get-post/${ctx.params.postId}`)
      .then(res => {
        res.data["author"] = "OMID";
        this.loadedPost = res.data;
        ctx.store.commit("selectedPostByAdmin", res.data)
        console.log(res);
      })
      .catch(err => ctx.error(err))
  }
}
</script>

<style scoped>
.admin-post-page {
  padding: 3%;
}
</style>
