<template>
  <div class="top">
    <section class="home-hero">
      <v-container fluid fill-height class="home-hero__content">
        <v-row class="room-row">
          <v-col
            cols="12"
            md="4"
            class="home-hero__content-text"
          >
            <v-item>
              <v-card
                color="rgb(229,229,229, 0.8)"
                class="align-center room"
                height="150"
                to="/research"
              >
                <p><v-icon color="black">mdi-feature-search-outline</v-icon> Research</p>
              </v-card>
            </v-item>
          </v-col>
          <v-col
            cols="12"
            md="4"
            class="home-hero__content-text"
          >
            <v-item>
              <v-card
                color="rgb(229,229,229, 0.8)"
                class="align-center room"
                height="150"
                to="/hero"
              >
                <p><v-icon color="black">mdi-account-star-outline</v-icon> Hero</p>
              </v-card>
            </v-item>
          </v-col>
          <v-col
            cols="12"
            md="4"
            class="home-hero__content-text"
          >
            <v-item>
              <v-card
                color="rgb(229,229,229, 0.8)"
                class="align-center room"
                height="150"
                to="/advisor"
              >
                <p><v-icon color="black">mdi-head-heart-outline</v-icon> Advisor</p>
              </v-card>
            </v-item>
          </v-col>
          <v-col class="home-hero__content-text message">
            <p>Welcome to A-LABO.</p>
            <p>Make yourself at home.</p>
          </v-col>
        </v-row>
      </v-container>
      <v-btn absolute bottom right x-large class="primary--text" to="/"><b>退出する</b></v-btn>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.top {
  height: 100%;
}
.home-hero {
  height: 100%;
}
.home-hero__content {
  background: url("../assets/images/game.gif");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;

  &-text {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }
}
.room {
  margin: 0.5em 2.5em;
  padding: 2em;
  @media screen and (max-width: 1350px) {
    margin: 0.5em;
  }
}
.room-row {
  padding: 0 1em;
  @media screen and (max-width: 960px) {
    padding: 0;
  }
}
.message {
  margin-top: 2em;
  font-size: 32px;
  @media screen and (max-width: 960px) {
    margin-top: 0;
    font-size: 28px;
  }
}
</style>