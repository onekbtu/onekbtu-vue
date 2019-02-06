<template>
  <v-layout column wrap  >
    <v-flex class="mb-3 ml-4">
      <h2>Sign in</h2>
    </v-flex>
    <v-flex class="auth-input ml-4">
      <v-text-field
        v-model="username"
        label="E-mail or username •"
        :rules="[rules.required]"
        outline
      ></v-text-field>
    </v-flex>
    <v-flex class="auth-input ml-4">
      <v-text-field
        v-model="password"
        label="Password •"
        :type="showPass ? 'text' : 'password'"
        hint="At least 6 characters"
        :append-icon="showPass ? 'visibility_off' : 'visibility'"
        :rules="[rules.required, rules.min]"
        @click:append="showPass = !showPass"
        outline
      ></v-text-field>
    </v-flex>
    <v-flex>
      <v-btn color="accent" class="ml-4" large @click="login()"> Sign in </v-btn>
      <v-btn color="accent" class="ml-4" flat> FORGOT PASSWORD </v-btn>
    </v-flex>
    <v-flex class="ml-4 mt-4">
      <p class="font-weight-light">
        New here?
        <v-btn color="accent" small flat :to="{name: 'register'}"> sign up </v-btn>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex';
import { AUTH_REQUEST } from '../../store/actions/auth';

export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: '',
    showPass: false,
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 6 || 'Min 6 characters',
    },
  }),
  methods: {
    ...mapActions('user', {
      authorise: AUTH_REQUEST,
    }),
    login() {
      const { username, password } = this;
      this.authorise({ username, password }).then(() => {
        this.$router.push('/');
      });
    },
  },
};
</script>

<style scoped>
  .auth-input {
    width: 320px;
  }
</style>
