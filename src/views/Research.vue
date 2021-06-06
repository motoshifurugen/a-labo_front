<template>
  <div class="research">
    <section class="home-member">
      <v-container fluid class="home-member__content">
        <v-row>
          <v-col class="home-member__content-text tile">
            <p>研究内容</p>
          </v-col>
        </v-row>
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