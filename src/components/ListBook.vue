<template>
  <v-card class="mx-auto" max-width="500">
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.id"
        :title="item.book"
        :subtitle="`Edition: ${item.edition} | ISBN: ${item.isnb} | Published Date: ${item.publisherDate}`"
        v-bind="item.props"
      >
        <template #prepend>
          <v-icon v-if="item.props?.prependIcon">{{ item.props.prependIcon }}</v-icon>
        </template>
        <template #append>
          <v-icon v-if="item.props?.appendIcon">{{ item.props.appendIcon }}</v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{
    id: number;
    book: string;
    edition: string;
    isnb: string;
    publisherDate: number;
    props?: {
      prependIcon?: string;
      appendIcon?: string;
      color?: string;
    };
  }>
}>()
</script>

