<!-- eslint-disable vue/block-lang -->
<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="book.value.value"
      :counter="255"
      :error-messages="book.errorMessage.value"
      label="Book"
    ></v-text-field>

    <v-text-field
      v-model="description.value.value"
      :error-messages="description.errorMessage.value"
      label="Description"
    ></v-text-field>

    <v-text-field
      v-model="edition.value.value"
      :counter="100"
      :error-messages="edition.errorMessage.value"
      label="Edition"
    ></v-text-field>

    <v-text-field
      v-model="isbn.value.value"
      :error-messages="isbn.errorMessage.value"
      :counter="13"
      label="Serial Number"
    ></v-text-field>

    <v-text-field
      v-model="publisherDate.value.value"
      :error-messages="publisherDate.errorMessage.value"
      :counter="13"
      label="Publisher Date"
    ></v-text-field>

    <v-btn class="me-4" type="submit" @click="$emit('send')"> Register </v-btn>

    <v-btn @click="handleReset, $emit('send')"> cancel </v-btn>
  </form>
</template>

<script setup>
// import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'


const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    book(value) {
      if (value?.length) return true

      return 'Name needs to be at least 1 character.'
    },
    edition(value) {
      if (value?.length) return true

      return 'Edition needs to be at least 1 character.'
    },
    isbn(value) {
      if (value?.length) return true

      return 'Serial Number needs to be at least 1 character.'
    },
    publisherDate(value) {
      if (value?.length) return true
    },
  },
})
const book = useField('book')
const description = useField('description')
const edition = useField('edition')
const isbn = useField('isbn')
const publisherDate = useField('publisherDate')


const emit = defineEmits(['submit'])

const submit = handleSubmit((values) => {
  JSON.stringify(values, null, 2)
  //alert(JSON.stringify(values, null, 2))
  emit('submit', values)
})
</script>

