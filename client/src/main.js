import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueAxios from './plugins/axios'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Story from './components/Story.vue'
import New from './components/New.vue'

Vue.config.productionTip = false
Vue.use(VueAxios)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/story/:id', component: Story},
  {path: '/new', component: New}
]

const router = new VueRouter({mode: 'history', routes});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
