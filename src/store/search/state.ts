
export interface SearhStateInterface {
  searchInput: string
  searchResult: [],
  categoryData: unknown[],
  allCategoryItems: number,
  loading: boolean
}


function state(): SearhStateInterface {
  return {
    searchInput: '',
    searchResult: [],
    categoryData: [],
    allCategoryItems: 0,
    loading: false
  }
}

export default state
