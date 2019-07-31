import Vuex from 'vuex'
import Vue from 'vue'



import auth from './modules/auth'
import loading from './modules/loading'
import error from './modules/error'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        auth,
        loading,
        error,
    },
})
