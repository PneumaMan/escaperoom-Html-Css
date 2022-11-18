import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Participante/Dashboard.vue'
import store from "../store"

const routes = [
  {
    path: '/',
    name: 'inicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/Inicio.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
     meta: { requireAuth: true },
  },
  {
    path: '/regitro',
    name: 'regitro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/Registro.vue'),
     meta: { requireAuth: true },
  },
  {
    path: '/inicio-qr',
    name: 'inicioqr',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/inicioparticipante.vue'),
     meta: { rol : 'Participante'  },
  },
  {
    path: '/perfil',
    name: 'Perfil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Participante/Perfil.vue'),
     meta: { requireAuth: true },
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrativo/Admin.vue'),
     meta: { requireAuth: true },
  },
  {
    path: '/consulta',
    name: 'ConsultaParticipantes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrativo/ConsultaParticipantes.vue'),
     meta: { requireAuth: true },
  },
  {
    path: '/retos',
    name: 'Retos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrativo/Retos.vue'),
     meta: { requireAuth: true },
  },
  {
    path: '/modulo-escape',
    name: 'moduloEscape',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrativo/moduloEscapes.vue'),
     meta: { requireAuth: true },
  },
  {
    path: '/login-participantes',
    name: 'logueo',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/logueo.vue')
  },
  {
    path: '/scan-qr',
    name: 'CargaLecturaRetos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CargaLecturaRetos.vue'),

  },
  {
    path: '/responder-retos',
    name: 'ResponderRetos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ResponderRetos.vue'),
  },
  {
    path: '/salida',
    name: 'salida',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Salida.vue'),
     meta: { requireAuth: true },
  },
  {
    path: '/salida-voluntaria',
    name: 'salidaVoluntaria',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SalidasVoluntaria.vue'),
     
  },
  {
    path: '/participante/texto-final',
    name: 'TextoFinalEscape',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TextoFinalEscape.vue'),
     
  },
  {
    path: '/participante/score-participantes',
    name: 'score-participantes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/score-participantes.vue'),
     
  },
  {
    path: '/participante/feedback',
    name: 'FeedBAck',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FeedBAck.vue'),
     
  },
  {
    path: '/lectura-feedback',
    name: 'lecturaFeedBAck',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/lecturaFeddback.vue'),
     
  },
  {
    path:'/dashboard',
    name:'Dashboard',
    component:Dashboard,
     meta: { requireAuth: true },
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requireAuth);
  const rol= store.state.rol
  if (rutaProtegida && store.state.token === '' ) {
    if (store.state.auth) {
      next();
    } else {
      next({ name: "inicio" });
      /* if (rol != 'Participante') {
        next({ name: "inicio" }); //Administrador
      } else {
        next({ name: "logueo" });  //Inicio de sesion participante
      } */
    }
  } else {
    next();
  }
});





export default router
