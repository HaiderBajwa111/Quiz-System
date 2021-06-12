<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="white--text text-center"
      color="primary"
      width="100%"
    >
      <v-card-text class="pa-2">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="white--text pa-2">
        {{ new Date().getFullYear() }} — <strong>Ars Quiz</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>
