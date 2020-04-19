<template>
  <div class="container px-4 mx-auto">
    <div class="my-40 lg:grid lg:gap-4 lg:grid-cols-12">
      <div class="lg:col-span-2">
        <nuxt-link to="/">
          <img
            class="mx-auto"
            src="~/assets/img/logo.svg"
            alt="Logo for Johan Baaij Software Development"
          />
        </nuxt-link>
      </div>
      <div class="lg:col-span-4">
        <h1
          class="text-5xl tracking-widest text-center lowercase lg:inline lg:text-6xl"
        >
          Johan Baaij
        </h1>
      </div>

      <div class="lg:col-span-4">
        <p class="text-2xl">
          is developing software for the web with Ruby&nbsp;on&nbsp;Rails,
          Vue.js and other open-source technologies.
        </p>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  head: {
    titleTemplate: '%s | Johan Baaij',
    bodyAttrs: {
      class: 'my-6'
    }
  }
})
class DefaultLayout extends Vue {}
export default DefaultLayout
</script>
