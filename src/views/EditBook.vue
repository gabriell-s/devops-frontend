<template>
    <v-card
      class="mx-auto"
      max-width="375"
    >
        <div class="d-flex flex-column h-100">
          <v-card-title class="d-flex ga-2 px-2">
            <v-btn icon="mdi-chevron-left" variant="text"></v-btn>
            <v-spacer></v-spacer>
            <v-btn icon="mdi-pencil" variant="text"></v-btn>
            <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
          </v-card-title>

          <v-spacer></v-spacer>

          <v-card-title class="pb-6 text-center">
          </v-card-title>
        </div>
      <v-list lines="two">
        <v-list-item>
          <template v-slot:prepend>
            <v-avatar>
              <v-icon color="indigo" icon="mdi-phone"></v-icon>
            </v-avatar>
          </template>

          <v-list-item-title>Title</v-list-item-title>
          <v-list-item-subtitle><!-- {{ item.book }} --></v-list-item-subtitle>

          <template v-slot:append>
            <v-avatar>
              <v-icon icon="mdi-message-text"></v-icon>
            </v-avatar>
          </template>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <template v-slot:prepend>
            <v-avatar></v-avatar>
          </template>

          <v-list-item-title>Description</v-list-item-title>
          <v-list-item-subtitle><!-- {{ item.description }} --></v-list-item-subtitle>

          <template v-slot:append>
            <v-avatar>
              <v-icon icon="mdi-message-text"></v-icon>
            </v-avatar>
          </template>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <template v-slot:prepend>
            <v-avatar>
                <v-icon icon="mdi-message-text"></v-icon>
            </v-avatar>
          </template>

          <v-list-item-title>Edition</v-list-item-title>
          <v-list-item-subtitle><!-- {{ item.edition }} --></v-list-item-subtitle>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <template v-slot:prepend>
            <v-avatar>
                <v-icon icon="mdi-message-text"></v-icon>
            </v-avatar>
          </template>

          <v-list-item-title>ISNB</v-list-item-title>
          <v-list-item-subtitle><!-- {{ item.isnb }} --></v-list-item-subtitle>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <template v-slot:prepend>
            <v-avatar>
                <v-icon color="indigo" icon="mdi-message-text"></v-icon>
            </v-avatar>
          </template>

          <v-list-item-title>Published Date</v-list-item-title>
          <v-list-item-subtitle><!-- {{ item.publisherDate }} --></v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card>
  </template>

<script>

export default {

}
</script>

<style>

</style>
