<template>
  <div class="mt-6 lg:grid lg:grid-cols-12 lg:gap-4">
    <div class="col-span-9">
      <h2 class="text-2xl tracking-widest lowercase">
        Blog
      </h2>
      <blog-post-card
        v-for="post in blogPosts"
        :key="post.slug"
        class="mt-6"
        :post="post"
      />
    </div>
    <blog-categories class="col-span-3" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BlogPostCard from '@/components/BlogPostCard.vue'
import BlogCategories from '@/components/BlogCategories.vue'

@Component({
  components: {
    BlogPostCard,
    BlogCategories
  },
  head: {
    title: 'Blog'
  }
})
class BlogIndex extends Vue {
  get blogPosts() {
    return this.$store.getters['blog/featured']
  }
}
export default BlogIndex
</script>
