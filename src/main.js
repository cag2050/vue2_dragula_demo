// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Vue2Dragula } from 'vue2-dragula'

Vue.config.productionTip = false

Vue.use(Vue2Dragula, {
    logging: {
        directive: false,
        plugin: false,
        service: false,
        dragHandler: false,
        modelManager: false
    }
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

new Vue({
    // el: '#app',
    router,
    ...App
}).$mount('#app')
