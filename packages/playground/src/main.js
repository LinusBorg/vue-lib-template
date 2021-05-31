import { createApp } from 'vue'
import Lib from '@linusborg/lib'
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(Lib)
app.mount('#app')
