<script>
  import AddGame from './AddGame.vue'


const routes = {
    '/addgame': AddGame
  }


  export default {
      
      computed: {
            currentView() {
                return routes[this.currentPath.slice(1) || "/"] || NotFound;
            }
        },
        methods: {
            sendUpdateToAddForm() {
              // console.log(e.target.id)
               return this.currentPath = 'http://localhost:5173/#/addgame'

            }
        }
    }
    
</script>


<template>
    
<div class="border red-background rounded" style="width: 300px; height: 500px; ">
  <div class="header-border header-size border-bottom border-black d-flex justify-content-center" style="width: 100%; height: 50px">    
    <h2> 
      Games List
    </h2>
  </div>
  <div v-for="(item, index) in $store.state.games" :key="index">

    <span >{{ item.name }}</span> <span>{{ item.publisher }}</span> <span>{{ item.rating }}</span> {{ ' '}}
    <a style="cursor: pointer" :href="'#/addgame/'+item.id">Edit</a>
    <span style="cursor: pointer" @click="sendUpdateToAddForm">Change route</span>
  </div>
</div>

</template>