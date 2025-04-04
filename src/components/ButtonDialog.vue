<template>
  <div class="text-center pa-4">
    <v-btn @click="dialog = true">
      Open Dialog
    </v-btn>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card

      >
      <Register @send="dialog = false, $emit('someEvent')"></Register>

      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import Register from '@/models/Register.vue';
  const dialog = ref(false)

</script>
