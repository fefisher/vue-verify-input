import Vue from 'vue'
import App from './App.vue'
import VerifyInput from '../packages/index'
import verificationcode from 'vue-verification-code'

Vue.config.productionTip = false
Vue.use(verificationcode)
Vue.use(VerifyInput)


new Vue({
    render: h => h(App)
}).$mount('#app')
