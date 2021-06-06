<template>
  <div class="member">
    <section class="home-member">
      <v-container fluid class="home-member__content">
        <v-item-group multiple>
          <v-row>
            <v-col class="home-member__content-text tile">
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
                height="250"
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
                            @click="RadarChart(person.score)"
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
                                :src="person.img"
                              >
                                <v-card-title class="card-title">{{ person.name }}</v-card-title>
                              </v-img>
                              <v-card-subtitle class="pb-0">
                                大事にしている価値観
                              </v-card-subtitle>
                              <v-card-text class="values">
                                <v-btn
                                  v-for="value in person.values"
                                  :key="value.id"
                                  class="value indigo--text"
                                  outlined
                                  rounded
                                >
                                  <b>{{ value.name }}</b>
                                </v-btn>
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
                              <div class="chart">
                                <radar-chart :chartData="chartData" :options="options"></radar-chart>
                              </div>
                              <div class="seet-link">
                                <a href="https://1drv.ms/x/s!Anb9QOKZYucubhft7iWaLEctTxY" target="_blank">タイプ別診断シート</a>
                              </div>
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
    <v-btn absolute bottom right x-large class="primary--text" to="/top"><b>≪ 探求室TOP</b></v-btn>
  </div>
</template>

<style lang="scss" scoped>
.member {
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
  pointer-events: none;
}
.personCard {
  margin: 0.3em;
  @media screen and (max-width: 960px) {
    margin: 1em;
  }
}
.chart {
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    max-width: 70%;
  }
}
.seet-link {
  text-align: center;
  margin: 1em;
}
.values {
  margin: 1em 0;
}
.value {
  pointer-events: none;
  margin: 0.3em;
}
.card-title {
  font-size: 1.8em;
}
</style>

<script>
import RadarChart from '../components/RadarChart.vue'

export default {
  components: {
    RadarChart,
  },
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
                {id: 1, name: '個性'},
                {id: 2, name: '多様性'},
                {id: 3, name: '遊び心'},
                {id: 4, name: '友情'},
                {id: 5, name: '挑戦'},
              ],
              score: [
               9, 10, 8, 7
              ],
              img: "/img/sample01.jpeg",
            },
            {
              id: 2,
              name: '俺',
              type: 'プロモーター',
              values: [
                {id: 6, name: 'ビジョン'},
                {id: 7, name: '利他的'},
                {id: 8, name: '遊び心'},
                {id: 9, name: 'やり抜く力'},
                {id: 10, name: '行動'},
              ],
              score: [
                8, 11, 8, 4
              ],
              img: "/img/sample_furugen.jpg",
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
                {id: 11, name: '忍耐力'},
                {id: 12, name: '思考力'},
                {id: 13, name: '全力'},
                {id: 14, name: '貢献'},
                {id: 15, name: '信頼'},
              ],
              score: [
                8, 5, 6, 9
              ],
              img: "/img/sample01.jpeg",
            },
            {
              id: 4,
              name: 'しょうま',
              type: 'アナライザー',
              values: [
                {id: 16, name: 'ビジョン'},
                {id: 17, name: '個性'},
                {id: 18, name: '遊び心'},
                {id: 19, name: '行動'},
                {id: 20, name: '支援'},
              ],
              score: [
                8, 6, 8, 10
              ],
              img: "/img/sample01.jpeg",
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
                {id: 21, name: '感謝'},
                {id: 22, name: '協力'},
                {id: 23, name: '忍耐力'},
                {id: 24, name: '幸せ'},
                {id: 25, name: '家族'},
              ],
              score: [
                5, 6, 7, 6
              ],
              img: "/img/sample01.jpeg",
            },
            {
              id: 6,
              name: 'とも',
              type: 'サポーター',
              values: [
                {id: 26, name: '貢献'},
                {id: 27, name: '幸せ'},
                {id: 28, name: '行動'},
                {id: 29, name: '優しさ'},
              ],
              score: [
                4, 4, 12, 6
              ],
              img: "/img/sample01.jpeg",
            },
            {
              id: 7,
              name: 'なつこ',
              type: 'サポーター',
              values: [
                {id: 31, name: '力を与える'},
                {id: 32, name: '貢献'},
                {id: 33, name: '励ます'},
                {id: 34, name: '発見'},
                {id: 35, name: '勇気'},
              ],
              score: [
                4, 7, 8, 5
              ],
              img: "/img/sample01.jpeg",
            },
          ]
        }
      ],
      chartData: null,
      options: {
        scale: {
          pointLabels: {
            fontSize: 15,//レーダーチャートのラベルを変更
          },
        },
        title: {
          display: false,
        },
      }
    }
  },
  created () {
    const score = []
    this.RadarChart(score)
  },
  methods: {
    RadarChart (score) {
      this.chartData = {
        labels: ["Controller", "Promoter", "Supporter","Analyzer"],
        datasets: [
          {
            backgroundColor: 'rgb(255,50,101,0.6)',
            borderWidth: 2,
            label: '2021.5',
            data: score
          }
        ],
      }
    }
  }
};
</script>