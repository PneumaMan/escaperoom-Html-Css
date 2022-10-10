<template> 
    <div class="container">
        <!-- Section: Design Block -->
        <section class="text-center">
            <div class="card  col-11 col-md-7 mx-auto my-4" >
                <img src="../../assets/Mobile-login-bro.png" class="card-img-top" alt="..." style="width: 18rem; margin: auto;">
                <div class="card-body py-5 px-md-5">
                    <div class="row d-flex justify-content-center">
                        <div class="">
                            <h2 class="fw-bold mb-3">Inicio sesión </h2>
                            <form>
                                
                                <!-- Email input -->
                                <div class="form-outline mb-4">
                                    <input type="email" id="form3Example3" class="form-control" />
                                    <label class="form-label h5" for="form3Example3">Correo electronico</label>
                                </div>

                                <!-- Password input -->
                                <div class="form-outline mb-4">
                                    <input type="password" id="form3Example4" class="form-control" />
                                    <label class="form-label h5" for="form3Example4">Contraseña</label>
                                </div>

                                <!-- Checkbox -->
                                <div class="form-check d-flex justify-content-center mb-4">
                                    <p class="">¿Aun no tiene cuenta? <a href="/regitro">  Registrarse</a></p>
                                </div>

                                <!-- Submit button -->
                                <router-link to="/dashboard">
                                    <button type="submit" class="btn btn-primary btn-block mb-4">
                                        Entrar
                                    </button>
                                </router-link>

                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section: Design Block -->
    </div>
</template>
<style>
.bi-person-bounding-box{
    font-size: 80px;
}
</style>