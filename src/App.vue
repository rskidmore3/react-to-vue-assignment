<script  >
  import GamesList from './components/GamesList.vue'
  import AddGame from './components/AddGame.vue'
  import Navbar from './components/Navbar.vue'
 
  const routes = {
    '/': GamesList, 
    '/addgame': AddGame
  }


  export default {
    data() {
      
        return {
            currentPath: window.location.hash
        };
    },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || "/"] || NotFound;
        }
    },
    mounted() {
        window.addEventListener("hashchange", () => {
            this.currentPath = window.location.hash;
        });
    },
    components: { Navbar }
}

</script>

<template>
  <Navbar/>
  <component :is="currentView" />
</template>
