<script setup>
import router from './router';
</script>

<template>
  <nav>
    |<router-link to="/">home</router-link> |
    <router-link to="/feed">feed</router-link>|
    <router-link to="/register">register</router-link>|
    <router-link to="/SignIn">signinn</router-link>|
  </nav>
 <router-view/>
</template>

<style>
  /* Style for the navigation bar */
  nav {
    background-color: #333;
    color: #fff;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Style for the router links */
  nav a {
    color: #fff;
    text-decoration: none;
    font-size: 24px; /* Adjust font size as needed */
    margin: 0 10px; /* Add margin to create spacing between links */
  }

  /* Style for active router link */
  nav a.router-link-exact-active {
    font-weight: bold;
    color: rgb(173, 150, 150);
    }

</style>

