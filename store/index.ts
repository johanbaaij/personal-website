import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { ICategory } from '~/types/category'

export const state = () => ({
  categories: [] as ICategory[]
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setCategories(state, list) {
    state.categories = list
  }
}

export const getters: GetterTree<RootState, RootState> = {
  categoryByTitle: (state) => (title: string) => {
    return state.categories.find(
      (category: ICategory) => category.title === title
    )
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('blog/fetchPosts')
    await dispatch('fetchCategories')
  },

  fetchCategories({ commit }) {
    const files = require.context(
      '~/assets/content/categories/',
      false,
      /\.json$/
    )

    const categories = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })

    commit('setCategories', categories)
  }
}
