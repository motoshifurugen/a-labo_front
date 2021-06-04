<template>
  <v-app>
    <v-app-bar color="primary" dark app>
      <v-toolbar-title>らしさ探求LABO</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <Login />
    </v-content>
  </v-app>
</template>

<script>
import Login from './components/Login.vue'

export default {
  components: {
    Login
  }
};
</script>
