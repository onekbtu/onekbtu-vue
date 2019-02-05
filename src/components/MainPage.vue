<template>
  <div>
      <Toolbar></Toolbar>
      <NavigationDrawer></NavigationDrawer>
      <div class="content"
           :style="{
               'padding-left': paddingLeft + 'px',
           }"
      >
        <router-view></router-view>
        <Footer></Footer>
      </div>
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue';
import NavigationDrawer from './NavigationDrawer.vue';
import Footer from './Footer.vue';

export default {
  name: 'MainPage',
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

<style scoped>
  .content {
    height: 100%;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
  }
</style>
