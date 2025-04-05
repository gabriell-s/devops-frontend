<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="localModel.name"
            :counter="255"
            :error-messages="errors.name"
            label="Name"
          />
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="localModel.description"
            :error-messages="errors.description"
            label="Description"
          />
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="localModel.edition"
            :counter="100"
            :error-messages="errors.edition"
            label="Edition"
          />
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="localModel.isbn"
            :error-messages="errors.isbn"
            :counter="13"
            label="Serial Number"
          />
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="localModel.publisherDate"
            :error-messages="errors.publisherDate"
            label="Publisher Date"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { watch, reactive, toRefs } from 'vue'

const props = defineProps<{
  modelValue: {
    name: string
    description: string
    edition: string
    isbn: string
    publisherDate: string
  }
}>()

const emit = defineEmits(['update:modelValue'])

// Criamos uma cópia reativa local para editar
const localModel = reactive({ ...props.modelValue })

// Emitir sempre que algo mudar
watch(
  () => ({ ...localModel }),
  (val) => {
    emit('update:modelValue', val)
  },
  { deep: true },
)

const errors = reactive({
  name: '',
  description: '',
  edition: '',
  isbn: '',
  publisherDate: '',
})
</script>
