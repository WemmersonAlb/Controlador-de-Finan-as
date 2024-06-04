import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Scss global
import './assets/scss/app.scss'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi'
    }
})

app.use(router)
app.use(vuetify)

app.mount('#app')
