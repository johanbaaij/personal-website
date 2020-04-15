import { ActionTree, MutationTree } from 'vuex'
import { IBlogPost } from '~/types/blog'

export const state = () => ({
  blogPosts: [] as IBlogPost[]
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }) {
    const files = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )

    const blogPosts = files
      .keys()
      .map((key) => {
        const res = files(key)
        res.slug = key.slice(2, -5)
        return res
      })
      .reverse()

    await commit('setBlogPosts', blogPosts)
  }
}
