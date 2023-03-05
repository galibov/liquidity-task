<template>
  <div v-if="$store.state.search.searchInput">
    <q-list bordered padding>
      <div
        v-for="(category, index) in $store.state.search.searchResult"
        :key="`${index}-category`"
      >
        <div v-if="category.data.length > 0">
          <CategoryItem :category="category" />
          <q-separator
            v-if="index < $store.state.search.searchResult.length - 1"
            spaced
          />
        </div>
      </div>
    </q-list>
  </div>
</template>
<script setup>
import { useStore } from 'src/store';
import CategoryItem from './CategoryItem.vue';
const $store = useStore();
</script>

<style scoped lang="sass"></style>
