export default {
  mode: 'universal',
  head: {
    title: 'Johan Baaij - software development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Personal website of Johan Baaij'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: ['~/plugins/hljs.ts'],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true
  },
  generate: {
    routes() {
      const fs = require('fs')
      const path = require('path')
      return fs.readdirSync('./assets/content/blog').map((file: File) => {
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/blog/${file}`)
        }
      })
    }
  },
  axios: {},
  build: {
    extend() {}
  },
  webfontloader: {
    google: {
      families: ['Rubik']
    }
  }
}
