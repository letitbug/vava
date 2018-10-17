import Vue from 'vue'
import VaIcon from '@/components/VaIcons'

// Register as a global component
Vue.component('va-icon', VaIcon)

const icons = require.context('./', false, /\.svg$/)
const req = context => context.keys().map(context)
req(icons)