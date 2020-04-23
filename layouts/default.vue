<template>
  <div class="container flex flex-col min-h-screen px-4 mx-auto">
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
        <h1 class="text-6xl tracking-widest text-center lowercase lg:inline">
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
    <nuxt class="flex-grow" />
    <div class="mt-10 mb-6 lg:grid lg:gap-4 lg:grid-cols-12">
      <div class="col-span-1">
        <a href="https://twitter.com/BaaijJohan">
          <twitter-icon />
        </a>
      </div>

      <div class="col-span-1">
        <a class="inline" href="https://github.com/johanbaaij">
          <github-icon />
        </a>
      </div>

      <div class="col-span-1">
        <a href="https://www.linkedin.com/in/johanbaaij/">
          <linkedin-icon />
        </a>
      </div>

      <div class="col-span-1">
        <a href="https://stackoverflow.com/users/1184932/johan-baaij">
          <stack-overflow-icon />
        </a>
      </div>

      <div class="col-span-1">
        <a href="mailto:johan@baaij.com.au">
          <email-icon />
        </a>
      </div>

      <div class="col-span-2 col-start-11 text-right">
        <a
          :href="`https://github.com/johanbaaij/personal-website/commit/${commitSha}`"
        >
          {{ commitSha }}
          <source-commit-icon />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import TwitterIcon from 'mdi-vue/Twitter.vue'
import GithubIcon from 'mdi-vue/Github.vue'
import LinkedinIcon from 'mdi-vue/Linkedin.vue'
import StackOverflowIcon from 'mdi-vue/StackOverflow.vue'
import EmailIcon from 'mdi-vue/Email.vue'
import SourceCommitIcon from 'mdi-vue/SourceCommit.vue'

@Component({
  components: {
    TwitterIcon,
    GithubIcon,
    LinkedinIcon,
    StackOverflowIcon,
    EmailIcon,
    SourceCommitIcon
  }
})
class DefaultLayout extends Vue {
  @Provide() commitSha = process.env.NUXT_ENV_CURRENT_GIT_SHA

  head() {
    return {
      titleTemplate: '%s | Johan Baaij',
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}/img/banner.png`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.BASE_URL
        }
      ]
    }
  }
}
export default DefaultLayout
</script>
