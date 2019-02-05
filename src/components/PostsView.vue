<template>
  <div>
      <h2 class=".display-3" style="margin-left: 32px;color: #9d9d9d;"> Recent posts</h2>
      <v-layout align-space-between justify-space-around row wrap>
        <MainCard v-for="post in posts" :post="post" v-bind:key="post.id" />
      </v-layout>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';
import { POSTS_GET_ALL } from '../store/actions/posts';
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
  methods: {
    ...mapActions('posts', {
      fetchPosts: POSTS_GET_ALL,
    }),
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style scoped>

</style>
