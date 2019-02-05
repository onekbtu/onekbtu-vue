<template>
  <div id='PostCreateForm'>
    <v-form>
      <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm6 md9>
          <v-text-field v-model='post.title' placeholder='Title' label='Title' required>
          </v-text-field>
        </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 sm6 md9>
            <mavon-editor
              style="z-index: 0;"
              defaultOpen="edit"
              language='ru'
              :toolbars="toolbars"
              v-model="post.content">
            </mavon-editor>
          </v-flex>
        </v-layout>
        <MainCard :post="post"></MainCard>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3>
            <v-btn color='success' v-on:click='onclick'>
              Submit
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import { POSTS_CREATE } from '../store/actions/posts';
import Post from '../store/modules/posts/model';
import MainCard from './MainCard.vue';

const EDITOR_TOOLBAR = {
  bold: true,
  italic: true,
  header: true,
  underline: true,
  strikethrough: true,
  mark: false,
  superscript: true,
  subscript: true,
  quote: true,
  ol: true,
  ul: true,
  link: true,
  imagelink: true,
  code: true,
  table: true,
  readmodel: false,
  htmlcode: true,
  help: true,
  alignleft: true,
  aligncenter: true,
  alignright: true,
  subfield: false,
};

export default {
  name: 'PostCreateForm',
  components: {
    MainCard,
  },
  data: () => ({
    post: new Post(0, '', ''),
    toolbars: EDITOR_TOOLBAR,
  }),
  methods: {
    ...mapActions('posts', {
      create: POSTS_CREATE,
    }),
    onclick() {
      this.create(this.post);
    },
  },
};
</script>

<style scoped>
</style>
