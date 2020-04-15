<template>
  <div class="p-4 text-2xl border-4 border-black rounded-sm">
    <nuxt-link :to="post.slug | blogRoute">
      <h3>{{ post.title }}</h3>
    </nuxt-link>
    <nuxt-link :to="post.slug | blogRoute">
      <time class="font-bold text-gray-600" :datetime="post.date">{{
        post.date | dateString
      }}</time>
    </nuxt-link>
    <tag-badges class="" :tags="post.tags" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { IBlogPost } from '@/types/blog'
import TagBadges from '@/components/TagBadges.vue'

@Component({
  components: {
    TagBadges
  }
})
class BlogPostCard extends Vue {
  @Prop()
  post!: IBlogPost
}
export default BlogPostCard
</script>
