import Vue from 'vue';
import Vuex from 'vuex';
import Post from './models/model';

Vue.use(Vuex);

export interface State {
  all: Post[];
}

const state: State = {
  all: [new Post(1, 'Test post', 'Hello world')],
};

const mutations = {
  create: (state, post) => {
    state.all.push(post)
  }
};

const actions = {
  create({ commit }, post) {
    commit('create', post)
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
