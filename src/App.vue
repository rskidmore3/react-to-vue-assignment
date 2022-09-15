<script  >
  // import Navbar from './components/Navbar.vue'
  import GamesList from './components/GamesList.vue'
  import AddGame from './components/AddGame.vue'

  const routes ={
    '/': GamesList, 
    '/addgame': AddGame
  }


  export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
 

</script>

<template>
  <!-- <Navbar />
  <GamesList/> -->

  <nav class="navbar navbar-expand-lg bg-light mb-1">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#/">Games List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/addgame">Add Game</a>
            </li>
            
        </ul>
        </div>
    </div>
    </nav>

    <component :is="currentView" />


</template>
