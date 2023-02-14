
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import excel from 'vue-excel-export'
import store from './store'
import vuetify from './plugins/vuetify'
 
Vue.use(excel)


Vue.config.productionTip = false
import axios from 'axios'
var api = ''
if(process.env.NODE_ENV === 'development'){
    api = 'http://localhost:3000'
} else {
    api = 'https://apitechfest.rabarhama.com'
}
axios.defaults.baseURL = api;
axios.defaults.headers.post['Content-Type'] = 'application/json';



new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
        
        