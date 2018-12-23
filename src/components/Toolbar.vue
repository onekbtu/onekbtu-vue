<template>
  <v-toolbar fixed app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>One KBTU</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>CREATE POST</v-btn>
      <v-btn flat>FOLLOWED</v-btn>
      <v-btn flat>PROFILE</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
};
</script>

<style scoped>

</style>
