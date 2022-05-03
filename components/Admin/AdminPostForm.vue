<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">Thumbnail</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.previewText">Preview Text
    </AppControlInput>
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel
    </AppButton>
  </form>

</template>

<script>
import AppControlInput from "../UI/AppControlInput";
import AppButton from "../UI/AppButton";

export default {
  name: "AdminPostForm",
  components: {AppButton, AppControlInput},
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post ? {...this.post} : {
        id: -1,
        author: '',
        title: '',
        previewText: '',
        thumbnail: ''
      },
      isEditedMode: !!this.post
    }
  },
  methods: {
    onSave() {
      /* adding validation */
      console.log(this.isEditedMode)
      if (this.isEditedMode) {
        this.$nuxt.$emit('submitEditedPost', this.editedPost)
        console.log(this.editedPost);
      } else {
        this.$nuxt.$emit('submitNewPost', this.editedPost)
      }
    },
    onCancel() {
      this.$router.push('/admin');
    }
  }
}
</script>

<style scoped>
form {
  padding: 2%;
}
</style>
