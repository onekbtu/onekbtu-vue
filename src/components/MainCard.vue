<template>
  <v-flex sm11 md5>
    <v-card style="margin-top: 32px;">
      <v-card-title primary-title>
        <div style="width: 100%">
          <h3 class="headline mb-0"> {{ post.title }}</h3>
          <span class="grey--text">ThinkIT club</span>
        </div>
        <span style="margin-top: 8px;">
          <mavon-editor language='ru'
                        :toolbarsFlag="false"
                        :subfield="false"
                        defaultOpen="preview"
                        style="z-index: 0;"
                        v-model='post.content'>
          </mavon-editor>
        </span>
      </v-card-title>

      <v-card-actions>
        <v-btn style="opacity: 0.54" icon flat>
          <v-icon>arrow_upward</v-icon>
        </v-btn>
        <p class="font-weight-bold"> 2 </p>
        <v-btn style="opacity: 0.54" icon flat>
          <v-icon>arrow_downward</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn flat>Share</v-btn>
        <v-btn flat color="orange">Comments</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import Post from '../store/modules/posts/model';

export default {
  name: 'MainCard',
  props: {
    post: {
      type: Post,
      required: true,
    },
  },
};
</script>

<style scoped>
  .v-show-content-html {
    background: red;
  }
</style>
