import { createApp } from 'vue'
import VueMonoRepoLib from 'vue-monorepo-lib'
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(VueMonoRepoLib)
app.mount('#app')
