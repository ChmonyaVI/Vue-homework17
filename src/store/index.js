import { createStore } from 'vuex'
import auth from './modules/auth'
import users from './modules/users'
import products from './modules/products'
import cart from './modules/cart'

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: { auth, users, products, cart },
})
