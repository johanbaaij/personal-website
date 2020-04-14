<template>
  <div class="col-span-12">
    <h2 class="text-xl">Blog</h2>
    <ul>
      <li v-for="blog in blogPosts" :key="blog.slug">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: blog.slug } }">{{
          blog.title
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { RootState } from '~/store'

@Component({})
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
