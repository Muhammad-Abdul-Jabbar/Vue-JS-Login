<template>

  <nav   v-motion-fade-visible>
    <li><a class="hero" href="#" >BAZAAR GAMING</a></li>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
      
    </ul> 
    <a @click="handleSignOut" v-if="isLoggedIn">Sign Out</a>

  </nav>

  <div v-motin class="header"  style="gap: 30px; display: flex; justify-content: center; margin-top: 50px;"  v-motion-slide-visible-once-right>
    <div class="text" style="padding: 40px;">
        <h1 style="color: #2f27ce; font-size: 80px;">BAZAAR GAMING</h1>
        <p style="color: #B9B8C1; font-size: 20px;">Utforsk vårt omfattende bibliotek av spill og oppdag nye favoritter. Vår plattform er designet for å gi deg den beste spillopplevelsen, enten du spiller på datamaskinen, nettbrettet eller mobilen din. Vi jobber kontinuerlig med å oppdatere og forbedre vår samling, slik at du alltid har tilgang til de nyeste og mest spennende spillene.</p>
    </div>
    <img src="/src/components/b.jpg" style="width: 500px; border-radius: 10px;" alt="">
</div>


  <div style="margin-top: 70px;" class="section-1-wrapper" v-motion-slide-visible-once-right>  
            <h1>BEST GAMES</h1>
            <br>
            <div class="section-1-img" style="gap: 15px;">
              <RouterLink to="/abdu"><div class="img img-1"></div></RouterLink>
              <RouterLink to="/abdu"><div class="img img-1"></div></RouterLink>
              <RouterLink to="/abdu"><div class="img img-1"></div></RouterLink>
              <RouterLink to="/abdu"><div class="img img-1"></div></RouterLink>
              <RouterLink to="/abdu"><div class="img img-1"></div></RouterLink>
              <RouterLink to="/abdu"><div class="img img-1"></div></RouterLink>

            </div>
  </div>

  <div class="section-1-wrapper" v-motion-slide-visible-once-right>  
            <h1>OUR FAVORITTE GAMES</h1>
            <br>
            <div class="section-1-img" style="gap: 15px;">
              <RouterLink to="/mo"><div class="img img-1"></div></RouterLink>
              <RouterLink to="/abdu"><div class="img img-1"></div></RouterLink>
              <RouterLink to="/abdu"><div class="img img-1"></div></RouterLink>
              <RouterLink to="/abdu"><div class="img img-1"></div></RouterLink>
              <RouterLink to="/abdu"><div class="img img-1"></div></RouterLink>
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
  animation: mymove 5s;
  padding: 0%;
 }

 @keyframes mymove {
  from {left: 0px;}
  to {left: 300px;}
}

nav {
  background-color: #333;
  padding: 1rem;
  margin-top: 0%;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px;
    text-align: center;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
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

body{
  padding: 0%;
  margin: 0%
}

@import url('https://fonts.googleapis.com/css2?family=Jersey+10&family=Jersey+25&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Permanent+Marker&family=Rowdies:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&family=Jersey+25&family=Permanent+Marker&family=Rowdies:wght@300;400;700&display=swap');



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

.hero {animation-timing-function: ease;}

.hero{
  animation: mymove 5s;
 }

 @keyframes mymove {
  from {left: 0px;}
  to {left: 30000px;}
}

.hero {
  animation: bounce-in 0.5s;
}
.hero{
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>



<script>

export default {
  name: 'Navbar',
}


</script>