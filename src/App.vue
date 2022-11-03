<template>
  <nav class="navbar bg-light" v-if="rol != 'Participante' ">
    <div class="container-fluid">
      <a class="navbar-brand"></a>
      <form class="d-flex">
        <div class="dropdown dropstart" v-if="logueado">
          <button class="btn btn-ligth dropdown-toggle text-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <label for="" style="font-size:25px ;">👨‍⚕️</label> {{ email }}
          </button>
          <ul class="dropdown-menu dropdown-menu-ligth">
            <li>
              <router-link to="/dashboard" class="dropdown-item">
                <button class="btn-cerrar-sesion text-center pl-3">Dashboard participante</button>
              </router-link>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li class="dropdown-item">
              <button class="btn-cerrar-sesion text-center pl-3 " @click="cerrarSesion()"> Cerrar sesión</button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </nav>
  <router-view />
</template>
<script>

import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["email", "rol"]),
    ...mapGetters(["logueado"])
  },
  methods: {
    ...mapActions(["cerrarSesion"]),
  },
};
</script>
<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.btn-cerrar-sesion {
  border: none;
  background-color: transparent;

}
</style>
