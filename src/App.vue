<template>
  <div id="app">
    <template>
      <v-app dark>
        <Toolbar></Toolbar>
        <NavigationDrawer></NavigationDrawer>
        <div style="padding-left: 300px; padding-top: 80px">
          <h2 class=".display-3" style="margin-left: 32px;color: #9d9d9d;"> Recent posts</h2>
            <v-layout align-space-between justify-space-around row wrap>
              <v-flex sm11 md5 v-for="x in [1, 2, 3, 4, 5]">
                <MainCard></MainCard>
              </v-flex>
            </v-layout>
          <Footer></Footer>
        </div>
      </v-app>
    </template>
  </div>
</template>

<script>
import WebFontLoader from 'webfontloader';
import Toolbar from './components/Toolbar.vue';
import NavigationDrawer from './components/NavigationDrawer.vue';
import Footer from './components/Footer.vue';
import MainCard from './components/MainCard.vue';

export default {
  components: {
    MainCard, Footer, NavigationDrawer, Toolbar,
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
