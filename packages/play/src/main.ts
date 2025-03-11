import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import  Xida from "xida-ui"

console.log( "main.ts",Xida)
let app = createApp(App)


app.use(Xida)
app.mount('#app')
