<template>
  <blog-post :blog-post="blogPost" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { IBlogPost } from '@/types/blog'
import BlogPost from '@/components/BlogPost.vue'

@Component({
  components: { BlogPost }
})
class BlogPostPage extends Vue {
  blogPost!: IBlogPost

  async asyncData({ params, payload }: any) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.slug}.json`)
      }
  }

  head() {
    return {
      title: this.blogPost.title,
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: this.blogPost.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.blogPost.description
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE_URL}${this.$route.fullPath}`
        }
      ]
    }
  }
}

export default BlogPostPage
</script>
