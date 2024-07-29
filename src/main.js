/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import 'bootstrap/dist/css/bootstrap.css';

import { registerPlugins } from '@/plugins'

import "@/assets/scss/sample.scss"

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
