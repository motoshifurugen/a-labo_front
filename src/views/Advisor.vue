<template>
  <div class="advisor">
    <section class="home-member">
      <v-container fluid class="home-member__content">
        <v-row
          class="home-member__content-text tile"
          justify="space-between"
        >
          <v-tooltip top>
            <v-col cols="12">
              <v-btn @click="show = !show">
                ボタン
              </v-btn>
            </v-col>
            <v-col
              cols="12"
              class="mt-12"
            >
              <span>Programmatic tooltip</span>
            </v-col>
          </v-tooltip>
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
</style>

<script>
  export default {
    data () {
      return {
        show: false,
      }
    },
  }
</script>