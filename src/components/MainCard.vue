<template>
  <v-card style="margin-top: 32px;">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">The development has started</h3>
        <span class="grey--text">ThinkIT club</span><br>
      </div>
      <span style="margin-top: 8px;">
        {{ post.content }}
      </span>
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
        adsasd
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MainCard',
  computed: {
    ...mapState({
      post: state => state.posts.all[0],
    }),
  },
};
</script>

<style scoped>

</style>
