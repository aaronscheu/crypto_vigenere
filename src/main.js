import Vue from 'vue'
import App from './App.vue'
import Vuikit from 'vuikit'

Vue.use(Vuikit)

new Vue({
  el: '#vigenere',
  render: h => h(App)
})
