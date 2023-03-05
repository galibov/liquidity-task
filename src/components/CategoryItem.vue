<template>
  <q-item v-if="$store.state.search.loading">
    <q-item-section>
      <q-item-label>
        <q-skeleton type="rect" />
      </q-item-label>
      <q-item-label>
        <q-skeleton type="text" />
      </q-item-label>
    </q-item-section>
    <q-separator spaced />
  </q-item>
  <q-item v-else>
    <q-item-section>
      <q-item-label class="label">
        {{ category.name }}
      </q-item-label>
      <q-item-label
        class="text"
        :key="`${index}-item`"
        v-for="(data, index) in category.data"
      >
        <div
          v-html="
            highlight(
              data?.name || data?.title,
              $store.state.search.searchInput
            )
          "
        />
      </q-item-label>
    </q-item-section>
    <q-separator spaced />

    <q-btn
      :to="{ name: 'category', params: { category: category.name } }"
      label="View All"
      flat
    />
  </q-item>
</template>

<script setup>
import { useStore } from 'src/store';
defineProps(['category']);
const $store = useStore();

const highlight = (text, search) => {
  try {
    const regex = new RegExp(search, 'gi');
    return text.replace(
      regex,
      (match) => `<span class="bg-warning">${match}</span>`
    );
  } catch (e) {
    return text;
  }
};
</script>
<style scoped lang="sass">
.label
  font-size: 1.2rem
  font-weight: bold
  text-transform: capitalize
  margin-bottom: 0.5rem
.text
  font-size: 1rem
</style>
