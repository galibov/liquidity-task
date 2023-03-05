
import { QTableProps } from 'quasar'
import { CATEGORY_NAMES } from './api.config'
interface ColumnTypesInterface {
  [CATEGORY_NAMES.people]: QTableProps['columns'],
  [CATEGORY_NAMES.films]: QTableProps['columns'],
  [CATEGORY_NAMES.planets]: QTableProps['columns'],
  [CATEGORY_NAMES.species]: QTableProps['columns'],
  [CATEGORY_NAMES.starships]: QTableProps['columns'],
  [CATEGORY_NAMES.vehicles]: QTableProps['columns'],
}

export const COLUMN_TYPES: ColumnTypesInterface = {
  [CATEGORY_NAMES.people]: [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'center',
      field: 'name',
      sortable: true
    },
    {
      name: 'gender',
      required: true,
      label: 'Gender',
      align: 'center',
      field: 'gender',
    },
    {
      name: 'birth_year',
      required: true,
      sortable: true,
      label: 'Birth year',
      align: 'center',
      field: 'birth_year',
    },

    {
      name: 'height',
      required: true,
      label: 'Height',
      align: 'center',
      field: 'height',
      sortable: true
    },
    {
      name: 'mass',
      required: true,
      label: 'Mass',
      align: 'center',
      field: 'mass',
      sortable: true
    },
    {
      name: 'hair_color',
      required: true,
      label: 'Hair color',
      align: 'center',
      field: 'hair_color',
      sortable: true,
    },
    {
      name: 'eye_color',
      required: true,
      label: 'Eye color',
      align: 'center',
      field: 'eye_color',
      sortable: true,
    },
    {
      name: 'skin_color',
      required: true,
      label: 'Skin color',
      align: 'center',
      field: 'skin_color',
      sortable: true,
    },
    {
      name: 'actions',
      label: 'Actions',
      field: '',
      align: 'center'
    },
  ],
  [CATEGORY_NAMES.films]: [
    {
      name: 'title',
      required: true,
      label: 'Title',
      align: 'center',
      field: 'title',
    },
    {
      name: 'episode_id',
      required: true,
      label: 'Episode ID',
      align: 'center',
      field: 'episode_id',
    },
    {
      name: 'director',
      required: true,
      label: 'Director',
      align: 'center',
      field: 'director',
    },
    {
      name: 'producer',
      required: true,
      label: 'Producer',
      align: 'center',
      field: 'producer',
    },
    {
      name: 'release_date',
      required: true,
      label: 'Release date',
      align: 'center',
      field: 'release_date',
    },
    {
      name: 'actions',
      label: 'Actions',
      field: '',
      align: 'center'
    },

  ],

  [CATEGORY_NAMES.planets]: [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'center',
      field: 'name',
    },
    {
      name: 'rotation_period',
      required: true,
      label: 'Rotation period',
      align: 'center',
      field: 'rotation_period',
    },
    {
      name: 'orbital_period',
      required: true,
      label: 'Orbital period',
      align: 'center',
      field: 'orbital_period',
    },
    {
      name: 'actions',
      label: 'Actions',
      field: '',
      align: 'center'
    },],

  [CATEGORY_NAMES.species]: [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'center',
      field: 'name',
    },
    {
      name: 'classification',
      required: true,
      label: 'Classification',
      align: 'center',
      field: 'classification',
    },
    {
      name: 'designation',
      required: true,
      label: 'Designation',
      align: 'center',
      field: 'designation',
    },
    {
      name: 'average_height',
      required: true,
      label: 'Average height',
      align: 'center',
      field: 'average_height',
    },
    {
      name: 'actions',
      label: 'Actions',
      field: '',
      align: 'center'
    },
  ],

  [CATEGORY_NAMES.starships]: [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'center',
      field: 'name',
    },
    {
      name: 'model',
      required: true,
      label: 'Model',
      align: 'center',
      field: 'model',
    },
    {
      name: 'manufacturer',
      required: true,
      label: 'Manufacturer',
      align: 'center',
      field: 'manufacturer',
    },
    {
      name: 'cost_in_credits',
      required: true,
      label: 'Cost in credits',
      align: 'center',
      field: 'cost_in_credits',
    },
    {
      name: 'actions',
      label: 'Actions',
      field: '',
      align: 'center'
    },
  ],

  [CATEGORY_NAMES.vehicles]: [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'center',
      field: 'name',
    },
    {
      name: 'model',
      required: true,
      label: 'Model',
      align: 'center',
      field: 'model',
    },
    {
      name: 'manufacturer',
      required: true,
      label: 'Manufacturer',
      align: 'center',
      field: 'manufacturer',
    },
    {
      name: 'cost_in_credits',
      required: true,
      label: 'Cost in credits',
      align: 'center',
      field: 'cost_in_credits',
    },
    {
      name: 'actions',
      label: 'Actions',
      field: '',
      align: 'center'
    },
  ],

}
