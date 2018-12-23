<template>
  <div id="app">
    <template>
      <v-app dark>
        <Toolbar></Toolbar>
        <NavigationDrawer></NavigationDrawer>
        <div style="padding-left: 300px; padding-top: 80px">
          <h2 class=".display-3" style="margin-left: 32px;color: #9d9d9d;"> Recent posts</h2>
            <v-layout row ;>
              <v-flex xs12 sm8 offset-sm2>
                <v-card v-for="x in [1, 2, 3]" style="margin-top: 32px;">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                  >
                  </v-img>

                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">The development has started</h3>
                      <span class="grey--text">ThinkIT club</span><br>
                    </div>
                    <span style="margin-top: 8px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur delectus deserunt, est et facere hic iusto labore neque odit quidem ratione reiciendis voluptatum. Ab molestias nesciunt officiis perferendis porro.</span>
                  </v-card-title>

                  <v-card-actions>
                    <v-btn flat>Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="show = !show" style="margin-right: 16px">
                      <v-badge
                        small
                        color="orange"
                      >
                        <span slot="badge">3</span>
                        <v-icon>{{ show ? 'comment' : 'comment' }}</v-icon>
                      </v-badge>
                    </v-btn>
                  </v-card-actions>

                  <v-slide-y-transition>
                    <v-card-text v-show="show">
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time
                      for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!
                      Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                  </v-slide-y-transition>
                </v-card>
              </v-flex>
            </v-layout>
        <v-footer
          style="margin-top: 16px;"
          dark
          height="auto"
        >
          <v-card
            class="flex"
            flat
            tile
          >
            <v-card-actions class="grey darken-3 justify-center">
              &copy;2018 — <strong>Default Inc</strong>
            </v-card-actions>
          </v-card>
        </v-footer>
        </div>
      </v-app>
    </template>
  </div>
</template>

<script>
import WebFontLoader from 'webfontloader';
import Toolbar from './components/Toolbar.vue';
import NavigationDrawer from './components/NavigationDrawer.vue';

export default {
  components: { NavigationDrawer, Toolbar },
  mounted() {
    WebFontLoader.load({
      google: {
        families: ['Roboto:100,300,400,500,700,900'],
      },
      active: this.setFontLoaded,
    });
  },
  methods: {
    setFontLoaded() {
      this.$emit('font-loaded');
    },
  },
  data: () => ({
    show: false,
    items: [
      { title: 'Home', icon: 'dashboard' },
      { title: 'About', icon: 'question_answer' },
    ],
    right: null,
  }),
};

</script>
