import { createApp } from 'vue'
import app from './App.vue'
import list from './components/list.vue'

const App = createApp(app)

App.component('List', list)

App.mount("#app")