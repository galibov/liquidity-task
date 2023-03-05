

export enum CATEGORY_NAMES {
  films = 'films',
  people = 'people',
  planets = 'planets',
  species = 'species',
  starships = 'starships',
  vehicles = 'vehicles'
}

export const CATEGORIES = {
  films: {
    name: CATEGORY_NAMES.films,
    url: '/films/',
  },
  people: {
    name: CATEGORY_NAMES.people,
    url: '/people/',
  },
  planets: {
    name: CATEGORY_NAMES.planets,
    url: '/planets/',
  },
  species: {
    name: CATEGORY_NAMES.species,
    url: '/species/',
  },
  starships: {
    name: CATEGORY_NAMES.starships,
    url: '/starships/',
  },
  vehicles: {
    name: CATEGORY_NAMES.vehicles,
    url: '/vehicles/',
  },
}