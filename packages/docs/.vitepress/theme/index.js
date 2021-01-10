// import plugin from 'portal-vue'
import DefaultTheme from 'vitepress/dist/client/theme-default'
import VueMonoRepo from 'vue-monorepo-lib'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueMonoRepo)
  },
}
