<script setup>
import router from './router';
</script>

<template>
  <nav>
  
  </nav>
 <router-view/>

 <footer>
    <a style="color: #B9B8C1;">© Bjørnholt Skole 2024</a>
   <router-link to="/tos1">Terms of Service</router-link>
</footer>


</template>

<style>
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #EBF4FC;
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
}

nav a router-link {
    color: #14112F;
    text-decoration: none;
    padding: 8px 16px;
 
}

nav a:hover {
    background-color: #b6ddff;
    text-decoration: none;
}

@media screen and (max-width: 600px) {
    nav a {
        padding: 8px;
        margin: 0 2px;
    }
}
footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #2D2B8E;
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 180px;
}

footer a {
    color: #B9B8C1;
    text-decoration: none;
    margin: 0 10px;
}

footer a:hover {
    text-decoration: underline;
}


</style>


