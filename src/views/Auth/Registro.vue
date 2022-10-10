<template>
    <div class="container">
        <!-- Section: Design Block -->
        <section class="text-center">
            <div class="card  col-11 col-md-7 mx-auto my-4" >
                <img src="../../assets/Sign-up-amico.png" class="card-img-top" alt="..." style="width: 18rem; margin: auto;">
                <div class="card-body py-5 px-md-5">

                    <div class="row d-flex justify-content-center">
                        <div class="">
                            <h2 class="fw-bold mb-5">Registro</h2>
                            <form>
                                <!-- 2 column grid layout with text inputs for the first and last names -->
                                <div class="row">
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <input type="text" id="form3Example1" class="form-control" />
                                            <label class="form-label" for="form3Example1">Nombre Completo</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <input type="email" id="form3Example3" class="form-control" />
                                            <label class="form-label" for="form3Example3">Correo Electronico</label>
                                        </div>
                                    </div>
                                </div>

                                <!-- Password input -->
                                <div class="form-outline mb-4">
                                    <input type="password" id="form3Example4" class="form-control" />
                                    <label class="form-label" for="form3Example4">Password</label>
                                </div>

                                <!-- Email input -->
                                <div class="form-outline mb-4">
                                    <div class="form-floating">
                                        <select class="form-select" id="floatingSelect"
                                            aria-label="Floating label select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">Participante</option>
                                            <option value="2">Administrador</option>
                                        </select>
                                        <label for="floatingSelect">Tipo de Usuario</label>
                                    </div>
                                </div>
                                <!-- Submit button -->
                                <button type="submit" class="btn btn-primary btn-block mb-4">
                                    Registrar
                                </button>
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
.bi-person-bounding-box {
    font-size: 80px;
}
</style>