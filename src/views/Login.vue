<template>
  <h1>Login</h1>
  <form @submit.prevent="Login">
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />

    <button type="submit">Login</button>
  </form>
  <p>
    Need an account?
    <router-link to="/register">Register Here</router-link>
  </p>
</template>

<script>
import { ref } from "vue";
import firebase from 'firebase/app'
import 'firebase/auth';

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => alert(err.message));
    };

    return {
      Login,
      email,
      password,
    };
  },
};
</script>

<style></style>
