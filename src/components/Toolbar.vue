<template>
  <v-toolbar fixed app>
    <v-toolbar-side-icon @click="toggleNav"></v-toolbar-side-icon>
    <v-toolbar-title>
      <router-link to="/" class="toolbar-title"> One KBTU </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to='/posts/create/'>CREATE POST</v-btn>
      <v-btn flat>FOLLOWED</v-btn>
      <v-btn flat>PROFILE</v-btn>
    </v-toolbar-items>
    <v-btn flat outline>LOG IN</v-btn>
    <v-btn style="background-color: #fafafa !important;"
           color="deep-orange darken-1"
           flat
           outline
    >
      SIGN UP
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    toggleNav() {
      this.$root.$emit('toggleNav');
    },
  },
};
</script>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>
