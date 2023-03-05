<template>
  <q-card style="width: 600px; max-width: 60vw">
    <q-card-section>
      <q-btn
        round
        flat
        dense
        icon="close"
        class="float-right"
        color="grey-8"
        v-close-popup
      ></q-btn>
      <div class="text-h6">Item</div>
    </q-card-section>
    <q-separator inset></q-separator>
    <q-card-section class="q-pt-none">
      <q-form class="q-gutter-md">
        <q-list>
          <q-item :key="`${field}-input`" v-for="field in props.fields">
            <q-item-section v-if="field.field != ''">
              <q-item-label class="q-pb-xs">{{ field.label }}</q-item-label>
              <q-input v-model="inputFields[field.name]" outlined dense />
            </q-item-section>
          </q-item>
        </q-list>
      </q-form>
    </q-card-section>
    <q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="warning" dense v-close-popup></q-btn>
        <q-btn
          flat
          label="Submit"
          color="primary"
          dense
          v-close-popup
          @click="submitData()"
        ></q-btn>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { useStore } from 'src/store';
import { ref } from 'vue';
const $store = useStore();
const props = defineProps(['fields', 'values']);

const inputFields = ref(
  props.fields.reduce(
    (acc: { [x: string]: unknown }, field: { name: string | number }) => {
      acc[field.name] = '';
      if (props.values.row) {
        acc[field.name] = props.values.row[field.name];
      }
      return acc;
    },
    {}
  )
);
const submitData = () => {
  $store.dispatch('search/modifyCategoryData', {
    index: props.values.rowIndex,
    data: inputFields.value,
  });
};
</script>
