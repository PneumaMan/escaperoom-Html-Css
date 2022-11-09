import { createApp } from 'vue'
import { createStore } from 'vuex'
import decode from "jwt-decode";
import router from '../router/index';
import axios from "axios"

const store = createStore({
  state: {
    token: '',
    user: '',
    email:'',
    id:'',
    rol:'',
    UsuarioAdmin:[],
    auth: false,
    baseURL:'https://escape-room-app.azurewebsites.net/',
    datosID:'',
    participanteId:'',
    nextReto:'Dirígete al reto 1',
    IdEscapeRoom:'',
    IdReto:'',
  },
  
  mutations: {
    obtenerIdQR(state,payload){
      state.datosID = payload
      console.log( state.datosID)

    },
    obtenerUsuario(state, payload){
      state.token = payload;
      if(payload === ''){
        state.user = ''
        state.auth = false;
      }else{
        state.user = decode(payload);
        state.email = state.user.email
        state.auth = true;
        state.rol = state.user.roles
      }
    },
    doLogout(state) {
      state.auth = false;
      state.user = '';
      console.log(state.auth)
    },
    obternerIdParticipante(state, payload){
      state.participanteId = payload

    }
  },
  actions: {
    guardarUsuario({commit}, payload){
      localStorage.setItem('token', payload);
      commit('obtenerUsuario', payload)
    },
    guardarIdParticipante({commit}, payload){
      localStorage.setItem('participanteId', payload);
      commit('obternerIdParticipante', payload)
    },
    cerrarSesion({commit}){
      /* Logout  backend */
      const url = "/Logout";
      axios.post(url,{email:store.state.email}, { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` }})
      .then(res => {
        console.log(res.data)
        this.UsuarioAdmin.push(res.data)
        commit('obtenerUsuario', '');
        commit('doLogout'); 
        localStorage.removeItem('token');
        router.push({path:'/'});
    }).catch( e => {
        console.log(e.response.data.Errors[0].ErrorMessage)
    })

      
    },
    leerToken({commit}){
      const token = localStorage.getItem('token');
      if(token){
        commit('obtenerUsuario', token);
      }else{
        commit('obtenerUsuario', '');
      }

    },
    leerIdParticipante({commit}){
      const idPa = localStorage.getItem('participanteId');
      if(idPa){
        commit('obternerIdParticipante', idPa);
      }else{
        commit('obternerIdParticipante', '');
      }
    },
    guardarDatosQr({commit}, payload){
      commit('obtenerIdQR', payload)
    }
  },
  getters: {
    logueado: state => !!state.token
  },
  modules: {
  }
})

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store)


export default store;