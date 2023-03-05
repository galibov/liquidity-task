<template>
  <q-page class="row justify-center">
    <CategoryTable />
  </q-page>
</template>

<script setup lang="ts">
import CategoryTable from 'src/components/CategoryTable.vue';
import { onMounted } from 'vue';
import { useStore } from 'src/store';
import { useRouter } from 'vue-router';
const $store = useStore();
const router = useRouter();
onMounted(() => {
  $store.dispatch('search/getCategory', {
    category: router.currentRoute.value.params.category,
    pageNum: 1,
  });
});
</script>
