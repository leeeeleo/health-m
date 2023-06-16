import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'    
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import {Dialog} from 'vant' 
import 'vant/lib/index.css';

const app = createApp(App)
app.use(createPinia())
app.use(Vant)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
app.use(Dialog)
