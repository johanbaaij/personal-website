<template>
  <div class="mt-6 lg:grid lg:grid-cols-12 lg:gap-4">
    <div class="flex col-span-2">
      <h2 class="self-center text-6xl tracking-widest lowercase">
        Blog
      </h2>
    </div>
    <blog-post-card
      v-for="post in blogPosts"
      :key="post.slug"
      class="mt-6 lg:mt-1 lg:h-56 lg:col-span-4"
      :post="post"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { RootState } from '@/store'
import BlogPostCard from '@/components/BlogPostCard.vue'

@Component({
  components: {
    BlogPostCard
  }
})
class HomePage extends Vue {
  get blogPosts() {
    return (this.$store.state as RootState).blogPosts
  }

  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
export default HomePage
</script>
