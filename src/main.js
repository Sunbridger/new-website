import Vue from 'vue';
import App from './App.vue'
import router from './router';
import plugin from 'core/plugin.js'

Vue.use(plugin);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app');
