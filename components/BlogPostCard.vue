<template>
  <div
    :class="{
      'border-gray-400': isCodeLogEntry
    }"
    class="p-4 text-2xl border-4 border-black rounded-sm"
  >
    <nuxt-link :to="post.slug | blogRoute">
      <h3>{{ post.title }}</h3>
    </nuxt-link>
    <nuxt-link :to="post.slug | blogRoute">
      <time class="font-bold text-gray-600" :datetime="post.date">{{
        post.date | dateString
      }}</time>
    </nuxt-link>
    <category-badges :categories="post.categories" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { IBlogPost } from '@/types/blog'
import CategoryBadges from '@/components/CategoryBadges.vue'

@Component({
  components: {
    CategoryBadges
  }
})
class BlogPostCard extends Vue {
  @Prop()
  post!: IBlogPost

  get isCodeLogEntry() {
    return this.post.categories.includes('#100DaysOfCode')
  }
}
export default BlogPostCard
</script>
