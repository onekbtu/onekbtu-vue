import { POSTS_CREATE, POSTS_GET_ALL } from '@/store/actions/posts';
import Post from './model';
import API from '@/store/api';

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
  [POSTS_GET_ALL]: ({ commit }) => {
    API.get('/posts/').then((response) => {
      if (response.status === 200) {
        commit('set', response.data["results"])
      }
    });
  },
  [POSTS_CREATE]: ({ commit }, post) => {
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
