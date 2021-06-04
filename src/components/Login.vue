<template>
  <div class="text-center login-block">
    <v-row
      style="height: 100%;"
      justify="center" align-content="center"
    >
      <v-col cols="3" sm="3" md="3" lg="3"></v-col>
      <v-col cols="4" sm="4" md="4" lg="4">
        <v-img
          src="../assets/images/a-labo.jpeg"
        ></v-img>
        <v-btn
          x-large
          class="ma-2"
          outlined
          color="primary"
        >
          入室する
        </v-btn>
      </v-col>
      <v-col cols="3" sm="3" md="3" lg="3"></v-col>
    </v-row>
  </div>
</template>

<style scoped>
.login-block {
  height: 100%;
}
</style>