import Vue from 'vue';
import Router from 'vue-router';
import PostCreateForm from './components/PostCreateForm.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/posts/create/',
      name: 'PostCreateForm',
      component: PostCreateForm,
    },
  ],
});
