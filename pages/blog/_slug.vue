<template>
  <!-- eslint-disable vue/no-v-html -->
  <article class="lg:col-span-9 col-span-12">
    <h1 class="text-3xl">{{ blogPost.title }}</h1>

    <div
      v-highlightjs
      class="markdown mt-6"
      v-html="$md.render(blogPost.body)"
    />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import 'highlight.js/styles/vs2015.css'

export default Vue.extend({
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.slug}.json`)
      }
  }
})
</script>
