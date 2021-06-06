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
            v-for="type in typeList"
            :key="type.id"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? type.color : 'rgb(255,255,204, 0.6)'"
                class="d-flex align-center type"
                dark
                height="300"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div
                    v-if="active"
                    class="text-h2 flex-grow-1 text-center"
                  >
                    <p>{{ type.typeName }}</p>
                    <span v-for="person in type.member" :key="person.id">
                      <v-dialog
                        width="800"
                        :retain-focus='false'
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            x-large
                            class="person indigo darken-3"
                            v-bind="attrs"
                            v-on="on"
                          >
                            {{ person.name }}
                          </v-btn>
                        </template>
                        <v-card>
                          <v-row class="personCard">
                            <v-col cols="12" md="6">
                              <v-img
                                class="white--text align-end"
                                height="200px"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                              >
                                <v-card-title>{{ person.name }}</v-card-title>
                              </v-img>
                              <v-card-subtitle class="pb-0">
                                大事にしている価値観
                              </v-card-subtitle>
                              <v-card-text class="text--primary">
                                <span v-for="value in person.values" :key="value.id">{{ value.name }} </span>
                              </v-card-text>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-btn
                                class="personType"
                                depressed
                                rounded
                                :color="type.color"
                              >
                                {{ type.typeName }}
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-dialog>
                    </span>
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
  border-radius: 1.5rem !important;
  box-shadow: none !important;
  @media screen and (max-width: 960px) {
    padding: 0;
  }
}
.person {
  margin: 1em;
}
.personType {
  pointer-events: none
}
.personCard {
  margin: 1em;
}
</style>

<script>
export default {
  data(){
    return{
      dialog: false,
      typeList: [
        {
          id: 1,
          typeName: 'Controller',
          color: 'pink accent-2',
          member: [],
        },
        {
          id: 2,
          typeName: 'Promoter',
          color: 'amber',
          member: [
            {
              id: 1,
              name: 'ののまゆ',
              type: 'プロモーター',
              values: [
                {id: 1, name: '個性'}
              ],
              score: [
                8, 11, 8, 4
              ]
            },
            {
              id: 2,
              name: '俺',
              type: 'プロモーター',
              values: [
                {id: 2, name: 'ビジョン'},
                {id: 3, name: '利他的'},
                {id: 4, name: '遊び心'},
                {id: 5, name: 'やり抜く力'},
                {id: 6, name: '行動'},
              ],
              score: [
                8, 11, 8, 4
              ]
            },
          ]
        },
        {
          id: 3,
          typeName: 'Analyzer',
          color: 'light-blue',
          member: [
            {
              id: 3,
              name: 'ひめか',
              type: 'アナライザー',
              values: [
                {id: 1, name: '個性'}
              ],
              score: [
                8, 11, 8, 4
              ]
            },
            {
              id: 4,
              name: 'しょうま',
              type: 'アナライザー',
              values: [
                {id: 1, name: '個性'}
              ],
              score: [
                8, 11, 8, 4
              ]
            },
          ]
        },
        {
          id: 4,
          typeName: 'Supporter',
          color: 'green accent-3',
          member: [
            {
              id: 5,
              name: 'あみ',
              type: 'サポーター',
              values: [
                {id: 1, name: '個性'}
              ],
              score: [
                8, 11, 8, 4
              ]
            },
            {
              id: 6,
              name: 'とも',
              type: 'サポーター',
              values: [
                {id: 1, name: '個性'}
              ],
              score: [
                8, 11, 8, 4
              ]
            },
            {
              id: 7,
              name: 'なつこ',
              type: 'サポーター',
              values: [
                {id: 1, name: '個性'}
              ],
              score: [
                8, 11, 8, 4
              ]
            },
          ]
        }
      ]
    }
  },
};
</script>