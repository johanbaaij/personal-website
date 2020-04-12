<template>
  <div>{{ blogPosts }}</div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  }
})
</script>
