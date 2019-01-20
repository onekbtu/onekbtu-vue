<template>
  <div id='PostCreateForm'>
    <v-form>
      <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm6 md9>
          <v-text-field v-model='title' placeholder='Title' label='Title' required>
          </v-text-field>
        </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 sm6 md9>
            <mavon-editor language='ru' v-model='content'></mavon-editor>
          </v-flex>
        </v-layout>
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
import Post from '../store/modules/models/model';

export default {
  name: 'PostCreateForm',
  data: () => (
    {
      title: '',
      content: '',
    }
  ),
  methods: {
    ...mapActions('posts', {
      create: 'create',
    }),
    onclick() {
      const post = new Post(2, this.title, this.content);
      this.create(post);
    },
  },
};
</script>

<style scoped>

</style>
