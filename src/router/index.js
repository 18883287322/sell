import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from '@/components/goods/goods'
import sells from '@/components/sells/sells'
import ratings from '@/components/ratings/ratings'

Vue.use(VueRouter)
const routes = [
  {
    path: '/goods',
    component: goods,
    name: 'goods'
  },
  {
    path: '/sells',
    component: sells,
    name: 'sells'
  },
  {
    path: '/ratings',
    component: ratings,
    name: 'ratings'
  }
]

const router = new VueRouter({
  routes: routes
});
// router.push('/goods');
export default router;
