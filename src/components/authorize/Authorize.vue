<template>
  <v-layout align-center justify-start row fill-height>
    <div class="art"> </div>
    <router-view></router-view>
  </v-layout>
</template>

<script>
export default {
  name: 'Authorize',
};
</script>

<style scoped>
  .art {
    height: 100%;
    width: 200px;
    background: url("https://i.pinimg.com/originals/cd/d5/37/cdd537dbf4b36c2c9670cfab1a18f6f5.png") 1060px;
  }
</style>
