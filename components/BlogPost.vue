<template>
  <!-- eslint-disable vue/no-v-html -->
  <article class="lg:col-span-9 col-span-12 border-gray-600 rounded-sm">
    <h1 class="text-3xl">{{ blogPost.title }}</h1>
    <h2 class="font-bold mt-3 text-gray-600">
      {{ blogPost.date | dateString }}
    </h2>
    <tag-badges class="mt-3" :tags="blogPost.tags" />
    <div
      v-highlightjs
      class="markdown mt-6"
      v-html="$md.render(blogPost.body)"
    />
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import TagBadges from '@/components/TagBadges.vue'
import { IBlogPost } from '@/types/blog'
import 'highlight.js/styles/vs2015.css'

@Component({
  components: {
    TagBadges
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
  & > * + *,
  & li + li,
  & li > p + p {
    @apply mt-6;
  }
  & strong {
    @apply text-black font-bold;
  }
  & a {
    @apply text-black font-semibold;
  }
  & strong a {
    @apply font-bold;
  }
  & h2,
  h2 code {
    @apply leading-tight text-xl font-bold text-black mb-2 mt-10;
  }
  & h3 {
    @apply leading-tight text-lg font-bold text-black mt-8 -mb-2;
  }
  & code {
    @apply text-sm inline bg-gray-300 px-1;
  }
  & pre code {
    @apply block bg-gray-900 p-4 rounded;
  }
  & blockquote {
    @apply border-l-4 border-gray-500 pl-4 italic;
  }
  & ul,
  & ol {
    @apply pl-5;
    @screen sm {
      @apply pl-10;
    }
  }
}
</style>
