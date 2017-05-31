import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Vue2dragula from '../components/Vue2dragula'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vue2dragula',
      component: Vue2dragula
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
