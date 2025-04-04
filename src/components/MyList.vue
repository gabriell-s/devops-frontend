<template>
    <div>
        <h1>My List</h1>
        <ul>
        <li v-for="item in items" :key="item.id">
          Book: {{ item.book }} isnb: {{ item.isnb }} publisherDate: {{ item.publisherDate }}
        </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
defineProps<{
  items: Array<{
    id: number;
    book: string;
    isnb: number;
    publisherDate: Date;
  }>;
}>()
</script>
