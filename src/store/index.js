import Vue from 'vue'
import Vuex from 'vuex'

// modules
import application from './modules/application'
import user from './modules/user'
import permission from './modules/permission'

import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    application,
    user,
    permission
  },
  getters
})

export default store
