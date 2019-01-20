import Vue from 'vue';
import Vuex from 'vuex';
import Post from './model';

Vue.use(Vuex);

export interface State {
  all: Post[];
}

const state: State = {
  all: [new Post(1, 'Test post', 'Hello world')],
};

export default {
  state: state,
}
