<template>
  <div>
    <h2 class="mb-6 text-2xl tracking-widest lowercase">
      Categories
    </h2>
    <nuxt-link
      v-for="category in categories"
      :key="category.slug"
      class="block px-3 py-1 mb-2 mr-2 text-sm font-bold text-gray-700 bg-gray-200 rounded-full categories__link"
      :to="category.slug | categoryRoute"
      >{{ category.title }}</nuxt-link
    >
    <nuxt-link to="/blog">all posts ({{ postCount }})</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
class BlogCategories extends Vue {
  get categories() {
    return this.$store.state.categories
  }

  get postCount() {
    return this.$store.getters['blog/postCount']
  }
}
export default BlogCategories
</script>
