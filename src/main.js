import App from './App'

import stores from '@/stores/index.js'
import utils from '@/utils/index.js'

import 'animate.css'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.use(stores).use(utils)
app.$mount()
// #endif

// #ifdef VUE3
import {createSSRApp} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(stores).use(utils)
	return { app }
}
// #endif