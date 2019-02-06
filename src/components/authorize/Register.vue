<template>
  <v-layout column wrap  >
    <v-flex class="mb-3 ml-4">
      <h2>Say "Hello, World!"</h2>
    </v-flex>
    <v-flex class="auth-input ml-4">
      <v-text-field
        v-model="email"
        label="E-mail •"
        :rules="[rules.required, rules.email]"
        outline
      ></v-text-field>
    </v-flex>
    <v-flex class="auth-input ml-4">
      <v-text-field
        v-model="username"
        label="Username •"
        :rules="[rules.required, rules.username]"
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
      <v-btn color="accent" class="ml-4 mr-4" large @click="register()"> Sign up </v-btn>
    </v-flex>
    <v-flex class="ml-4 mt-1">
      <p class="font-weight-light">
        Have an account?
        <v-btn color="accent" small flat :to="{name: 'login'}"> LOG IN </v-btn>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex';
import { AUTH_REGISTER, AUTH_REQUEST } from '../../store/actions/auth';

export default {
  name: 'Register',
  data: () => ({
    email: '',
    username: '',
    password: '',
    showPass: false,
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 6 || 'Min 6 characters',
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Invalid e-mail.';
      },
      username: (value) => {
        const pattern = /^[A-Za-z0-9_]+$/;
        return pattern.test(value) || 'Latin letters, digits and underscore characters';
      },
    },
  }),
  methods: {
    ...mapActions('user', {
      authorise: AUTH_REGISTER,
      login: AUTH_REQUEST,
    }),
    register() {
      const { username, email, password } = this;
      this.authorise({ email, username, password }).then(() => {
        this.login({ username, password }).then(() => {
          this.$router.push('/');
        });
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
