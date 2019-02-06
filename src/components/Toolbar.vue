<template>
  <v-toolbar fixed app>
    <v-toolbar-side-icon @click="toggleNav"></v-toolbar-side-icon>
    <v-toolbar-title>
      <router-link to="/" class="toolbar-title"> One KBTU </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat :to="{name: 'PostCreateForm'}">CREATE POST</v-btn>
      <v-btn flat>FOLLOWED</v-btn>
      <v-btn
        v-if="isAuthenticated"
        flat
        @click="logout"
      >
       Logout
      </v-btn>
    </v-toolbar-items>
    <v-btn
      v-if="!isAuthenticated"
      flat
      outline
      :to="{name: 'login'}"
    >
      LOG IN
    </v-btn>
    <v-btn
      v-if="!isAuthenticated"
      style="background-color: #fafafa !important;"
      color="deep-orange darken-1"
      flat
      outline
      :to="{name: 'register'}"
    >
      SIGN UP
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { AUTH_LOGOUT } from '../store/actions/auth';

export default {
  name: 'Toolbar',
  computed: {
    ...mapGetters('user', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('user', {
      clearStore: AUTH_LOGOUT,
    }),
    logout() {
      this.clearStore().then(() => {
        this.$router.push('/');
      });
    },
    toggleNav() {
      this.$root.$emit('toggleNav');
    },
  },
};
</script>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>
