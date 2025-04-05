<template>
  <div>teste</div>
  <main>
    <ButtonDialog @submitRegister="push_my_list"></ButtonDialog>
    <MyButton @someEvent="push_my_list" />
    <MyList :items="my_list" />

  </main>
</template>

<script setup lang="ts">
import MyButton from '../components/MyButton.vue'
import MyList from '../components/MyList.vue'
import ButtonDialog from '@/components/ButtonDialog.vue'

import { ref } from 'vue'

const my_list = ref<{ id: number; book: string; edition: string; isnb: number; publisherDate: number }[]>([])
const a = ref(0)
const valuesS = ref('')

function push_my_list() {
  a.value += 1

  my_list.value.push({
    id: a.value,
    book: books,
    isnb: '111',
    publisherDate: '1111'

  })
  console.log('Event triggered!')
  console.log('my_list', my_list.value)
}
</script>
