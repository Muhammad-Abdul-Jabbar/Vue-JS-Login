<template>
    <div>
        <h1 style="text-align: center;">Welcome Back</h1>
        <p>
            <input type="text" placeholder="Email" v-model="email">
        </p>
        <p>
            <input type="password" placeholder="Password" v-model="password">
        </p>
        <p>
            <button @click="register">Submit</button>
        </p>
        <p class="link">
            <a @click="forgotPassword">Forgot Password?</a>
            <router-link to="/register">tap her to register</router-link>
        </p>
        <button @click="signInWithGoogle" class="btn">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiP6GLDtl-IRAenBqGeQMcJZWcJq2cgb2DpuEQOvplPA&s" class="google-logo">
        Sign In With Google
       </button>
    
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail,
 GoogleAuthProvider, signInWithPopup, GithubAuthProvider
} from "firebase/auth"
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully signed in!")
            router.push('/TOS')
        })
        .catch((error) => {
            console.log(error.code)
            alert(error.message)
        })
};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user)
            router.push('/TOS')
        })
        .catch((error) => {
            console.log(error.code)
            alert(error.message)
        })
};

const forgotPassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email.value)
        .then(() => {
            console.log("Password reset email sent!");
            alert("Password reset email sent! Check your inbox.");
        })
        .catch((error) => {
            console.error("Error sending password reset email:", error);
            alert("Error sending password reset email. Please try again later.");
        });
};

</script>


<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

img{
    width: 4px ;
    height: auto;
}

.login-container {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 40px;
    width: 400px;
    max-width: 90%;
    text-align: center;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333333;
}

input[type="text"],
input[type="password"] {
    width: 400px;
    padding: 12px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    background-color:#0056b3 ;
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
}

button:hover {
    background-color: #062444;
}

a {
    color: #007bff;
    text-decoration: none;
    font-size: 14px;
    display: flex;
}

a:hover {
    text-decoration: underline;
}

.link{
    display: flex;
    justify-content: space-between;
}

.google-sign-in {
  text-align: center;
}

.btn {
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.btn:hover {
  background-color: #f1f1f1;
}

.google-logo {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

</style>

