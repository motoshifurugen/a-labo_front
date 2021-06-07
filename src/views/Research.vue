<template>
  <div class="research">
    <section class="home-member">
      <v-container fluid class="home-member__content">
        <v-card class="program-card">
          <v-toolbar
            flat
          >
            <v-toolbar-title class="teal--text">スローガン</v-toolbar-title>
          </v-toolbar>
          <v-card flat>
            <v-card-text class="research-slogan teal--text">
              １人１人が自分と向き合うためにお互いが切磋琢磨して助け合っていく。知らない自分を発見して自己理解を深めていく。
            </v-card-text>
            </v-card>
        </v-card>
        <v-card class="program-card">
          <v-toolbar
            color="teal lighten-1"
            dark
            flat
          >
            <v-toolbar-title>プログラム【 全5回：5/13 ~ 6/10 】</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon href="https://1drv.ms/p/s!Anb9QOKZYucucYdN8Auft9cqO3w" target="_blank">
              <v-icon >mdi-file-eye-outline</v-icon>
            </v-btn>
            <template v-slot:extension>
                <v-tabs
                  v-model="tab"
                  align-with-title
                  next-icon="mdi-arrow-right-bold-box-outline"
                  prev-icon="mdi-arrow-left-bold-box-outline"
                >
                  <v-tabs-slider color="amber"></v-tabs-slider>
                  <v-tab
                    v-for="res in research"
                    :key="res.id"
                    class="tab-text"
                  >
                    {{ res.title }}
                  </v-tab>
                </v-tabs>
            </template>
          </v-toolbar>
          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="res in research"
              :key="res.id"
            >
              <v-card flat>
                <v-card-text v-text="res.description" class="research-text black--text"></v-card-text>
              </v-card>
              <v-card flat>
                <v-row dense>
                 <v-col
                  col="12"
                  md="6"
                  v-for="img in res.image"
                  :key="img.id"
                 >
                  <v-img
                    class="reserch-img"
                    :src="img.src"
                  >
                  </v-img>
                 </v-col>
                </v-row>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-container>
    </section>
    <v-btn absolute bottom right x-large class="primary--text" to="/top"><b>≪ 探求室TOP</b></v-btn>
  </div>
</template>

<style lang="scss" scoped>
.research {
  height: 100%;
}
.home-member {
  height: 100%;
}
.home-member__content {
  background: url("../assets/images/game05.gif");
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
.type {
  @media screen and (max-width: 960px) {
    padding: 0;
  }
}
.tab-text {
  font-size: 1.1em;
}
.research-text {
  font-size: 1.25em;
}
.reserch-img {
  margin: 1.5em;
}
.program-card {
  margin: 1em 7em;
  @media screen and (max-width: 960px) {
    margin: 1em;
  }
}
.research-slogan {
  text-align: center;
  font-size: 1.5em;
  padding-bottom: 2em;
  font-weight: bold;
}
</style>


<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'web', 'shopping', 'videos', 'images', 'news','1', '2', '3'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        research: [
          {
            id: 1,
            title: '「私」の定義',
            description: ' 「私は〇〇です。」という言葉を書き並べ、出てきたキーワードをポジティブとネガティブで分類した。今の自分と目指したい自分を明確化し、このプログラムを通しての目標をたてた。',
            image: [
              {
                id: 1,
                src: '/img/research01.png',
              },
              {
                id: 2,
                src: '/img/research02.png',
              }
            ]
          },
          {
            id: 2,
            title: 'ジョハリの窓',
            description: '自他による認識の違いから、開放の窓・盲点の窓・秘密の窓・未知の窓に分けるジョハリの窓を作成した。',
            image: [
              {
                id: 3,
                src: '/img/research03.png',
              },
            ]
          },
          {
            id: 3,
            title: '過去の出来事',
            description: ' 過去の出来事とその時の考えや感情を整理した。状況を時系列でグラフにし、抽出した過去の出来事を開示した。',
            image: [
              {
                id: 4,
                src: '/img/research04.png',
              },
              {
                id: 5,
                src: '/img/research05.png',
              }
            ]
          },
          {
            id: 4,
            title: '思考の癖',
            description: '様々なキーワーどを参考に、現在の自分の思考の癖を認識した。',
            image: [
              {
                id: 6,
                src: '/img/research06.png',
              },
              {
                id: 7,
                src: '/img/research07.png',
              }
            ]
          },
          {
            id: 5,
            title: '自分のタイプ',
            description: '大事にしている価値観を選び、そこから現在自分がいるタイプが、コントローラー・プロモーター・アナライザー・サポーターのどれに入るか調べた。',
            image: [
              {
                id: 8,
                src: '/img/research08.png',
              },
              {
                id: 9,
                src: '/img/research09.png',
              }
            ]
          },
          {
            id: 6,
            title: 'これからの価値観',
            description: '過去の出来事および現在の価値観と自分のタイプを見比べながら、これから大切にしたい価値観を決めた。また、そこから提供できる価値について考えた。',
            image: [
              {
                id: 10,
                src: '/img/research10.png',
              },
            ]
          },
          {
            id: 7,
            title: 'ミッション',
            description: '提供できる価値を参考に、自分が実現したいことを考えた。可能な限り具体的にイメージすることで将来ありたい姿を探した。',
            image: [
              {
                id: 11,
                src: '/img/research11.png',
              },
            ]
          },
          {
            id: 8,
            title: 'キャッチコピー',
            description: 'これからの自分像を明確にするためにキャッチコピーを考え、10分のプレゼンテーションで自分らしさを存分に表現した。',
            image: [
              {
                id: 12,
                src: '/img/research12.png',
              },
            ]
          }
        ]
      }
    },
  }
</script>