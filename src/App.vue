<template>
  <div id="app">
    <button @click="toggleNav" class="nav-toggle">Menu</button>
    <nav :class="{ open: isNavOpen }">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/repos">Repositories</router-link></li>
        <li><a href="#" @click.prevent="showAlert">Portfolio</a></li>
      </ul>
    </nav>
    <router-view v-if="!loading"></router-view>
    <div v-if="loading" class="loading">Loading......</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { store } from './store';

export default defineComponent ({
  name: 'App',
  data() {
    return {
      isNavOpen: false
    };
  },
  computed: {
    loading() {
      return store.loading;
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    showAlert() {
      window.alert('Coming Soon');
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background-color: #D0B8AC;
  min-width: 90vw;
  min-height: 78vh;
}

.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: blue;
  font-size: 24px;
  z-index: 1000;
}

.nav-toggle {
  display: none; 
  position: fixed;
  top: 15px;
  left: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 1100;
}

nav {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.3s ease;
  z-index: 1050;
}

nav.open {
  left: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

nav ul li {
  margin: 15px 0;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

@media (max-width: 768px) {
  .nav-toggle {
  display: block;
  background-color:  #D0B8AC;
  color: whitesmoke;
  margin: 5px;
  border: solid 1px;
  border-radius: 10px;
  padding: 7px;
  border-bottom: whitesmoke solid 6px;
  pointer: cursor;
  }

  nav {
    left: -250px; 
  }

  nav.open {
    left: 0; 
  }

  nav ul {
    flex-direction: column;
    padding-top: 60px;
  }

  nav ul li a {
    font-size: 16px;
  }

  button {
  background-color:  #D0B8AC;
  color: whitesmoke;
  margin: 5px;
  border: solid 1px;
  border-radius: 10px;
  padding: 7px;
  border-bottom: whitesmoke solid 6px;
  pointer: cursor;
  }
}
</style>
