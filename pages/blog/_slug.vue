<template>
  <blog-post :blog-post="blogPost" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import BlogPost from '@/components/BlogPost.vue'

@Component({
  components: { BlogPost }
})
class BlogPostPage extends Vue {
  async asyncData({ params, payload }: any) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.slug}.json`)
      }
  }
}

export default BlogPostPage
</script>
