<template>
  <v-card
    class="mx-auto"
    max-width="300"
  >
        <ul>
        <li v-for="item in items" :key="item.id">
          Book: {{ item.book }} isnb: {{ item.isnb }} publisherDate: {{ item.publisherDate }}
        </li>
        </ul>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{
    id: number;
    book: string;
    isnb: number;
    publisherDate: number;
  }>;
}>()

  /* const items = [
    {
      title: 'Item #1',
      value: 1,
      props: {
        prependIcon: 'mdi-home',
      },
    },
    {
      title: 'Item #2',
      value: 2,
      props: {
        appendIcon: 'mdi-close',
      },
    },
    {
      title: 'Item #3',
      value: 3,
      props: {
        color: 'primary',
      },
    },
  ]*/
</script>
