<template>
  <div class="hero">
    <section class="home-hero">
      <v-container fluid class="home-hero__content">
        <v-item-group multiple>
          <v-row>
            <v-col class="home-hero__content-text tile">
            <p>らしさ探求LABO 第5回 研究生</p>
          </v-col>
        </v-row>
        <v-row class="type-row">
          <v-col
            cols="12"
            md="6"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'pink accent-2' : 'rgb(255,255,204, 0.6)'"
                class="d-flex align-center type controller"
                dark
                height="300"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div
                    v-if="active"
                    class="text-h2 flex-grow-1 text-center"
                  >
                    <p>Controller</p>
                    <v-div v-for="person in controller" :key="person.id">
                      <v-btn x-large class="person indigo darken-3" to="/top">{{ person["name"] }}</v-btn>
                    </v-div>
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'amber' : 'rgb(255,255,204, 0.6)'"
                class="d-flex align-center type promoter"
                dark
                height="300"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div
                    v-if="active"
                    class="text-h2 flex-grow-1 text-center"
                  >
                    <p>Promoter</p>
                    <v-div v-for="person in promoter" :key="person.id">
                      <v-btn x-large class="person indigo darken-3" to="/top">{{ person["name"] }}</v-btn>
                    </v-div>
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'light-blue' : 'rgb(255,255,204, 0.6)'"
                class="d-flex align-center type analyzer"
                dark
                height="300"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div
                    v-if="active"
                    class="text-h2 flex-grow-1 text-center"
                  >
                    <p>Analyzer</p>
                    <v-div v-for="person in analyzer" :key="person.id">
                      <v-btn x-large class="person indigo darken-3" to="/top">{{ person["name"] }}</v-btn>
                    </v-div>
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'green accent-3' : 'rgb(255,255,204, 0.6)'"
                class="d-flex align-center type supporter"
                dark
                height="300"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div
                    v-if="active"
                    class="text-h2 flex-grow-1 text-center"
                  >
                    <p>Supporter</p>
                    <v-div v-for="person in supporter" :key="person.id">
                      <v-btn x-large class="person indigo darken-3" to="/top">{{ person["name"] }}</v-btn>
                    </v-div>
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
        </v-item-group>
      </v-container>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.hero {
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
.type-row {
  padding: 0 10em;
  @media screen and (max-width: 1350px) {
    padding: 0;
  }
}
.type {
  margin: 1em 2em;
  @media screen and (max-width: 960px) {
    padding: 0;
  }
}
.person {
  margin: 1em;
}
</style>

<script>
export default {
  data(){
    return{
      controller: [],
      promoter: [
        { id: 1, name: 'ののまゆ', type: 'プロモーター'},
        { id: 2, name: '俺', type: 'プロモーター'},
      ],
      analyzer: [
        { id: 3, name: 'ひめか', type: 'アナライザー'},
        { id: 4, name: 'しょうま', type: 'アナライザー'},
      ],
      supporter: [
        { id: 5, name: 'あみ', type: 'サポーター'},
        { id: 6, name: 'とも', type: 'サポーター'},
        { id: 7, name: 'なつこ', type: 'サポーター'},
      ]
    }
  },
};
</script>