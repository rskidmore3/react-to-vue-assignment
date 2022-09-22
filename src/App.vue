<script>
  import GamesList from './components/GamesList.vue'
  import AddGame from './components/AddGame.vue'
  import Navbar from './components/Navbar.vue'
//   import EditGame from './components/EditGame.vue'
 
//   const routes = {
//     '/': GamesList, 
//     '/addgame': AddGame,    
//     // '/game/edit': EditGAme,    
//   } //TODO switch to  vue router 
  



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
    <div id="app">

            <!-- <Navbar/> -->
        <nav class="navbar navbar-expand-lg bg-light mb-1">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <!-- <a class="nav-link active" aria-current="page" href="#/">Games List</a> -->
                <router-link to="/">Games List</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/addgame">Add Game</router-link>
                    <!-- <a class="nav-link" href="#/addgame">Add Game</a> -->
                </li>    
            </ul>
        </div>
    </div>
    </nav>

    <div class="d-flex justify-content-center">
        <!-- <component :is="currentView" /> -->
        <router-view></router-view>
    </div>
  </div>

</template>
