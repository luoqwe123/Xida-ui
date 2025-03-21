import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// import  Xida from "xida-ui";
import "xida-ui/dist/es/theme/index.css"
import "xida-ui/dist/es/theme/Button.css"

// console.log( "main.ts",Xida)
const app = createApp(App);


// app.use(Xida);
app.mount('#app');
