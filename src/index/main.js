import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import musicApi from './../util/musicApi';
import 'element-ui/lib/theme-chalk/index.css';
import  store from './store';

Vue.prototype.musicApi = musicApi;

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
    router,
    musicApi,
    store,
    render: h => h(App),
}).$mount('#app')
