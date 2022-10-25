<template>
    <div class="container">
        <div class="row">
            <!-- Button trigger modal -->
            <button type="button" class="my-5 btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Crear Escape
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Crear escape room </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="form">
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Nombre del escape
                                    </label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="">Respuesta 1</label>
                                    <input type="text" class="form-control">
                                </div>

                                <div class="mb-3">
                                    <button class="btn btn-primary">Guardar</button>
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Retos</th>

                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>
                                <router-link to="/retos"><button class="btn btn-outline-primary mx-1">Retos</button>
                                </router-link>
                            </td>

                            <td>
                                <button class="btn btn-outline-warning mx-1">Editar</button>
                                <button class="btn btn-outline-danger">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>
                                <router-link to="/retos"><button class="btn btn-outline-primary mx-1">Retos</button>
                                </router-link>
                            </td>

                            <td>
                                <button class="btn btn-outline-warning mx-1">Editar</button>
                                <button class="btn btn-outline-danger">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>