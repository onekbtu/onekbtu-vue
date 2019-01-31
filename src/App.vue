<template>
  <div id="app">
    <template>
      <v-app dark>
        <Toolbar></Toolbar>
        <NavigationDrawer></NavigationDrawer>
        <div :style="{'padding-left': paddingLeft + 'px', 'padding-top': 80 + 'px'}">
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
    paddingLeft: 300,
  }),
  methods: {
    toggleNav() {
      this.paddingLeft = 300 - this.paddingLeft;
    },
  },
  mounted() {
    this.$root.$on('toggleNav', this.toggleNav);
  },
};

</script>
