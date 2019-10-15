import Vue from 'vue'
import App from './App.vue'
import Verify from '../packages/index'

Vue.config.productionTip = false
Vue.use(Verify)


new Vue({
    render: h => h(App)
}).$mount('#app')
