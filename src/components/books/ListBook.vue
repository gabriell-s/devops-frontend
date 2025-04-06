<template>
  <v-row dense>
    <v-col v-for="item in items" :key="item.id" cols="12" sm="6" md="4" lg="3">
      <v-card
        :color="item.props?.color || 'surface'"
        class="elevation-3 rounded-xl d-flex flex-column h-100"
      >
        <!-- Imagem ou skeleton -->
        <v-skeleton-loader type="image" height="160px" class="rounded-t-xl" />

        <!-- Título -->
        <v-card-title class="py-2 d-flex align-center">
          <v-icon v-if="item.props?.prependIcon" class="mr-2" color="primary">
            {{ item.props.prependIcon }}
          </v-icon>
          <span class="text-subtitle-1 font-weight-medium">
            {{ item.name }}
          </span>
          <v-spacer />
          <v-icon v-if="item.props?.appendIcon" class="ml-2" color="grey-darken-1">
            {{ item.props.appendIcon }}
          </v-icon>
        </v-card-title>

        <!-- Informações -->
        <v-card-subtitle class="py-1 text-body-2 text-grey-darken-1">
          <v-icon icon="mdi-book-open-outline" class="mr-1" size="18" color="indigo" />
          Edition: {{ item.edition }}<br />
          <v-icon icon="mdi-barcode" class="mr-1" size="18" color="teal" />
          ISBN: {{ item.isbn }}
        </v-card-subtitle>

        <!-- Publicação -->
        <v-card-text class="pt-0 text-body-2 text-grey-darken-1">
          <v-icon icon="mdi-calendar" class="mr-1" size="18" color="deep-orange" />
          Published: {{ item.publisherDate }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{
    id: number
    name: string
    edition: string
    isbn: string
    publisherDate: number
    props?: {
      prependIcon?: string
      appendIcon?: string
      color?: string
    }
  }>
}>()
</script>
