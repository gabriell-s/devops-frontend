<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-app-bar app>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/book">Books</RouterLink>
      <RouterLink to="/server">Servers</RouterLink>
    </v-app-bar>
    <v-main>
      <v-container>
        <rounter-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import BookView from '@/views/BookView.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
</style>
