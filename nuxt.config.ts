export default {
  mode: 'universal',
  head: {
    title: 'Johan Baaij | software development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Personal website of Johan Baaij'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'johan.baaij.com.au'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Personal website of Johan Baaij'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Johan Baaij | software development'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: ['~/plugins/hljs.ts', '~/plugins/filters.ts'],
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
      const blog = fs.readdirSync('./assets/content/blog').map((file: File) => {
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/blog/${file}`)
        }
      })
      const categories = fs
        .readdirSync('./assets/content/categories')
        .map((file: File) => {
          return {
            route: `/categories/${path.parse(file).name}`, // Return the slug
            payload: require(`./assets/content/categories/${file}`)
          }
        })
      return [...blog, ...categories]
    }
  },
  axios: {},
  build: {
    extend() {},
    postcss: {
      plugins: {
        'postcss-nested': {}
      }
    }
  },
  modern: 'client',
  webfontloader: {
    google: {
      families: ['Rubik']
    }
  }
}
