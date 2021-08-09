import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBYQOWc-LEpzmB7tOZL5yZyCuehoQAX4nQ",
  authDomain: "vue-training-8b8bf.firebaseapp.com",
  projectId: "vue-training-8b8bf",
  storageBucket: "vue-training-8b8bf.appspot.com",
  messagingSenderId: "820220288948",
  appId: "1:820220288948:web:f0e53fc5c09ee7af9bdce1",
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
