import { App } from 'vue'
import MyComponent from './Component.vue'

export default function install(app: App) {
  app.component('MyComponent', MyComponent)
}

export { MyComponent, install }
