import { MutationTree } from 'vuex';
import { SearhStateInterface } from './state';

const mutation: MutationTree<SearhStateInterface> = {
  setSearchResult(state: SearhStateInterface, searchResult: SearhStateInterface['searchResult']) {
    state.searchResult = searchResult;
  },
  setSearch(state: SearhStateInterface, searchInput: SearhStateInterface['searchInput']) {
    state.searchInput = searchInput;
  },

  setCategory(state: SearhStateInterface, categoryData: { allCategoryItems: number, data: SearhStateInterface['categoryData'] }) {

    state.allCategoryItems = categoryData.allCategoryItems;
    state.categoryData = categoryData.data;
  },
  setCategoryData(state: SearhStateInterface, categoryData: { index: number, data: SearhStateInterface['categoryData'] }) {
    if (state.categoryData[categoryData.index]) {
      state.categoryData[categoryData.index] = categoryData.data;
    } else {
      state.categoryData.push(categoryData.data);
    }

  },

  deleteCategoryData(state: SearhStateInterface, index: number) {
    state.categoryData.splice(index, 1);
  },

  setLoading(state: SearhStateInterface, loading: SearhStateInterface['loading']) {
    state.loading = loading;
  }

};



export default mutation;
