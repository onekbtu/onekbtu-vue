<template>
  <v-flex sm11 md5>
    <v-card style="margin-top: 32px;">
      <v-card-title primary-title>
        <div style="width: 100%">
          <h3 class="headline mb-0"> {{ post.title }}</h3>
          <span class="grey--text">ThinkIT club</span>
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
  </v-flex>
</template>

<script>
import Post from '../store/modules/posts/model';

export default {
  name: 'MainCard',
  props: {
    post: Post,
  },
};
</script>

<style scoped>

</style>
