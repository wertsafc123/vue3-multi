import { createApp } from 'vue'
import App from './App.vue'
import './app.less'
import {Button} from 'ant-design-vue';
import 'ant-design-vue/lib/button/style';

const app = createApp(App)
app
.use(Button)
.mount('#root')
