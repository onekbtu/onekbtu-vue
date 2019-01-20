<template>
  <div>
      <h2 class=".display-3" style="margin-left: 32px;color: #9d9d9d;"> Recent posts</h2>
      <v-layout align-space-between justify-space-around row wrap>
        <MainCard v-for="post in posts" v-bind:key="post.id" v-bind:post="post" />
      </v-layout>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import MainCard from './MainCard.vue';

export default {
  components: {
    MainCard,
  },
  name: 'PostsView',
  computed: {
    ...mapState({
      posts: state => state.posts.all,
    }),
  },
};
</script>

<style scoped>

</style>
