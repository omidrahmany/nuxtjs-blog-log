import axios from "axios";

export const state = () => ({
  loadedPosts: [],
  selectedPostByAdmin: {}

})

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  },
  selectedPostByAdmin(state) {
    return state.selectedPostByAdmin;
  }
}

export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts;
  },
  selectedPostByAdmin(state, post) {
    state.selectedPostByAdmin = post;
  },
  updatePosts(state, newPost) {
    state.loadedPosts.push(newPost);
  },
  editPost(state, post) {
    const postId = state.loadedPosts.findIndex(p => post.id === p.id);
    console.log(state.loadedPosts[postId])
    state.loadedPosts[postId] = post;
  }
}

export const actions = {

  savePost(context, newPost) {
    return axios.post("http://localhost:9090/core/save-post", newPost)
    // return this.$axios.$post("http://localhost:9090/core/save-post", newPost)
      .then(response => {
        context.commit("updatePosts", newPost);
      })
      .catch(err => context.error(err))
  },

  editPost(context, post) {
    console.log("editPost method");
    return axios.put("http://localhost:9090/core/edit-post", post)
      .then(res => {
        console.log("inside then method");

        context.commit("editPost", post);
      })
      .catch(err => context.error(err))
  },

  setPosts(vuexContext, posts) {
    vuexContext.commit('setPosts', posts)
  }
}
