<template>
  <div class="navbar">
    <button class="menu-button" @click="toggleMenu">Menu</button>
    <ul class="nav-list" :class="{ 'active': isMenuOpen }">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Contact</a></li>
      <li class="social-buttons">
        <button class="social-button">Facebook</button>
        <button class="social-button">Twitter</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style>
.navbar {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
}

.menu-button {
  display: none;
}

.nav-list {
  list-style-type: none;
  display: flex;
  justify-content: flex-start; /* Align links to the left */
}

.nav-list.active {
  display: flex;
  flex-direction: column;
}

.nav-list li {
  margin-right: 20px;
}

.nav-list li:last-child {
  margin-right: 0;
}

.social-buttons {
  margin-left: auto; /* Push social buttons to the right */
  margin-top: 10px;
}

.social-button {
  background-color: #3b5998;
  color: #fff;
  border: none;
  padding: 5px 10px;
  margin-right: 10px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-button {
    display: block;
  }

  .nav-list {
    display: none;
  }

  .nav-list.active {
    display: flex;
    flex-direction: column;
  }
}
</style>
