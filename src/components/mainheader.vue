<template>
  <div>
    <v-app-bar color="#4848A8" class="white--text">
      <h1>Ars Quiz System</h1>
      <v-spacer></v-spacer>
      <router-link to="/Signup">
        <v-btn 
        elevation="1"
        outlined
        color="white"
        class="mx-2">
          Sign up
        </v-btn></router-link
      >
      <router-link to="/"
        ><v-btn 
        elevation="1"
        outlined
        color="white"
        class="mx-2">
          Login
        </v-btn></router-link
      >
    </v-app-bar>
  </div>
</template>
