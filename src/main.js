import { createApp } from "vue"
import router from "./router"
import App from "./App.vue"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

const app = createApp(App)

app.use(router)
app.mount('#app')

