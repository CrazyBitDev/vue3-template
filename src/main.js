import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/svg'
import SvgIcon from 'cmp/SvgIcon/index.vue'

import '@/assets/styles/element-variables.scss'

const app = createApp(App)

app.component(SvgIcon.name, SvgIcon)
app.use(store)
app.use(router)

app.mount('#app')
