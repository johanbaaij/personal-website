<template>
  <div class="container mx-auto">
    <div class="mt-6 grid grid-cols-12 gap-4">
      <div class="col-span-1">
        <nuxt-link to="/">
          <img
            class="w-10 mx-auto mt-4"
            src="~/assets/img/logo.svg"
            alt="Logo for Johan Baaij Software Development"
          />
        </nuxt-link>
      </div>
      <div class="col-span-7">
        <h1 class="lowercase text-5xl">
          Johan Baaij<br />software development
        </h1>
      </div>
    </div>
    <div class="mt-6 grid grid-cols-12 gap-4">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head() {
    return {
      bodyAttrs: {
        class: 'my-6'
      }
    }
  }
})
</script>
