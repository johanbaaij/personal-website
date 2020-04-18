import Vue from 'vue'

Vue.filter('dateString', (val: string) => new Date(val).toDateString())

Vue.filter('blogRoute', (slug: string) => ({
  name: 'blog-slug',
  params: { slug }
}))

Vue.filter('categoryRoute', (slug: string) => ({
  name: 'categories-slug',
  params: { slug }
}))
