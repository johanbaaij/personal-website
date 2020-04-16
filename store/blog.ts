import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { RootState } from '~/store'
import { IBlogPost } from '~/types/blog'

export const state = () => ({
  posts: [] as IBlogPost[]
})

export type BlogState = ReturnType<typeof state>

export const mutations: MutationTree<BlogState> = {
  setPosts(state, list) {
    state.posts = list
  }
}

export const getters: GetterTree<BlogState, RootState> = {
  sortedByDate: (state) =>
    [...state.posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    ),
  homepageFeatures: (_state, getters) =>
    [...getters.sortedByDate].sort(
      (a, b) =>
        (b.tags.includes('100DaysOfCode') ? -1 : 1) -
        (a.tags.includes('100DaysOfCode') ? -1 : 1)
    ),
  postCount: (state) => state.posts.length
}

export const actions: ActionTree<BlogState, RootState> = {
  fetchPosts({ commit }) {
    const files = require.context('~/assets/content/blog/', false, /\.json$/)

    const posts = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      delete res.body
      return res
    })

    commit('setPosts', posts)
  }
}
