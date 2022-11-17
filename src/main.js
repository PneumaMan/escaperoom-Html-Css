import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from 'axios'
import VueAxios from 'vue-axios';

import { VueSignalR } from '@dreamonkey/vue-signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';

/* Liberia para alertas */
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

/* Libreriapara crear QR */
import VueQRCodeComponent from 'vue-qrcode-component'


const app = createApp(App);
app.use(router);
app.use(VueSweetalert2);

const connection = new HubConnectionBuilder()
  .withUrl('https://escape-room-app.azurewebsites.net/times-escape')
  .build();

app.use(VueSignalR, { connection })
app.component("qr-code", VueQRCodeComponent);;

app.use(VueAxios, axios)
const url = 'https://escape-room-app.azurewebsites.net/api' 
axios.defaults.baseURL = url

app.use(store)

app.mount("#app");

