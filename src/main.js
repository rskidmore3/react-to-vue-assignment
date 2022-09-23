import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import GamesList from './components/GamesList.vue'
import AddGame from './components/AddGame.vue'
import StaticList from './components/StaticList.vue'
import StaticForm from './components/StaticForm.vue'

const routes = [ 
    {path: '/', component: GamesList}, 
    {path: '/addgame', component: AddGame},
    {path: '/staticlist', component: StaticList},
    {path: '/staticform', component: StaticForm}
]

const router = createRouter({
    history: createWebHistory(), 
    routes: routes
})

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
    actions: {
 
        addGame(context, game) {
            const id = game.name.split(' ').join('').slice(0,3) + game.publisher.split(' ').join('').slice(0,3) + String(Math.floor(Math.random() * 10))
           context.commit('addGame', { id: id, name: game.name, publisher: game.publisher, rating: game.rating})  
        },
        deleteRecord(context, id){
            context.commit('deleteRecord', id)
        },
        updateGame(context, game){
            context.commit('updateGame', game)
        }
    },
    mutations: {

        addGame(state, game){
             this.state.games.push({ id: game.id, name: game.name, publisher: game.publisher, rating: game.rating})
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

// const app = Vue.createApp({})

// app.use(router)

// app.use(router)

// app.mount('#app')

const app = createApp(App)
.use(store)
.use(router)
.mount('#app')




import 'bootstrap/dist/js/bootstrap.js'