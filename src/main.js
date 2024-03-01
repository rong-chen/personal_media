import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router/router.js"
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import "@/assets/iconfont/iconfont.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import './media.css'
let app = createApp(App);
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app');
