import Vue from 'vue';
import Router from 'vue-router';
import PostsView from './components/PostsView.vue';
import MainPage from './components/MainPage.vue';
import PostCreateForm from './components/PostCreateForm.vue';

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
      ],
    },
  ],
});
