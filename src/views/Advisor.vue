<template>
  <div class="advisor">
    <section class="home-member">
      <v-container fluid class="home-member__content">
        <v-row justify="space-between">
          <v-col class="home-member__content-text tile">
            <p>らしさ探求LABO アドバイザー</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="4"
            v-for="hero in advisor"
            :key="hero.id"
            class="home-member__content-text hero-col"
          >
            <v-tooltip top max-width="400px" color="rgb(255,127,0, 0.9)">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  height="300px"
                >
                <v-img
                  v-bind="attrs"
                  v-on="on"
                  class="white--text align-end"
                  width="250px"
                  height="250px"
                  :src="hero.img"
                >
                  <v-card-title class="card-title">{{ hero.name }}</v-card-title>
                </v-img>
                </v-btn>
              </template>
              <span class="comment">{{ hero.comment }}</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
      <v-btn absolute bottom right x-large class="primary--text" to="/top"><b>≪ 探求室TOP</b></v-btn>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.advisor {
  height: 100%;
}
.home-member {
  height: 100%;
}
.home-member__content {
  background: url("../assets/images/game03.png");
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
.hero-col {
  margin-top: 10em;
  @media screen and (max-width: 960px) {
    margin-top: 5em;
  }
}
.card-title {
  font-size: 1.5em;
  border: solid 1px white;
  border-radius: 1.25rem;
  background-color: rgb(0,0,0,0.5);
}
.v-tooltip--top {
  width: 20px !important;
}
.comment {
  font-size: 1.5em;
  margin: 0.5em;
}
</style>

<script>
  export default {
    data () {
      return {
        show: false,
        advisor: [
          {
            id: 1,
            name: 'すーさん',
            comment: 'Not everything that is faced can be changed, but nothing can be changed until it is faced.',
            img: '/img/charactar05.webp'
          },
          {
            id: 2,
            name: 'もえみさん',
            comment: 'Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.',
            img: '/img/charactar04.gif'
          },
          {
            id: 3,
            name: 'ゆうきさん',
            comment: 'The only way to make sense out of change is to plunge into it, move with it, and join the dance.',
            img: '/img/charactar01.gif'
          }
        ]
      }
    },
  }
</script>