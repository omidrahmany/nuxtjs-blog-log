import axios from "axios";

export const state = () => ({
  loadedPost: [],
  selectedPostByAdmin: {}

})

export const getters = {
  loadedPost(state) {
    return state.loadedPost
  },
  selectedPostByAdmin(state) {
    return state.selectedPostByAdmin;
  }
}

export const mutations = {
  setPosts(state, posts) {
    state.loadedPost = posts;
  },
  selectedPostByAdmin(state, post) {
    state.selectedPostByAdmin = post;
  },
  updatePosts(state, newPost) {
    state.loadedPost.push(newPost);
  },
  editPost(state, post) {
    const postId = state.loadedPost.findIndex(p => post.id === p.id);
    console.log(state.loadedPost[postId])
    state.loadedPost[postId] = post;
  }
}

export const actions = {

  savePost(context, newPost) {
    return axios.post("http://localhost:9090/core/save-post", newPost)
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
