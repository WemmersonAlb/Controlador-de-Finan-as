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

//Firebase
import firebaseApp from './firebase'

const app = createApp(App)

app.config.globalProperties.$firebase = firebaseApp;

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
