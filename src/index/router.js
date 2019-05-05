/*
* author: lihongzhao
* 2019-4-29 : 10:11
*   
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import MusicList from './components/MusicList'

Vue.config.productionTip = false
Vue.use(VueRouter)
const  routes = [
    { path: '/musiclist', component: MusicList },
    { path: '/', redirect: '/musiclist' },
];
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
export default router;