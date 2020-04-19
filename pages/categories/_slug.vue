<template>
  <div class="mt-6 lg:grid lg:grid-cols-12 lg:gap-4">
    <div class="col-span-9">
      <h2 class="text-2xl tracking-widest lowercase">
        <nuxt-link to="/blog">Blog</nuxt-link> &raquo; {{ category.title }}
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
import { ICategory } from '../../types/category'
import BlogPostCard from '@/components/BlogPostCard.vue'
import BlogCategories from '@/components/BlogCategories.vue'

@Component({
  components: {
    BlogPostCard,
    BlogCategories
  }
})
class CategorySlugPage extends Vue {
  category!: ICategory
  async asyncData({ params, payload }: any) {
    if (payload) return { category: payload }
    else
      return {
        category: await require(`~/assets/content/categories/${params.slug}.json`)
      }
  }

  get blogPosts() {
    return this.$store.getters['blog/byCategory'](this.category.title)
  }

  head() {
    return {
      titleTemplate: '%s | Blog | Johan Baaij',
      title: this.category.title
    }
  }
}

export default CategorySlugPage
</script>

<style></style>
