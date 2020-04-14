<template>
  <!-- eslint-disable vue/no-v-html -->
  <ul v-if="tags.length">
    <li
      v-for="(tag, index) in tags"
      :key="index"
      class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
    >
      {{ tag }}
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
class TagBadges extends Vue {
  @Prop()
  tags!: string[]
}

export default TagBadges
</script>
