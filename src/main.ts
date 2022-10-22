import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './styles/main.scss'
import 'quasar/src/css/index.sass'
import 'swiper/css'
import 'swiper/css/pagination';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, {
  plugins: {},
  config: {
    brand: {
      primary: '#23cefd',
    }
  }
})
app.use(VueAwesomeSwiper)

app.mount('#app')
