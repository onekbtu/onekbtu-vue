import {
  POSTS_CREATE, POSTS_DISLIKE, POSTS_GET_ALL, POSTS_LIKE,
} from '@/store/actions/posts';
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
    state.all.push(post);
  },
};

const actions = {
  [POSTS_GET_ALL]: ({ commit }) => {
    API.get('/posts/').then((response) => {
      if (response.status === 200) {
        commit('set', response.data.results.map(post => new Post(post.id, post.title, post.content, post.rating, post.vote)));
      }
    });
  },
  [POSTS_CREATE]: ({ commit }, post) => new Promise((resolve, reject) => {
    API.post('/posts/', post).then((response) => {
      if (response.status === 201) {
        commit('create', post);
        resolve(post);
      } else {
        reject(response.data);
      }
    }).catch((error) => {
      reject(error);
    });
  }),
  [POSTS_LIKE]: ({ commit }, postId: number) => new Promise((resolve, reject) => {
    const vote = { post: postId, type: 1 };
    API.post('/votes/', vote).then((response) => {
      if (response.status === 201) {
        resolve(response.data);
      } else {
        reject(response.data);
      }
    }).catch((error) => {
      reject(error);
    });
  }),
  [POSTS_DISLIKE]: ({ commit }, postId: number) => new Promise((resolve, reject) => {
    const vote = { post: postId, type: -1 };
    API.post('/votes/', vote).then((response) => {
      if (response.status === 201) {
        resolve(response.data);
      } else {
        reject(response.data);
      }
    }).catch((error) => {
      reject(error);
    });
  }),
};

const state: State = {
  all: [],
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
