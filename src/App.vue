<template>
  <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand"></a>
    <form class="d-flex" >
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="../src/assets/SHzOfH4BS.png" alt="" style="width: 35px;"> {{email}}
          </a>
          <ul class="dropdown-menu">
            <li><button class="btn-cerrar-sesion text-center pl-3"
               @click="cerrarSesion()"> Cerrar sesión</button></li>
          </ul>
    </form>
  </div>
</nav>
  <router-view/>
</template>
<script>

  import { mapState, mapActions } from "vuex";
  export default {
    data() {
      return {
      };
    },
    computed: {
      ...mapState(["email"]) 
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

.btn-cerrar-sesion{
  border: none;
  background-color: transparent;

}
</style>
