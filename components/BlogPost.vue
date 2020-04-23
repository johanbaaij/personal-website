<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="mt-6 lg:grid lg:grid-cols-12 lg:gap-4">
    <article class="col-span-12 border-gray-600 rounded-sm lg:col-span-9">
      <h1 class="text-3xl">{{ blogPost.title }}</h1>
      <h2 class="mt-3 font-bold text-gray-600">
        {{ blogPost.date | dateString }}
      </h2>
      <category-badges class="mt-3" :categories="blogPost.categories" />
      <div
        v-highlightjs
        class="mt-6 markdown markdown__highlightjs"
        v-html="$md.render(blogPost.body)"
      />
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import CategoryBadges from '@/components/CategoryBadges.vue'
import { IBlogPost } from '@/types/blog'

@Component({
  components: {
    CategoryBadges
  }
})
class BlogPost extends Vue {
  @Prop()
  blogPost!: IBlogPost
}

export default BlogPost
</script>

<style>
.markdown {
  @apply text-lg text-gray-900 leading-normal;
  > * + *,
  li + li,
  li > p + p {
    @apply mt-6;
  }
  strong {
    @apply text-black font-bold;
  }
  a {
    @apply text-black font-bold;
  }
  strong a {
    @apply font-bold;
  }
  h2,
  h2 code {
    @apply leading-tight text-xl font-bold text-black mb-2 mt-10;
  }
  h3 {
    @apply leading-tight text-lg font-bold text-black mt-8 -mb-2;
  }
  code {
    @apply text-sm inline bg-gray-300 px-1;
  }
  pre code {
    @apply block bg-gray-900 p-4 rounded;
  }
  blockquote {
    @apply border-l-4 border-gray-500 pl-4 italic;
  }
  ul,
  ol {
    @apply pl-5;
  }
  li {
    @apply list-disc;
  }
  li li {
    list-style-type: circle;
  }
  li ul {
    @apply mt-6;
  }
}
</style>
