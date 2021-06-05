<template>
  <div class="hero">
    勇者
    <v-item-group multiple>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : ''"
                class="d-flex align-center"
                dark
                height="350"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div
                    v-if="active"
                    class="text-h2 flex-grow-1 text-center"
                  >
                    Controller
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
                :color="active ? 'primary' : ''"
                class="d-flex align-center"
                dark
                height="350"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div
                    v-if="active"
                    class="text-h2 flex-grow-1 text-center"
                  >
                    Promoter
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
                :color="active ? 'primary' : ''"
                class="d-flex align-center"
                dark
                height="350"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div
                    v-if="active"
                    class="text-h2 flex-grow-1 text-center"
                  >
                    Analyzer
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
                :color="active ? 'primary' : ''"
                class="d-flex align-center"
                dark
                height="350"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div
                    v-if="active"
                    class="text-h2 flex-grow-1 text-center"
                  >
                    Supporter
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>