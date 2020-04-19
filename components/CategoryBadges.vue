<template>
  <!-- eslint-disable vue/no-v-html -->
  <ul v-if="categories.length">
    <li
      v-for="(title, index) in categories"
      :key="index"
      class="inline-block px-3 py-1 mt-2 mr-2 text-sm font-bold text-gray-700 bg-gray-200 rounded-full"
    >
      <nuxt-link :to="categoryByTitle(title).slug | categoryRoute">
        {{ title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
class CategoryBadges extends Vue {
  @Prop()
  categories!: string[]

  categoryByTitle(title: string) {
    return this.$store.getters.categoryByTitle(title)
  }
}
export default CategoryBadges
</script>
