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
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              x-large
              class="ma-2"
              color="primary"
              v-bind="attrs"
              v-on="on"
            >
              <b>ログイン</b>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline primary white--text"><b>研究者ログイン</b></v-card-title>
            <v-card-text>
              <v-form>
                <b v-if="error != ''">{{ error }}</b>
                <v-text-field
                  color="primary"
                  prepend-icon="mdi-account-circle"
                  v-model="name"
                  label="名前"
                />
                <v-text-field
                  color="primary"
                  prepend-icon="mdi-account-circle"
                  v-model="email"
                  label="メールアドレス"
                />
                <v-text-field
                  color="primary"
                  prepend-icon="mdi-account-circle"
                  v-model="password"
                  label="パスワード"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions position:relative>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="
                  logIn();
                "
              >
                ログイン
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      dialog: false,
      error: "",
    };
  },
  methods: {
    logIn: function() {
      this.$router.push('/top');
    },
  },
};
</script>