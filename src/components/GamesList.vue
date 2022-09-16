<script>
  import AddGame from './AddGame.vue'


const routes = {
    '/addgame': AddGame
  }


  export default {
    data(){
      return {
        editingID: ''
      }
    },
      computed: {
            currentView() {
                return routes[this.currentPath.slice(1) || "/"] || NotFound;
            }
        },
        methods: {
            sendUpdateToAddForm(e) {
              this.editingID = e.target.id
            }, 
            submitForm(e, state) {
                e.preventDefault()
                const recordID = e.target[3].id
                  this.$store.commit('updateGame', {id: e.target[3].id, 
                  name: e.target[0].value,
                  publisher: e.target[1].value,
                  rating: e.target[2].value,
                  })

                  this.editingID = ''

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

    <!-- Make form here -->
    <form :class="editingID === item.id ? '' : 'd-none'" @submit="submitForm" ref="anyName">
      <span id="somevalue"></span>
      <div class="mb-3">
            <label for="name" class="form-label">Name*</label>
            <input type="text" class="form-control" id="nameOfGame"  :value="item.name" aria-describedby="nameOfGame">
        </div>
        <div class="mb-3">
            <label for="publisher" class="form-label">Publisher*</label>
            <input type="text" class="form-control" id="publisher" :value="item.publisher">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Rating*</label>
            <input type="number" class="form-control" id="rating" :value="item.rating">
        </div>
        <button type="submit" class="btn btn-primary" :id='item.id'>Submit</button>
    </form>

    <!-- Make display form here -->
    <div :class="editingID === item.id ? 'd-none' : ''">      
      <span >{{ item.name }}</span> <span>{{ item.publisher }}</span> <span>{{ item.rating }}</span> {{ ' '}}
       <button  @click="sendUpdateToAddForm" :id="item.id">Edit</button>
    </div>
  
</div>


</div>

</template>