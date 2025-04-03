<template>
    <div>
        <h1>My List</h1>
        <ul>
        <li v-for="item in items" :key="item.id">
            {{ item.name }}
        </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
defineProps<{
  items: Array<{
    id: number;
    name: string;
  }>;
}>()
</script>