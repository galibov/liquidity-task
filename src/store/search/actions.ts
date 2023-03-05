import { ActionTree } from 'vuex'
import { api } from 'boot/axios'
import axios from 'axios'
import { SearhStateInterface } from './state'
import { StateInterface } from '../index'
import { CATEGORIES } from 'src/config/api.config'
const actions: ActionTree<SearhStateInterface, StateInterface> = {

  async getSearchResult({ commit }, searchInput: string): Promise<void> {

    commit('setLoading', true)
    commit('setSearch', searchInput)
    axios.all([
      api.get(CATEGORIES.films.url, { params: { search: searchInput } }),
      api.get(CATEGORIES.people.url, { params: { search: searchInput } }),
      api.get(CATEGORIES.planets.url, { params: { search: searchInput } }),
      api.get(CATEGORIES.species.url, { params: { search: searchInput } }),
      api.get(CATEGORIES.starships.url, { params: { search: searchInput } }),
      api.get(CATEGORIES.vehicles.url, { params: { search: searchInput } }),
    ]).then(axios.spread((films, people, planets, species, starships, vehicles) => {
      commit('setSearchResult', [{
        name: CATEGORIES.films.name,
        data: films.data.results.splice(0, 3)
      },
      {
        name: CATEGORIES.people.name,
        data: people.data.results.splice(0, 3)
      },
      {
        name: CATEGORIES.planets.name,
        data: planets.data.results.splice(0, 3)
      },
      {
        name: CATEGORIES.species.name,
        data: species.data.results.splice(0, 3)
      },
      {
        name: CATEGORIES.starships.name,
        data: starships.data.results.splice(0, 3)
      },
      {
        name: CATEGORIES.vehicles.name,
        data: vehicles.data.results.splice(0, 3)
      }

      ]
      )

      commit('setLoading', false)
    })).catch((e) => {
      console.log(e)
    })
  },

  getCategory({ commit }, { category, pageNum }): void {
    commit('setLoading', true)
    api.get(category, { params: { page: pageNum } }).then(({ data }) => {
      commit('setCategory', { data: data.results, allCategoryItems: data.count })
    }).then(() => {
      commit('setLoading', false)
    }).catch((e) => {
      console.log(e)
    }
    )

  },

  modifyCategoryData({ commit }, payload): void {
    commit('setCategoryData', payload)
  },

  deleteCategoryData({ commit }, index): void {
    commit('deleteCategoryData', index)
  }


}

export default actions
