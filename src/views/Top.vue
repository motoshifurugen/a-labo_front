<template>
  <div class="top">
    <section class="home-member">
      <v-container fluid fill-height class="home-member__content">
        <v-row>
          <v-col class="home-member__content-text tile">
            <p><span class="under">自分らしさ探求室</span></p>
          </v-col>
        </v-row>
        <v-row class="room-row">
          <v-col
            cols="12"
            md="4"
            class="home-member__content-text"
          >
            <v-item>
              <v-card
                color="rgb(229,229,229, 0.8)"
                class="align-center room"
                height="170"
                to="/research"
              >
                <p><v-icon color="black">mdi-feature-search-outline</v-icon> Research</p>
              </v-card>
            </v-item>
          </v-col>
          <v-col
            cols="12"
            md="4"
            class="home-member__content-text"
          >
            <v-item>
              <v-card
                color="rgb(229,229,229, 0.8)"
                class="align-center room"
                height="170"
                to="/member"
              >
                <p><v-icon color="black">mdi-account-star-outline</v-icon> Member</p>
              </v-card>
            </v-item>
          </v-col>
          <v-col
            cols="12"
            md="4"
            class="home-member__content-text"
          >
            <v-item>
              <v-card
                color="rgb(229,229,229, 0.8)"
                class="align-center room"
                height="170"
                to="/advisor"
              >
                <p><v-icon color="black">mdi-head-heart-outline</v-icon> Advisor</p>
              </v-card>
            </v-item>
          </v-col>
          <v-col class="home-member__content-text message">
            <p>Welcome! Make Yourself At Home.</p>
            <p>Click <v-btn large class="personType primary--text alabo-btn" href="http://www.central-engineering.jp/a-labo/" target="_blank" rounded><v-img max-width="35px" src="../assets/images/a-labo.jpeg"></v-img>A-LABO</v-btn> For More Info!</p>
          </v-col>
        </v-row>
      </v-container>
      <v-btn absolute bottom right x-large class="primary--text" to="/"><b>退室する</b></v-btn>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.top {
  height: 100%;
}
.home-member {
  height: 100%;
}
.home-member__content {
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
  margin: 0 2.5em;
  padding: 2em;
  @media screen and (max-width: 1350px) {
    margin: 0 0.5em;
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
.tile {
  font-size: 3.5em;
  padding: 0;
  margin-bottom: -20px;
}
.tile p:first-letter {
  font-size: 1.5em;
  color: #42A5F5;
}
.under {
  border-bottom: solid 10px white;
}
.alabo-btn {
  font-size: 0.7em;
}
</style>