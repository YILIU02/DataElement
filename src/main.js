import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' 
import { createApp } from 'vue'
import router from "./router"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Echarts from "vue-echarts"
import * as echarts from "echarts"
import 'default-passive-events'
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
const app = createApp(App);
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.component("v-chart", Echarts)
app.config.globalProperties.$echarts = echarts
app.mount("#app");