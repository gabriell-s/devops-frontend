<template>
  <v-app>
    <v-app-bar app>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/book">Books</RouterLink>
      <RouterLink to="/server">Servers</RouterLink>
    </v-app-bar>
    <v-main>
      <div id="container">
        <book-view></book-view>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import BookView from '@/views/BookView.vue';
</script>
<style>
  .container {
    background-color: black;
  }
</style>
