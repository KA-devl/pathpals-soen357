import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/index";
import './assets/tailwind.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const pinia = createPinia();
const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(pinia);
app.use(router);
app.use(Toast, { timeout: 2000 });
app.use(ElementPlus);
app.mount("#app")