<template>

  <nav>
    <li><a class="hero" href="#">BAZAAR GAMING</a></li>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
      
    </ul> 
    <a @click="handleSignOut" v-if="isLoggedIn">Sign Out</a>

  </nav>

  <div class="header" style="gap: 30px; display: flex; justify-content: center; margin-top: 100px;">
    <div class="text" style="padding: 40px;">
        <h1 style="color: #2f27ce; font-size: 80px;">BAZAAR GAMING</h1>
        <p style="color: #B9B8C1; font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corporis quaerat ipsam laborum facilis voluptates dolorum beatae soluta suscipit ullam. Nemo illo consectetur ad quia delectus eius, veniam perferendis eligendi praesentium nulla facilis nihil, id tenetur cumque itaque iusto fuga sed temporibus voluptatibus! Eos alias quod, nostrum suscipit molestiae ipsa sit deleniti maxime at architecto minima et facere odit eveniet modi quos, ut unde quae eius laboriosam illo tenetur cum.</p>
    </div>
    <img src="/src/components/b.jpg" style="width: 500px; border-radius: 10px;" alt="">
</div>


  <div class="section-1-wrapper">  
            <h1>BEST GAMES</h1>
            <br>
            <div class="section-1-img">
                <a href="#"><div class="img img-1"></div></a>
            </div>
  </div>

  <div class="section-1-wrapper">  
            <h1>OUR FAVORITTE GAMES</h1>
            <br>
            <div class="section-1-img" style="gap: 15px;">
              <RouterLink to="/mo"><div class="img img-1"></div></RouterLink>
              <RouterLink to="/abdu"><div class="img img-1"></div></RouterLink>
            </div>
  </div>

  


        
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);
let auth;




onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user; 
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/"); 
  }).catch(error => {
    console.error("Sign out error:", error);
  });
};
</script>





<style scoped>

 body{
  background-color: #1C3046;
 }

nav {
  background-color: #333;
  padding: 1rem;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  margin-right: 1rem;
  list-style-type: none;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>


<style>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&family=Jersey+25&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Permanent+Marker&family=Rowdies:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&family=Jersey+25&family=Permanent+Marker&family=Rowdies:wght@300;400;700&display=swap');

.animate {
    opacity: 1;
    transition: opacity 1s ease-in-out;
}


.section-1-wrapper{
  padding: 50px;
}

.section-1-wrapper h1{
    width: 500px;
    color: #FEC53A;
    font-size: 1.5rem;
    font-weight: 400;
}
.section-1-img{
    display: flex;
}
.section-1-img .img{
    width: 150px;
    height: 180px;
    background: url(https://github.com/Almarex-Web-Dev/my-gaming-website/blob/master/images/assassin.jpg?raw=true);
    background-repeat: no-repeat;
    background-size: cover;
}


body{
  background-color: #1C3046;
 }

 .header h1{  
  font-family: "Jersey 10";
}

.header p{
  font-family: "Montserrat";
}

.hero{
  font-size: 20px; 
  font-family: "Jersey 10";
}

</style>



<script>

export default {
  name: 'Navbar',
}


</script>