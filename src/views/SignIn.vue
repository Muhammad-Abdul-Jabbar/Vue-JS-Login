

<template>
    <div >
    <h1>
      welcome back
    </h1>
    <p>
     <input  type="text" placeholder="email" v-model="email">
    </p>
    <p>
     <input type="password" placeholder="password" v-model="password">
    </p>
    <p>
        <button @click="register">submit</button>
    </p>
    <p>
        <button @click="signInWithGoogle">sign In With Google</button>
    </p>
   
</div>

   
 </template>
 
 <script setup>
 import { ref } from 'vue';
 import { getAuth , signInWithEmailAndPassword , GoogleAuthProvider, signInWithPopup} from "firebase/auth"
 import { useRouter } from 'vue-router';
 const email = ref("");
 const password = ref("");
 const router = useRouter();
 const register = () =>{
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
       .then((data)  => {
       console.log("sucsessfully signed in!")
       router.push('/feed')
       })
       .catch((error)  => {
       console.log(error.code)
       alert(error.message)
       })
 
 };
 
 const signInWithGoogle = () =>{
    const provider = new GoogleAuthProvider();
 signInWithPopup(getAuth(), provider)
 .then((result)  => {
       console.log(result.user)
       router.push('/feed')
       })
       .catch((error)  => {
       console.log(error.code)
       alert(error.message)
       })
 
 };



 
 </script>
 
 <style>
  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-top: 50px;
  }
  p {
    font-size: 1.2rem;
    margin: 20px 0;
  }
  input[type="text"],
  input[type="password"] {
    width: 400px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    justify-items: center;
    margin-left: 490px;
  }
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    width: 400px;
    margin-left: 490px;
    
  }
  button:hover {
    background-color: #45a049;
  }

  div {
    justify-content: center;
    justify-items: center;
  }
</style>