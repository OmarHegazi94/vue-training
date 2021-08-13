<template>
  <div class="home">
    <h1>Welcome, {{ name }}</h1>

    <router-link to="/about">About</router-link>
    <br>
    <button @click="Logout">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, onBeforeMount } from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth';

export default {
  name: "Home",
  setup() {
    const name = ref("");

    onBeforeMount( () => {
      const user = firebase.auth().currentUser;

      if(user) {
        name.value = user.email.split('@')[0]
      }

    })

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then( () => { console.log('Signed Out')})
        .catch( err => alert(err.message))
    }

    return {
      name,
      Logout
    }
  }
};
</script>
