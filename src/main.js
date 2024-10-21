import App from './App.vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from "./router"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Echarts from "vue-echarts"
import * as echarts from "echarts"
const pinia = createPinia();
const app = createApp(App);
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.component("v-chart", Echarts)
app.config.globalProperties.$echarts = echarts
app.mount("#app");