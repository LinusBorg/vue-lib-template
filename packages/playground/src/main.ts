import { createApp } from 'vue'
import { install as MyLibPLugin } from '@linusborg/lib'
import App from './App.vue'
import 'virtual:windi.css'
import './index.css'

const app = createApp(App)

app.use(MyLibPLugin)
app.mount('#app')
