<template>
  <div class="q-pa-md search">
    <div class="q-gutter-md">
      <q-input v-model="search" debounce="400" outlined placeholder="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <CategoryList />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useStore } from 'src/store';
import CategoryList from './CategoryList.vue';
const $store = useStore();
const search = ref('');
watch(search, (val) => {
  $store.dispatch('search/getSearchResult', val);
});
</script>
<style scoped lang="sass">
.search
  width: 70%
</style>
