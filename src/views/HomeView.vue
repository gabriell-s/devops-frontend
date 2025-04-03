<template>
  <main>
    <MyButton @someEvent="push_my_list" />
    <MyList :items="my_list" />
    <MyButton @someEvent="push_my_list" />
    <MyButton @someEvent="push_my_list" />
    <MyButton @someEvent="push_my_list" />
    <MyButton @someEvent="push_my_list" />
    <MyButton @someEvent="push_my_list" />
    <MyButton @someEvent="push_my_list" />
    <MyList :items="my_list" />
    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import MyButton from '../components/MyButton.vue'
import MyList from '../components/MyList.vue'

import { ref } from 'vue'

const my_list = ref<{ id: number; name: string }[]>([])
const a = ref(0)

function push_my_list() {
  a.value += 1
  my_list.value.push({
    id: a.value,
    name: `Item ${a.value}`
  })
  console.log('Event triggered!')
  console.log('my_list', my_list.value)
}
</script>
