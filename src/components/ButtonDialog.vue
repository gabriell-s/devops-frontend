<template>
  <div class="text-center pa-4">
    <v-btn @click="dialog = true">
      Register
    </v-btn>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card

      >
      <Register type="submitRegister" @submit="dadosRecebidos" @send="dialog = false, $emit('someEvent')"></Register>

      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import Register from '@/models/Register.vue';
  import { emit } from 'process';
  const dialog = ref(false)

  const emitDialog = defineEmits(['submitRegister'])

  const dadosRecebidos = (dados) => {
    //alert('dados recebidos', dados)
    emitDialog('submitRegister', dados)
  }

</script>
