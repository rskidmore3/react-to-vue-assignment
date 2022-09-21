import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

 const store = createStore({
    state(){ 
        return { 
            games: [
                {
                    id: 'trugam3',
                    name: 'game 1', 
                    publisher: 'trublu games', 
                    rating: 4
                },  
                {
                    id: 'trugam4',
                    name: 'game 2', 
                    publisher: 'trublu games', 
                    rating: 4
                }, 
                {
                    id: 'trugam1', 
                    name: 'game 3', 
                    publisher: 'trublu games', 
                    rating: 4
                }
            ]
        }
    }, 
    mutations: {
        addGame(state, game){
            const id = game.name.split(' ').join('').slice(0,3) + game.publisher.split(' ').join('').slice(0,3) + String(Math.floor(Math.random() * 10))
            this.state.games.push({ id: id, name: game.name, publisher: game.publisher, rating: game.rating})
        }, 
        updateGame(state, game){
             const index = this.state.games.findIndex(object => {
                return object.id === game.id;
              });
             this.state.games[index] = {id: game.id, name: game.name, 
                publisher: game.publisher, rating: game.rating}
        }, 
        deleteRecord(state, id){
            const gameIndex = this.state.games.findIndex(game => {
                return game.id === id; 
            })
           this.state.games.splice(gameIndex,1)
        }
    }
})

const app = createApp(App)

app.use(store)

app.mount('#app')


import 'bootstrap/dist/js/bootstrap.js'