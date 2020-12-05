import Vue from 'vue'
import VueRouter from 'vue-router'
import LatestMovie from '@/components/LatestMovie'
import SingleMovie from '@/components/SingleMovie'
import SearchMovie from '@/components/SearchMovie'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
        path: '/',
        name: 'LatestMovie',
        component: LatestMovie
    },
    {
        path: '/movie/:id',
        props: true,
        name: 'SingleMovie',
        component: SingleMovie
    },
    {
      path: '/search/:name',
      props: true,
      name: 'SearchMovie',
      component: SearchMovie
  },
  ],
  mode: 'history'
})