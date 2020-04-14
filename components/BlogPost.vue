<template>
  <!-- eslint-disable vue/no-v-html -->
  <article class="lg:col-span-9 col-span-12 border-gray-600 rounded-sm">
    <h1 class="text-3xl">{{ blogPost.title }}</h1>
    <h2 class="font-bold">{{ date }}</h2>
    <div
      v-highlightjs
      class="markdown mt-6"
      v-html="$md.render(blogPost.body)"
    />
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { IBlogPost } from '@/types/blog'
import 'highlight.js/styles/vs2015.css'

@Component
class BlogPost extends Vue {
  @Prop()
  blogPost!: IBlogPost

  get date() {
    return new Date(this.blogPost.date).toDateString()
  }
}

export default BlogPost
</script>
