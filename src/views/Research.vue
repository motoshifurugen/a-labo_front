<template>
  <div class="research">
    <section class="home-member">
      <v-container fluid class="home-member__content">
        <v-row>
          <v-col class="home-member__content-text tile">
            <p>研究内容</p>
          </v-col>
        </v-row>
        <v-card>
          <v-toolbar
            color="cyan"
            dark
            flat
          >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Your Dashboard</v-toolbar-title>
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
                  <v-tabs-slider color="yellow"></v-tabs-slider>
                  <v-tab
                    v-for="item in items"
                    :key="item"
                  >
                    {{ item }}
                  </v-tab>
                </v-tabs>
            </template>
          </v-toolbar>
          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="item in items"
              :key="item"
            >
              <v-card flat>
                <v-card-text v-text="text"></v-card-text>
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
</style>


<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'web', 'shopping', 'videos', 'images', 'news','1', '2', '3'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>