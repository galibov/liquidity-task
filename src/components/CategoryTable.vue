<template>
  <div class="q-pa-md col-10">
    <q-btn
      @click="getData('prev')"
      class="q-mr-sm"
      color="primary"
      :disable="page === 1 || $store.state.search.loading"
      size="sm"
      icon="arrow_back_ios"
    />
    <q-btn
      @click="getData('next')"
      color="primary"
      :disable="
        page > $store.state.search.allCategoryItems / 10 ||
        $store.state.search.loading
      "
      size="sm"
      icon="arrow_forward_ios"
    />
    <q-table
      class="q-mt-lg"
      :title="`${categoryName}`"
      :rows="$store.state.search.categoryData"
      :columns="columnsFields"
      :loading="$store.state.search.loading"
      row-key="name"
      hide-pagination
      :pagination="pagination"
      max-row-selection="1"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            @click="editItem(props)"
            dense
            round
            flat
            color="grey"
            icon="edit"
          ></q-btn>
          <q-btn
            @click="deleteItem(props.rowIndex)"
            dense
            round
            flat
            color="grey"
            icon="delete"
          ></q-btn>
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="showDialog">
      <CategoryForm :values="formFields" :fields="columnsFields" />
    </q-dialog>

    <q-btn
      @click="addItem"
      class="q-mt-md"
      color="primary"
      label="Add Item"
      rounded
    ></q-btn>
  </div>
</template>

<script setup lang="ts">
import { COLUMN_TYPES } from 'src/config/columns';
import { useStore } from 'src/store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import CategoryForm from 'src/components/CategoryForm.vue';
const $store = useStore();
const router = useRouter();
const showDialog = ref(false);
const categoryName = router.currentRoute.value.params.category;
const pagination = ref({
  rowsPerPage: 12,
});
const page = ref(1);
const columnsFields = COLUMN_TYPES[categoryName as keyof typeof COLUMN_TYPES];
const formFields = ref();
const editItem = (row: unknown) => {
  formFields.value = row;
  showDialog.value = true;
};

const addItem = () => {
  formFields.value = {};
  showDialog.value = true;
};

const getData = (to: string) => {
  to === 'prev' ? (page.value -= 1) : (page.value += 1);
  $store.dispatch('search/getCategory', {
    category: categoryName,
    pageNum: page.value,
  });
};

const deleteItem = (index: number) => {
  $store.dispatch('search/deleteCategoryData', index);
};
</script>
