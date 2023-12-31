import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import i18n from './plugins/i18n'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(store).use(router).use(i18n).use(vuetify).mount('#app')
