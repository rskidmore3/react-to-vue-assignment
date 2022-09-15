import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

 const store = createStore({
    state(){ 
        return { 
            games: [
                {
                    name: 'game 1', 
                    publisher: 'trublu games', 
                    rating: 4
                },  
                {
                    name: 'game 2', 
                    publisher: 'trublu games', 
                    rating: 4
                }, 
                {
                    name: 'game 3', 
                    publisher: 'trublu games', 
                    rating: 4
                }
            ]
        }
    }, 
    mutations: {
        addGame(state, game){
            this.state.games.push({name: game.name, publisher: game.publisher, rating: game.rating})
            
        }
    }
})

const app = createApp(App)

app.use(store)

app.mount('#app')


import 'bootstrap/dist/js/bootstrap.js'