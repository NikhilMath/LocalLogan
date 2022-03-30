import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home.vue'
import Restaurants from './../components/Restaurants.vue'
// updated import

Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: Home },
			{ path: '/restaurants', component: Restaurants },
    ]
})