import Vue from 'vue'
import Router from 'vue-router'

// Page content
import Locations from '@/components/Locations'
import Home from '@/components/Home'

// Fallback page
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Instructions',
      component: Home
    },
    {
      path: '/locations',
      name: 'Enter Locations',
      component: Locations
    },
    {
      path: '**',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})