import './assets/main.css'

import { createApp } from 'vue'
import app from './app.vue';
import router from './router'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnGHOhij3K3cgD9yuFzv4SaaWy63q0xr8",
  authDomain: "vuejs-file.firebaseapp.com",
  projectId: "vuejs-file",
  storageBucket: "vuejs-file.appspot.com",
  messagingSenderId: "490090800885",
  appId: "1:490090800885:web:89472da8a64f99462d47bc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

app.use(router)
const app = createApp(app);
app.mount('#app')
