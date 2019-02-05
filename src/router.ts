import Vue from 'vue';
import Router from 'vue-router';
import Authorize from './components/authorize/Authorize.vue';
import PostsView from './components/PostsView.vue';
import MainPage from './components/MainPage.vue';
import PostCreateForm from './components/PostCreateForm.vue';
import Login from './components/authorize/Login.vue';
import Register from './components/authorize/Register.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: MainPage,
      children: [
        {
          path: '/',
          name: 'home',
          component: PostsView,
        },
        {
          path: '/posts/create/',
          name: 'PostCreateForm',
          component: PostCreateForm,
        },
        {
          path: '/about/',
          name: 'About',
          component: () => import('./components/About.vue'),
        },
      ],
    },
    {
      path: '/auth/',
      component: Authorize,
      children: [
        {
          path: '/auth/login',
          name: 'login',
          component: Login,
        },
        {
          path: '/auth/register',
          name: 'register',
          component: Register,
        }
      ],
    },
  ],
});
