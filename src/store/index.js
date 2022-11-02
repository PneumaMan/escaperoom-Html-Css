import { createApp } from 'vue'
import { createStore } from 'vuex'
import decode from "jwt-decode";
import router from '../router/index';

const store = createStore({
  state: {
    token: '',
    user: '',
    email:'',
    id:'',
    rol:0,
    afiliado:[],
    auth: false,
    baseURL:'https://escape-room-app.azurewebsites.net/'
  },
  
  mutations: {
    obtenerUsuario(state, payload){
      state.token = payload;
      if(payload === ''){
        state.user = ''
        state.auth = false;
      }else{
        state.user = decode(payload);
        state.email = state.user.email
        console.log(state.user)
        state.auth = true;
      }
    },
    doLogout(state) {
      state.auth = false;
      state.user = '';
      console.log(state.auth)
    }
  },
  actions: {
    guardarUsuario({commit}, payload){
      localStorage.setItem('token', payload);
      commit('obtenerUsuario', payload)
    },
    cerrarSesion({commit}){
      commit('obtenerUsuario', '');
      commit('doLogout');
      localStorage.removeItem('token');
      router.push({path:'/'});
      /* this.state.auth = false;
      console.log(this.state.auth) */
    },
    leerToken({commit}){
      const token = localStorage.getItem('token');
      if(token){
        commit('obtenerUsuario', token);
      }else{
        commit('obtenerUsuario', '');
      }

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