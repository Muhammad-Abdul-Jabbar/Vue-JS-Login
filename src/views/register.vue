
<template>
   <h1>create an Account</h1>
   <p><input type="text" placeholder="email" v-model="email"></p>
   <p><input type="password" placeholder="password" v-model="password"></p>
   <p><button @click="register">submit</button></p>
   <p><button @click="signInWithGoogle">sign In With Google</button></p>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth , createUserWithEmailAndPassword} from "firebase/auth"

const email = ref("");
const password = ref("");


const register = () =>{
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data)  => {
      console.log("sucsessfully registerd!")
      router.push('/feed')
      })
      .catch((error)  => {
      console.log(error.code)
      alert(error.message)
      })

};

const signInWithGoogle = () =>{

};

</script>