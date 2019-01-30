import Vue from 'vue';
import Vuex from 'vuex';
import Post from './model';
import API from '../../api';

Vue.use(Vuex);

export interface State {
  all: Post[];
}

const mutations = {
  set: (state, posts) => {
    state.all = posts;
  },
  create: (state, post) => {
    state.all.push(post)
  }
};

const actions = {
  read({ commit }) {
    API.get('/posts/').then((response) => {
      if (response.status === 200) {
        commit('set', response.data["results"])
      }
    });
  },
  create({ commit }, post) {
    API.post('/posts/', post).then((response) => {
      if (response.status === 201) {
        commit('create', post)
      }
    });
  }
};

const state: State = {
  all: [],
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
