import {AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT, AUTH_REGISTER} from '@/store/actions/auth';
import axios from 'axios';
import api from '@/store/api';

const state = {
  token: localStorage.getItem('user-token') || '',
  status: '',
  hasLoadedOnce: false
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
};

const actions = {
  [AUTH_REQUEST]: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST);
      api({url: 'auth/login/', data: user, method: 'POST'})
        .then(response => {
          localStorage.setItem('user-token', response.data.token);
          axios.defaults.headers.common['Authorization'] = response.data.token;
          commit(AUTH_SUCCESS, response.data);
          resolve(response);
        })
        .catch(err => {
          commit(AUTH_ERROR, err);
          localStorage.removeItem('user-token');
          reject(err);
        })
    })
  },
  [AUTH_REGISTER]: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST);
      api({url: 'auth/register/', data: user, method: 'POST'})
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          commit(AUTH_ERROR, err);
          localStorage.removeItem('user-token');
          reject(err);
        })
    })
  },
  [AUTH_LOGOUT]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT);
      localStorage.removeItem('user-token');
      resolve()
    });
  },
};

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading';
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success';
    state.token = resp.token;
    state.hasLoadedOnce = true
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error';
    state.hasLoadedOnce = true
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = ''
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
