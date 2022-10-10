<template>
  <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand"></a>
    <form class="d-flex" >
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="../src/assets/SHzOfH4BS.png" alt="" style="width: 35px;"> usuario AAA
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/perfil">Perfil</a></li>
            <li><a class="dropdown-item" href="/dashboard">Dashboard</a></li>
            <li><a class="dropdown-item" href="/admin">Administración</a></li>
            <li><a class="dropdown-item" href="/">Cerrar sesión</a></li>
          </ul>
    </form>
  </div>
</nav>
  <router-view/>
</template>

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
</style>
