import Vue from 'vue'
import App from './layouts/App.vue'

import router from './router/index.js'
import '../src/assets/img/iconfont.css'


Vue.config.productionTip = true

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')