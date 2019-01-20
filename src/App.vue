<template>
  <div id="app">
    <template>
      <v-app dark>
        <Toolbar></Toolbar>
        <NavigationDrawer></NavigationDrawer>
        <div style="padding-left: 300px; padding-top: 80px">
          <router-view></router-view>
          <Footer></Footer>
        </div>
      </v-app>
    </template>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import NavigationDrawer from './components/NavigationDrawer.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Footer, NavigationDrawer, Toolbar,
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
